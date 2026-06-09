# Security Policy

## Supported Scope

This repository is a static HTML/CSS/JavaScript site. It has no backend service,
database, login system, or server-side answer storage.

Security reports should focus on issues in the public static package, including:

- DOM XSS or unsafe browser-side rendering
- Privacy claim regressions
- Accidental answer persistence or answer-level tracking
- Unsafe third-party script additions
- Static hosting or header misconfiguration risks

## Reporting

Please report suspected vulnerabilities through GitHub Security Advisories when
available, or open a minimal issue if the report does not contain sensitive
details.

Do not include private quiz answers, credentials, cookies, tokens, or unrelated
personal data in public issues.

## Privacy Expectations

The current site calculates scores in the browser and result links contain only
the score number. Selected checklist answers should not be collected,
transmitted, or stored by default.

Any change that adds analytics, ads, backend storage, login, or answer-level
events should update the user-facing privacy statements before release.
