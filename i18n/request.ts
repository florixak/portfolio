import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Request-scoped i18n configuration. Runs on the server for every request
 * and resolves which locale + message catalog to expose to Server
 * Components via `getTranslations()` / `useTranslations()`.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` route segment.
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
