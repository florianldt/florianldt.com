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
- `content/apps/<app>/` — one folder per app: `_index.md` is the landing page (`/apps/<app>/`), with `privacy.md` and `support.md` alongside, plus its icon, screenshots and font. Copy `pirate-survivors/` to add a new app; its colours, font, screenshots and features are set in `_index.md`, setting `testFlightURL` there shows a TestFlight beta button, and `appStoreURL` replaces either with a download button. A screenshot entry with a `video` plays that MP4 on a loop, using `src` as its poster.
- `content/privacy/` — older app privacy policies (served at `/privacy/<name>/`); keep these URLs, they're linked from the App Store
- `layouts/` — page templates
- `assets/css/main.css` — styles
- `static/` — files copied as-is (images, favicon, `CNAME`)

## Deployment

Every push to `master` builds the site and publishes it to the `gh-pages` branch via GitHub Actions (`.github/workflows/deploy.yml`).
