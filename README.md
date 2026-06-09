# RicePurityTest.im

Static, privacy-first Rice Purity Test site for `ricepuritytest.im`.

This project is an independent browser-based implementation. It is not official,
endorsed, sponsored, or affiliated with Rice University.

## Features

- 100-question browser-only test
- Instant score calculation without login
- No backend answer storage
- Score-only result URLs such as `/result/?score=75`
- Exact score meaning pages from `/score/0/` through `/score/100/`
- Multilingual static pages for English, Spanish, Portuguese, Indonesian,
  German, French, Chinese, and Japanese
- DOM-first interactive result card studio with PNG export, copy image, native
  share, captions, templates, sizes, privacy labels, and optional QR code

## Privacy Model

The test is calculated in the browser. Selected answers are not sent to a
backend by this static package, and result links contain only the score number.

The share card is intentionally score-only. It does not include selected
checklist answers.

## Project Shape

This is a static HTML/CSS/JavaScript package:

- `index.html` - home page
- `take/` - interactive 100-question test
- `result/` - result card studio
- `score/` - exact score pages
- `assets/css/styles.css` - shared styles
- `assets/js/app.js` - shared browser behavior
- `assets/js/questions.js` - question data
- localized folders: `es/`, `pt/`, `id/`, `de/`, `fr/`, `zh/`, `ja/`

There is no package manager, build step, login system, database, or server-side
answer storage in this repository.

## Local Preview

Any static file server can serve the directory:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://127.0.0.1:8080/
```

Opening individual HTML files directly can work for simple pages, but a static
server is recommended because the site uses absolute asset paths such as
`/assets/js/app.js`.

## Deployment

The package can be deployed as static files to Cloudflare, Netlify, Vercel, S3,
Nginx, Apache, or any static host.

Host-specific hint files included:

- `_headers`
- `netlify.toml`
- `vercel.json`

Keep the privacy model intact if you adapt the project: do not add answer-level
tracking, login requirements, or backend answer storage without clearly changing
the privacy policy and UI claims.

## License

MIT. See `LICENSE`.
