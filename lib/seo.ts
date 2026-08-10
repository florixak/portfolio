import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { social } from "@/data/social";
import { routing, type Locale } from "@/i18n/routing";

const DEFAULT_SITE_URL = "https://ondrejptak.dev";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

export const defaultTitle = `${profile.name} | ${profile.role}`;

export const defaultDescription =
  "Full-Stack Engineer and Software Engineering student from Pilsen, Czech Republic. I build web applications with Next.js, React, and Spring Boot.";

// Maps our short BCP 47 locale codes to the region-qualified tags expected
// by `openGraph.locale` (og:locale).
const OG_LOCALE_MAP: Record<Locale, string> = {
  en: "en_US",
  cs: "cs_CZ",
};

export const localizedPath = (path: string, locale: Locale): string => {
  const normalized =
    !path || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
};

export const localizedUrl = (path: string, locale: Locale): string =>
  absoluteUrl(localizedPath(path, locale));

// Builds an `alternates.languages` map so search engines can discover the
// `en`/`cs` versions of a given page (hreflang).
export const buildLanguageAlternates = (
  path: string,
): Record<string, string> => {
  const entries = routing.locales.map(
    (locale) => [locale, localizedUrl(path, locale)] as const,
  );
  return {
    ...Object.fromEntries(entries),
    // Points crawlers to the default locale when no language matches.
    "x-default": localizedUrl(path, routing.defaultLocale),
  };
};

export const keywords = [
  "Ondřej Pták",
  "Ondrej Ptak",
  "full-stack developer",
  "full-stack engineer",
  "software engineer",
  "Next.js developer",
  "React developer",
  "Spring Boot",
  "web developer Czech Republic",
  "portfolio",
  "Pilsen developer",
];

export const sameAs = social
  .filter((link) => link.href.startsWith("http"))
  .map((link) => link.href);

export const absoluteUrl = (path = "/"): string => {
  if (!path || path === "/") {
    return siteUrl;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
};

const robots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

type CreateMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  locale: Locale;
  ogType?: "website" | "article";
  publishedTime?: string;
  absoluteTitle?: boolean;
};

export const createMetadata = ({
  title,
  description = defaultDescription,
  path = "/",
  locale,
  ogType = "website",
  publishedTime,
  absoluteTitle = false,
}: CreateMetadataOptions): Metadata => {
  const url = localizedUrl(path, locale);
  const socialTitle = absoluteTitle ? title : `${title} | ${profile.name}`;

  const openGraph: NonNullable<Metadata["openGraph"]> = {
    type: ogType,
    siteName: profile.name,
    locale: OG_LOCALE_MAP[locale],
    url,
    title: socialTitle,
    description,
    ...(ogType === "article" && publishedTime ? { publishedTime } : {}),
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    publisher: profile.name,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(path),
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
    robots,
  };
};

type CreateRootMetadataOptions = {
  locale: Locale;
  description?: string;
};

// Locale-aware equivalent of a static `rootMetadata` export, used from
// `app/[locale]/layout.tsx` via `generateMetadata` so the description and
// Open Graph locale reflect the active language.
export const createRootMetadata = ({
  locale,
  description = defaultDescription,
}: CreateRootMetadataOptions): Metadata => ({
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: localizedUrl("/", locale),
    languages: buildLanguageAlternates("/"),
  },
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: OG_LOCALE_MAP[locale],
    url: localizedUrl("/", locale),
    title: defaultTitle,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
  },
  robots,
});
