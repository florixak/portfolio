import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Runs on every matched request. It:
 * - Detects the visitor's preferred locale from, in order of priority,
 *   the URL prefix, the `NEXT_LOCALE` cookie, then the `Accept-Language`
 *   header (browser language).
 * - Redirects non-default-locale visitors to their prefixed URL,
 *   e.g. Czech visitors hitting `/about` are sent to `/cs/about`.
 *   English (default locale) is served without a prefix (`/about`).
 * - Persists the resolved locale in a cookie so it "sticks" across visits.
 */
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  // - API routes, tRPC
  // - Next.js internals (`_next`, `_vercel`)
  // - files with an extension (e.g. `favicon.ico`, images) unless in search params
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
