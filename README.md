# Sonderbek IT — Homepage

Static marketing site for Sonderbek IT, a home computer repair business. Plain HTML/CSS/JS, no build step, no dependencies.

## Features

- English / Danish language toggle (`js/script.js` holds all translated strings; content is applied via `data-i18n*` attributes in `index.html`)
- Light / dark theme toggle, respecting the visitor's OS preference by default
- Contact form that opens the visitor's own email client via a `mailto:` link — no data is stored or transmitted through the site itself

## Structure

```
index.html      Page markup
css/styles.css  Styles
js/script.js    i18n strings, theme toggle, form handling
robots.txt      Crawler rules
_headers        Security headers (Cloudflare Pages / Netlify format)
```

## Local preview

No build tooling is required — open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
