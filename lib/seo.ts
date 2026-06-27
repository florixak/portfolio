import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { social } from "@/data/social";

const DEFAULT_SITE_URL = "https://ondrejptak.dev";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

export const defaultTitle = `${profile.name} | ${profile.role}`;

export const defaultDescription =
  "Full-stack engineer and Software Engineering student building scalable web applications with Next.js, React, and Spring Boot. Based in Pilsen, Czech Republic.";

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
  ogType?: "website" | "article";
  publishedTime?: string;
  absoluteTitle?: boolean;
};

export const createMetadata = ({
  title,
  description = defaultDescription,
  path = "/",
  ogType = "website",
  publishedTime,
  absoluteTitle = false,
}: CreateMetadataOptions): Metadata => {
  const url = absoluteUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} | ${profile.name}`;

  const openGraph: NonNullable<Metadata["openGraph"]> = {
    type: ogType,
    siteName: profile.name,
    locale: "en_US",
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
      canonical: path,
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

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${profile.name}`,
  },
  description: defaultDescription,
  keywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_US",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots,
};
