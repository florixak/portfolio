# Portfolio — Ondřej Pták

Personal portfolio site showcasing projects, stack, and contact information. Built with Next.js App Router, React Server Components, and a content-driven architecture — all copy and project data live in typed data files, not a CMS.

## Features

- **Home** — Hero, tech stack, featured projects, contact section
- **Projects** — Filterable, searchable project grid with detail pages (preview, case study, highlights)
- **About** — Bio, current focus, interests
- **Contact** — Social links, email copy, availability terminal
- **Dark mode** — System-aware theme toggle
- **Typed routes** — Next.js typed routes for type-safe navigation

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Cache Components)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + Radix UI
- [next-themes](https://github.com/pacocoursey/next-themes)

## Getting started

### Prerequisites

- Node.js 20+
- npm, pnpm, yarn, or bun

### Install and run

```bash
git clone https://github.com/florixak/portfolio.git
cd portfolio
npm install   # or: pnpm install
npm run dev   # or: pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project structure

```
app/                  # Routes (/, /about, /contact, /projects, /projects/[slug])
components/           # UI by section (hero, projects, contact, layout, theme, …)
data/                 # Content (edit these to update the site)
lib/                  # Utilities (filtering, project helpers)
public/               # Static assets (resume PDF, project images)
types/                # Shared TypeScript types
constants/            # Nav items, filters
```

## Updating content

Most site content is data-driven. Edit the files in `data/` — no component changes needed for typical updates.

| File | Purpose |
|------|---------|
| `profile.ts` | Name, role, location, availability |
| `about.ts` | About page copy |
| `projects.ts` | Project entries |
| `stack.ts` | Home page tech stack |
| `social.ts` | Social links and resume path |
| `terminal.ts` | Terminal section copy on the contact page |

### Adding a project

1. Add a new entry to `data/projects.ts` (set `slug`, `thumbnail`, `screenshots`, `featured`, `priority`, etc.).
2. Place preview images in `public/projects/<slug>/`.
3. Reference them in the project entry, e.g. `/projects/omori-wordle/omori-wordle.webp`.

Lower `priority` values appear first in project lists and featured ordering.

### Static assets

Place files in `public/`:

- Resume PDF → `/OndrejPtak_Resume.pdf` (linked from `data/social.ts`)
- Project images → `/projects/<slug>/<image-name>.webp`

## Architecture notes

- **Server + client split** — Pages and static sections are React Server Components; interactive parts (header nav, project filters, theme toggle, email copy) are client components.
- **Reusable layout** — Shared patterns include `SectionHeader`, `Column`, `PageFooter`, `Terminal`.
- **Project detail pages** — Statically generated via `generateStaticParams` from `data/projects.ts`.

## Deploy

Optimized for [Vercel](https://vercel.com):

```bash
npm run build
```

Connect the repository to Vercel for automatic deployments on push.

## License

Private — all rights reserved.
