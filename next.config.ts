import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // NOTE: `cacheComponents` (Partial Prerendering / dynamicIO) is disabled
  // because `next-intl`'s locale resolution for nested dynamic segments
  // (here: `/[locale]/projects/[slug]`) still relies on reading the
  // `x-next-intl-locale` request header as a stopgap until `next/root-params`
  // lands, which is incompatible with `cacheComponents`'s caching boundaries.
  // See https://github.com/amannn/next-intl/issues/1493. Re-enable once the
  // app is on Next.js 16.3+ and `i18n/request.ts` reads the locale via
  // `next/root-params` instead of `setRequestLocale`.
  typedRoutes: true,
};

export default withNextIntl(nextConfig);
