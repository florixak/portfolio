# Portfolio — Ondřej Pták

Personal portfolio site showcasing projects, stack, and contact information. Built with Next.js App Router, React Server Components, and a content-driven architecture — all copy and project data live in typed data files, not a CMS.

## Features

- **Home** — Hero, tech stack, featured projects, contact section
- **Projects** — Filterable, searchable project grid with detail pages (preview, case study, highlights)
- **About** — Bio, current focus, interests
- **Contact** — Social links, email copy, availability terminal
- **Dark mode** — System-aware theme toggle
- **Typed routes** — Next.js typed routes for type-safe navigation
- **Internationalization** — English (default) and Czech via `next-intl`, with automatic locale detection, `/en` and `/cs` URL prefixes, and a language switcher

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Cache Components)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + Radix UI
- [next-themes](https://github.com/pacocoursey/next-themes)
- [next-intl](https://next-intl.dev/) (internationalization)

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
app/
  [locale]/           # Localized routes (/en, /cs, .../about, .../contact, .../projects, .../projects/[slug])
  sitemap.ts          # Emits every route x locale with hreflang alternates
  robots.ts, manifest.ts, not-found.tsx  # Locale-independent root files
i18n/                 # next-intl routing config, navigation helpers, request config
messages/             # Translation catalogs (en.json, cs.json)
components/           # UI by section (hero, projects, contact, layout, theme, …)
data/                 # Content (edit these to update the site)
lib/                  # Utilities (filtering, project helpers, SEO)
public/               # Static assets (resume PDF, project images)
types/                # Shared TypeScript types
constants/            # Nav items, filters
```

## Internationalization

The site is available in English (default, `/en`) and Czech (`/cs`), powered by [next-intl](https://next-intl.dev/).

- **Routing** — `i18n/routing.ts` declares the supported locales and every static pathname (used for typed, autocompleted `Link`/`useRouter` calls). `middleware.ts` detects the visitor's locale (URL prefix → `NEXT_LOCALE` cookie → `Accept-Language` header) and redirects to the prefixed URL.
- **Translations** — UI copy for the header/footer, hero, about, projects chrome, and contact sections lives in `messages/en.json` and `messages/cs.json`. Project prose (titles, descriptions, highlights, case studies) lives under the `projectEntries` namespace in those catalogs. Locale-invariant project meta stays in `data/projects.ts`.
- **Usage** — Server Components use `useTranslations`/`getTranslations` from `next-intl` / `next-intl/server` (e.g. `components/hero/hero.tsx`, `app/[locale]/about/page.tsx`); Client Components use the same `useTranslations` hook (e.g. `components/hero/hero-cta.tsx`, `components/layout/language-switcher.tsx`).
- **Language switcher** — `components/layout/language-switcher.tsx` is a small client component in the header that re-navigates to the current page under the other locale.

### Adding a new language

1. Add the locale code to `locales` in `i18n/routing.ts`.
2. Copy `messages/en.json` to `messages/<locale>.json` and translate every value.
3. Add a label for it to `languageSwitcher.locales` in both message files.

### Adding more translations

To localize a new piece of UI copy: add a key under the relevant namespace in both `messages/en.json` and `messages/cs.json`, then read it with `useTranslations("namespace")` (or `getTranslations` in `async` Server Components) instead of hardcoding the string.

## Updating content

Most site content is data-driven. Edit the files in `data/` — no component changes needed for typical updates.

| File | Purpose |
|------|---------|
| `profile.ts` | Locale-invariant identity (name, email, availability) |
| `projects.ts` | Locale-invariant project meta (slug, stack, images, links, status, year, priority) |
| `stack.ts` | Home page tech stack |
| `social.ts` | Social links and resume path |
| `terminal.ts` | Terminal section builders (localized strings passed in) |

About page body copy and profile fields like role, tagline, location, university, and degree live in `messages/en.json` and `messages/cs.json` under the `about` and `profile` namespaces.

Project prose (title, descriptions, highlights, case study) lives under the `projectEntries` namespace in those same message catalogs, keyed by slug. Helpers in `lib/project-utils.ts` merge meta + copy into a single `Project`.

### Adding a project

1. Add a new meta entry to `data/projects.ts` (set `slug`, `thumbnail`, `screenshots`, `featured`, `priority`, `stack`, links, etc.).
2. Add matching prose under `projectEntries.<slug>` in both `messages/en.json` and `messages/cs.json`.
3. Place preview images in `public/projects/<slug>/`.
4. Reference them in the project meta, e.g. `/projects/omori-wordle/omori-wordle.webp`.

Lower `priority` values appear first in project lists and featured ordering.

### Static assets

Place files in `public/`:

- Resume PDF → `/Ondrej_Ptak_Resume.pdf` (linked from `data/social.ts`)
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
