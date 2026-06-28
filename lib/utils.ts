import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const omitDiacritics = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const isNavActive = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

export const yearToDate = (year: number) =>
  new Date(`${year}-01-01T00:00:00.000Z`);

export const truncate = (text: string, maxLength: number) => {
  if (maxLength <= 0) {
    return "";
  }

  return text.length <= maxLength
    ? text
    : `${text.slice(0, maxLength - 1)}…`;
};
