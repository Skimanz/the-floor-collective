# The Flooring Collective — Website

Static HTML website for The Flooring Collective, a Queenstown-based timber floor installation specialist.

**Live (staging):** https://the-floor-collective.pages.dev
**Live (production):** https://flooringcollective.co.nz (pending domain connection)
**Custom domain:** https://flooringcollective.co.nz (pending)

---

## Tech Stack

- Static HTML5 + inline CSS + vanilla JS
- Hosted on Cloudflare Pages (free tier)
- Source on GitHub: github.com/Skimanz/the-floor-collective
- Forms via Formspree (ID: xdavladk)
- Fonts: Cormorant Garamond + DM Sans (Google Fonts)

---

## File Structure

```
/
├── index.html          # Home
├── services.html       # Services
├── gallery.html        # Our Work / Gallery
├── about.html          # About
├── contact.html        # Get a Quote / Contact
├── 404.html            # Custom 404 page
├── sitemap.xml         # XML sitemap for SEO
├── robots.txt          # Search engine directives
├── css/
│   └── style.css       # Shared styles (reset, variables, buttons, footer)
├── js/
│   └── shared.js       # Shared JS (fade-up scroll animations)
└── images/
    ├── hero.jpg         # Home page hero image
    ├── og-image.jpg     # Social sharing image (1200×630px)
    └── ...              # All page images
```

---

## Architecture

**Shared CSS (`style.css`):** Reset, CSS variables, buttons, typography classes, CTA band, footer, animations. ~90 lines.

**Inline CSS (each HTML file):** Page-specific layout styles in a `<style>` block in `<head>`. Self-contained — each page works independently.

**Nav:** Fully inline in each HTML file (header block). If you change the nav, update all 5 HTML files.
> ⚠️ NAV IS DUPLICATED ACROSS ALL 5 HTML FILES — edit all when changing nav.

---

## Deployment

Auto-deploys via Cloudflare Pages on every push to `main`.

1. Make changes to HTML/CSS files
2. Upload to GitHub (drag and drop via web UI)
3. Cloudflare auto-deploys in ~30 seconds
4. Hard refresh browser: **Cmd+Shift+R**

---

## Key Details

| Item | Value |
|------|-------|
| Formspree ID | xdavladk |
| WhatsApp | +64 21 754 626 0 |
| Email | ashjohns@me.com |
| Cloudflare account | Ashjohns@me.com |
| GitHub repo | Skimanz/the-floor-collective (repo name kept for internal continuity) |

---

## Image Guidelines

- Hero image: wide landscape crop, min 1800px wide
- OG image: exactly 1200×630px, sRGB, 72dpi, JPEG quality 80
- All images: JPEG format, lowercase filenames, no spaces
- HEIC must be converted to JPEG before upload (Finder → Quick Actions → Convert Image)

---

## Built by

[Strand Media Ltd](https://strandmedia.co.nz) — Queenstown, New Zealand
