import type { routing } from "@/i18n/routing";
import type en from "@/messages/en.json";

type Messages = typeof en;

declare global {
  // Enables autocompletion and type-checking for `useTranslations`/`getTranslations`
  // keys and `t.rich`/`t.raw` return types across the app.
  type IntlMessages = Messages;
}

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
