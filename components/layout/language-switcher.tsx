"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

/**
 * Reusable client-side language switcher.
 *
 * - Reads the active locale via `useLocale()`.
 * - Re-navigates to the same pathname under the target locale via the
 *   locale-aware `useRouter()` from `@/i18n/navigation`, which rewrites the
 *   `/en` / `/cs` URL prefix and lets the middleware persist the choice in
 *   the `NEXT_LOCALE` cookie.
 * - `useTransition` keeps the UI responsive while the new locale's
 *   Server Components are fetched.
 */
const LanguageSwitcher = () => {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  // Needed to preserve dynamic segments (e.g. the project `slug`) when
  // switching locale on a route like `/projects/[slug]`.
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- `pathname` may require `params` (e.g. for
        // `/projects/[slug]`); `useParams()` always supplies a matching
        // shape for the *current* route, which TypeScript can't verify here.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label={t("label")}
          disabled={isPending}
        >
          <Globe className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
          <span className="sr-only">{t("label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((availableLocale) => (
          <DropdownMenuItem
            key={availableLocale}
            onClick={() => handleSelect(availableLocale)}
            aria-current={availableLocale === locale}
            aria-label={t("switchTo", {
              language: t(`locales.${availableLocale}`),
            })}
            className={cn(
              availableLocale === locale && "text-primary",
            )}
          >
            {t(`locales.${availableLocale}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
