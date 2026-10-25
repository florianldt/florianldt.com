# florianldt.com

Personal website and app privacy policies, built with [Hugo](https://gohugo.io).

## Development

```shell
brew install hugo
hugo server
```

The site is then available at http://localhost:1313.

## Structure

- `hugo.toml` — site config, including the links shown on the home page
- `content/privacy/` — one Markdown file per app privacy policy (served at `/privacy/<name>/`)
- `layouts/` — page templates
- `assets/css/main.css` — styles
- `static/` — files copied as-is (images, favicon, `CNAME`)

## Deployment

Every push to `master` builds the site and publishes it to the `gh-pages` branch via GitHub Actions (`.github/workflows/deploy.yml`).
