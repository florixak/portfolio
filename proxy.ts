import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Runs on every matched request. It:
 * - Detects the visitor's preferred locale from, in order of priority,
 *   the URL prefix, the `NEXT_LOCALE` cookie, then the `Accept-Language`
 *   header (browser language).
 * - Redirects `/` (and any un-prefixed path) to the resolved locale,
 *   e.g. `/about` -> `/en/about` or `/cs/about`.
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
