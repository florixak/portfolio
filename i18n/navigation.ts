import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware drop-in replacements for `next/link` and `next/navigation`.
 * These automatically prepend the current locale to hrefs and strip it
 * back out of `usePathname()`, so components never have to think about
 * the `/en` or `/cs` prefix manually.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
