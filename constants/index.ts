export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const COPYRIGHT_YEAR = new Date().getFullYear();

export const FILTERS = ["All", "Active", "Completed", "Archived"] as const;
