// `labelKey` maps to a key in the `nav` namespace (see `messages/*.json`)
// so the same nav config can be reused by Header, MobileNav, and page footers.
// `href` is restricted to the static (non-dynamic) entries declared in
// `i18n/routing.ts`'s `pathnames`, matching what `Link` from
// `@/i18n/navigation` expects.
type StaticPathname = "/" | "/about" | "/projects" | "/contact";

export const NAV_ITEMS: {
  labelKey: "home" | "projects" | "about" | "contact";
  href: StaticPathname;
}[] = [
  { labelKey: "home", href: "/" },
  { labelKey: "projects", href: "/projects" },
  { labelKey: "about", href: "/about" },
  { labelKey: "contact", href: "/contact" },
];

export const getCopyrightYear = () => new Date().getFullYear();

export const FILTERS = ["All", "Active", "Completed", "Archived"] as const;
