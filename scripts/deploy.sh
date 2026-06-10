#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PARENT_DIR="$(cd "$ROOT_DIR/.." && pwd)"
DEFAULT_WORKER_NAME="solitary-sea-c74e"
DEFAULT_ACCOUNT_ID="241fc992ba01afb2677e775bc6e3ecb2"
DEFAULT_PUBLIC_URL="https://solitary-sea-c74e.9c8e1a84.workers.dev"
DEFAULT_CANONICAL_DOMAIN="https://ricepuritytest.im"

MODE="deploy"
KEEP_STAGE=0
DEBUG_MODE=0
TOKEN_SOURCE="unset"

usage() {
  cat <<'EOF'
Usage:
  scripts/deploy.sh [--package-only] [--verify-only] [--preflight-only] [--keep-stage] [--debug]

Modes:
  --package-only  Build the clean publish package and stop.
  --verify-only   Verify the currently live deployment only.
  --preflight-only Validate token, stage, and Wrangler config without uploading.
  default         Build a clean publish stage, deploy with Wrangler, then verify.

Environment:
  CLOUDFLARE_API_TOKEN   Required for deploy mode.
  CLOUDFLARE_ACCOUNT_ID  Optional; defaults to the current recorded project account.
  CLOUDFLARE_WORKER_NAME Optional; defaults to solitary-sea-c74e.

Notes:
  - local.env.txt is parsed from the repo root and the parent workspace dir if
    present. Shell-safe KEY=VALUE lines are imported.
  - If CLOUDFLARE_API_TOKEN is not set explicitly, this script also supports
    extracting a bearer token from a curl example line in local.env.txt.
  - Cloudflare token aliases CLOUDFLARE_TOKEN and Cloudflare_TOKEN are accepted
    and normalized to CLOUDFLARE_API_TOKEN.
  - --debug enables WRANGLER_LOG=debug for long-running upload diagnostics.
  - The current checked-in local.env.txt is not sufficient for Cloudflare
    deploys.
  - This script stages a clean publish tree so repo-only files are not uploaded
    as public static assets.
EOF
}

for arg in "$@"; do
  case "$arg" in
    --package-only)
      MODE="package"
      ;;
    --verify-only)
      MODE="verify"
      ;;
    --preflight-only)
      MODE="preflight"
      ;;
    --keep-stage)
      KEEP_STAGE=1
      ;;
    --debug)
      DEBUG_MODE=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $arg" >&2
      usage >&2
      exit 2
      ;;
  esac
done

load_env_file() {
  local env_path="$1"
  [[ -f "$env_path" ]] || return 0

  while IFS= read -r line || [[ -n "$line" ]]; do
    [[ "$line" =~ ^[[:space:]]*[A-Za-z_][A-Za-z0-9_]*= ]] || continue
    export "$line"
  done < "$env_path"

  if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
    if [[ -n "${CLOUDFLARE_TOKEN:-}" ]]; then
      CLOUDFLARE_API_TOKEN="$CLOUDFLARE_TOKEN"
      TOKEN_SOURCE="${env_path##*/}:CLOUDFLARE_TOKEN"
    elif [[ -n "${Cloudflare_TOKEN:-}" ]]; then
      CLOUDFLARE_API_TOKEN="$Cloudflare_TOKEN"
      TOKEN_SOURCE="${env_path##*/}:Cloudflare_TOKEN"
    else
      CLOUDFLARE_API_TOKEN="$(
        python3 - "$env_path" <<'PY'
import re
import sys
from pathlib import Path

text = Path(sys.argv[1]).read_text()
match = re.search(r"Authorization:\s*Bearer\s+([A-Za-z0-9._-]+)", text)
if match:
    print(match.group(1), end="")
PY
      )"
      if [[ -n "${CLOUDFLARE_API_TOKEN:-}" ]]; then
        TOKEN_SOURCE="${env_path##*/}:AuthorizationBearer"
      fi
    fi
    export CLOUDFLARE_API_TOKEN
  fi
}

load_env_file "$PARENT_DIR/local.env.txt"
load_env_file "$ROOT_DIR/local.env.txt"

WORKER_NAME="${CLOUDFLARE_WORKER_NAME:-$DEFAULT_WORKER_NAME}"
ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-$DEFAULT_ACCOUNT_ID}"
PUBLIC_URL="${CLOUDFLARE_PUBLIC_URL:-$DEFAULT_PUBLIC_URL}"
CANONICAL_DOMAIN="${CLOUDFLARE_CANONICAL_DOMAIN:-$DEFAULT_CANONICAL_DOMAIN}"

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Missing required command: $1" >&2
    exit 1
  }
}

require_cmd python3
require_cmd rsync
require_cmd shasum
require_cmd /usr/bin/zip

asset_version="$(
  python3 - "$ROOT_DIR/assets/js/app.js" <<'PY'
import re
import sys
from pathlib import Path

text = Path(sys.argv[1]).read_text()
match = re.search(r"const ASSET_VERSION = '([^']+)'", text)
if not match:
    raise SystemExit("Could not find ASSET_VERSION in assets/js/app.js")
print(match.group(1), end="")
PY
)"

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
stage_dir="$(mktemp -d /tmp/ricepuritytest-stage.XXXXXX)"
package_path="/tmp/ricepuritytest-${asset_version}-${timestamp}.zip"
deploy_log="/tmp/ricepuritytest-deploy-${asset_version}-${timestamp}.log"
wrangler_config="/tmp/ricepuritytest-wrangler-${asset_version}-${timestamp}.jsonc"
NPM_CACHE_DIR="${NPM_CONFIG_CACHE:-/tmp/codex-npm-cache}"

cleanup() {
  if [[ "$KEEP_STAGE" -eq 0 ]]; then
    rm -rf "$stage_dir"
    rm -f "$wrangler_config"
  else
    echo "Kept stage directory: $stage_dir"
    echo "Kept Wrangler config: $wrangler_config"
  fi
}
trap cleanup EXIT

stage_publish_tree() {
  rsync -a --delete \
    --exclude '.git/' \
    --exclude 'ops/' \
    --exclude 'scripts/' \
    --exclude 'AGENTS.md' \
    --exclude '.gitignore' \
    --exclude '.DS_Store' \
    --exclude '**/.DS_Store' \
    --exclude 'local.env.txt' \
    --exclude 'PROJECT_SPEC_P2.md' \
    --exclude 'BUILD_SUMMARY.txt' \
    --exclude 'PROJECT_STATE.md' \
    --exclude 'README.md' \
    --exclude 'README_DEPLOY.md' \
    --exclude 'SECURITY.md' \
    --exclude 'LICENSE' \
    --exclude 'wrangler.jsonc' \
    --exclude '.wrangler/' \
    --exclude '.assetsignore' \
    "$ROOT_DIR/" "$stage_dir/"

  cat >"$wrangler_config" <<EOF
{
  "name": "${WORKER_NAME}",
  "compatibility_date": "$(date +%F)",
  "account_id": "${ACCOUNT_ID}",
  "assets": {
    "directory": "${stage_dir}",
    "not_found_handling": "404-page"
  }
}
EOF
}

build_package() {
  (
    cd "$stage_dir"
    /usr/bin/zip -qr "$package_path" .
  )
  shasum -a 256 "$package_path"
  echo "$package_path"
}

verify_live() {
  local ts
  ts="$(date +%s)"
  local css_url="${CANONICAL_DOMAIN}/assets/css/styles.css?v=${asset_version}&t=${ts}"
  local js_url="${CANONICAL_DOMAIN}/assets/js/app.js?v=${asset_version}&t=${ts}"
  local question_js_url="${CANONICAL_DOMAIN}/assets/js/questions.js?v=${asset_version}&t=${ts}"

  for url in \
    "${PUBLIC_URL}/?t=${ts}" \
    "${CANONICAL_DOMAIN}/?t=${ts}" \
    "https://www.ricepuritytest.im/?t=${ts}" \
    "${CANONICAL_DOMAIN}/result/?score=72&t=${ts}" \
    "${CANONICAL_DOMAIN}/take/?t=${ts}" \
    "${CANONICAL_DOMAIN}/score/72/?t=${ts}" \
    "${CANONICAL_DOMAIN}/zh/result/?score=72&t=${ts}" \
    "${CANONICAL_DOMAIN}/sitemap.xml?t=${ts}" \
    "$css_url" \
    "$js_url" \
    "$question_js_url"; do
    printf '%s ' "$url"
    /usr/bin/curl -sS -o /tmp/rpt-check.out \
      -w '%{http_code} %{content_type} %{size_download}\n' \
      --max-time 25 \
      "$url"
  done
}

verify_cloudflare_token() {
  ACCOUNT_ID="$ACCOUNT_ID" TOKEN_SOURCE="$TOKEN_SOURCE" python3 - <<'PY'
import json
import os
import sys
import urllib.error
import urllib.request

token = os.environ.get("CLOUDFLARE_API_TOKEN", "")
account_id = os.environ.get("ACCOUNT_ID", "")
if not token:
    print("Missing CLOUDFLARE_API_TOKEN.", file=sys.stderr)
    raise SystemExit(1)
if not account_id:
    print("Missing ACCOUNT_ID for Cloudflare token verification.", file=sys.stderr)
    raise SystemExit(1)

req = urllib.request.Request(
    f"https://api.cloudflare.com/client/v4/accounts/{account_id}/tokens/verify",
    headers={
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    },
)

try:
    with urllib.request.urlopen(req, timeout=20) as resp:
        data = json.load(resp)
except urllib.error.HTTPError as exc:
    if exc.code == 401:
        print("Cloudflare API token is unauthorized or expired.", file=sys.stderr)
        raise SystemExit(1)
    print(f"Cloudflare token verification failed with HTTP {exc.code}.", file=sys.stderr)
    raise SystemExit(1)
except Exception as exc:  # noqa: BLE001
    print(f"Cloudflare token verification failed: {exc}", file=sys.stderr)
    raise SystemExit(1)

if not data.get("success"):
    print("Cloudflare token verification returned success=false.", file=sys.stderr)
    raise SystemExit(1)

result = data.get("result", {})
status = result.get("status")
if status and status.lower() != "active":
    print(f"Cloudflare token is not active: {status}", file=sys.stderr)
    raise SystemExit(1)

print(
    f"Cloudflare token verification passed. source={os.environ.get('TOKEN_SOURCE', 'unknown')}",
    file=sys.stderr,
)
PY
}

preflight_report() {
  cat <<EOF
preflight ok
asset_version=${asset_version}
worker_name=${WORKER_NAME}
account_id=${ACCOUNT_ID}
token_source=${TOKEN_SOURCE}
stage_dir=${stage_dir}
wrangler_config=${wrangler_config}
EOF
}

deploy_with_wrangler() {
  if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
    echo "CLOUDFLARE_API_TOKEN is required for deploy mode." >&2
    echo "local.env.txt was parsed, but it does not provide a usable Cloudflare deploy token." >&2
    exit 1
  fi

  require_cmd npx
  verify_cloudflare_token

  (
    cd "$ROOT_DIR"
    if [[ "$DEBUG_MODE" -eq 1 ]]; then
      NPM_CONFIG_CACHE="$NPM_CACHE_DIR" \
      CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" \
      CI=1 \
      WRANGLER_LOG=debug \
      npx -y wrangler@latest deploy --config "$wrangler_config"
    else
      NPM_CONFIG_CACHE="$NPM_CACHE_DIR" \
      CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" \
      CI=1 \
      npx -y wrangler@latest deploy --config "$wrangler_config"
    fi
  ) | tee "$deploy_log"

  echo "Deploy log: $deploy_log"
}

case "$MODE" in
  verify)
    verify_live
    ;;
  preflight)
    stage_publish_tree
    verify_cloudflare_token
    preflight_report
    ;;
  package)
    stage_publish_tree
    build_package
    ;;
  deploy)
    stage_publish_tree
    build_package
    deploy_with_wrangler
    verify_live
    ;;
esac
