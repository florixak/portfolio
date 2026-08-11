import { defineRouting } from "next-intl/routing";

/**
 * Single source of truth for supported locales.
 *
 * Consumed by:
 * - `middleware.ts` (locale negotiation, cookie + prefix handling)
 * - `i18n/navigation.ts` (typed `Link`, `useRouter`, `usePathname`, …)
 * - `i18n/request.ts` (loading the right message catalog per request)
 */
export const routing = defineRouting({
  locales: ["en", "cs"],
  defaultLocale: "en",

  // Every locale gets an explicit URL prefix ("/en/...", "/cs/...").
  // Alternative: "as-needed" keeps the default locale unprefixed
  // (e.g. "/about" for English, "/cs/about" for Czech) which is a common
  // choice when you want to preserve existing, already-indexed URLs.
  localePrefix: "always",

  // Persist the resolved locale in a cookie so a returning visitor keeps
  // their choice even if their browser's `Accept-Language` changes.
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  },

  // Declaring every internal route here (instead of relying on Next.js'
  // `typedRoutes`, which only sees the `[locale]` segment on disk) gives
  // `Link`/`useRouter`/`redirect` fully typed, autocompleted `href`s. Since
  // both locales share identical pathnames, each entry is a single string
  // rather than a per-locale record.
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/projects": "/projects",
    "/projects/[slug]": "/projects/[slug]",
    "/contact": "/contact",
  },
});

export type Locale = (typeof routing.locales)[number];
