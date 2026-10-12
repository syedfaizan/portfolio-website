# Syed Faizan — Portfolio

Personal portfolio of **Syed Faizan**, a Technical Lead specialising in full-stack JavaScript (React.js, Next.js, TypeScript, Node.js) with 11.5+ years of experience building scalable platforms for e-commerce, media, and enterprise clients.

Built with **Next.js 16** (App Router) and **Tailwind CSS v4**.

## Views

- `/` — Grid (bento) layout with photo tile, the default view
- `/list` — Classic list/timeline layout

## Content

All site content lives in [`src/app/personal-info.json`](src/app/personal-info.json) — projects, experience, education, publications, skills, socials, and contact details. Edit that file to update the site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `npm run dev`    | Start the dev server            |
| `npm run build`  | Production build                |
| `npm run start`  | Serve the production build      |
| `npm run lint`   | Run ESLint                      |

## Deploy

App Router site, deploys as-is on Vercel with the default Next.js preset. No environment variables or extra configuration required.