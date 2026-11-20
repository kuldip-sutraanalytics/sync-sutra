# Sync Sutra Website (Next.js)

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · Motion 14 · lucide-react

## Run
```bash
npm install
cp .env.example .env.local   # optional – defaults already set
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Routes
| Route | Purpose |
|---|---|
| `/` | Landing page (all original sections + new feature grid, integrations, FAQ) |
| `/features`, `/features/[slug]` | Feature overview + 9 detail pages |
| `/pricing` | Plans, comparison table, pricing FAQ |
| `/use-cases`, `/use-cases/[slug]` | 4 audience pages |
| `/integrations`, `/roadmap`, `/faq`, `/security`, `/about`, `/contact` | Supporting pages |
| `/docs` | Tutorials (old `/documentation` redirects here) |
| `/blog`, `/blog/[slug]` | Blog (6 existing posts) |
| `/privacy-policy`, `/terms-conditions`, `/refund-policy` | Legal |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image` | Generated SEO files |

## Where to edit
- Site config, URLs, socials: `src/data/site.js`
- Navigation + footer links: `src/data/nav.js`
- Features / use cases / integrations / roadmap / FAQ: `src/data/*.js` (pages update automatically)
- Blog posts: add a file in `src/components/blog/posts/` and export it from `index.js`
- Brand colours & animations: `src/app/globals.css` (`@theme` block)
- Per-page SEO: `createMetadata()` in `src/lib/seo.js`

## Notes
- Env vars: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID`, `NEXT_PUBLIC_CONTACT_ENDPOINT`.
- Deploy on Vercel with zero config.
- Fonts: Manrope + JetBrains Mono are self-hosted via Fontsource; Cabinet Grotesk loads from Fontshare.
