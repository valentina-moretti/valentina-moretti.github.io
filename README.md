# Portfolio Launchpad (Vite + React + Tailwind + GSAP)

This project is a production-ready, fully customizable portfolio template built to match the structure/spacing/typography of the reference site.

## Tech stack (chosen to match the reference)

- **Vite + React + TypeScript**: fast local dev + static build output (perfect for GitHub Pages).
- **Tailwind CSS 3.4 + @tailwindcss/typography**: identical utility classes + `prose` typography.
- **Inter Variable** (`@fontsource-variable/inter`): same font family + weight range (100–900).
- **GSAP + ScrollTrigger**: lightweight, high-quality reveal animations.
- **lucide-react**: icons (dock + chevrons).
- **clsx + tailwind-merge**: clean conditional class composition.

## Customize content

Edit the data in:

- [src/content/site.ts](src/content/site.ts)

Replace placeholder images in:

- `public/placeholder-avatar.svg`
- `public/placeholder-project.svg`
- `public/placeholder-story.svg`

## Local development

- `npm run dev`
- `npm run build`
- `npm run preview`

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds and deploys to Pages on every push to `main`:

- [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

Notes:

- For GitHub Pages project sites, Vite needs a base path like `/<repo>/`.
- The workflow sets `VITE_BASE` automatically to `/${{ github.event.repository.name }}/`.
- If you deploy to a **custom domain** or `username.github.io` root site, set `VITE_BASE=/` in the workflow.
