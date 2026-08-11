"use client";

import { NAV_ITEMS } from "@/constants";
import { Link, usePathname } from "@/i18n/navigation";
import { cn, isNavActive } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import ThemeToggle from "../theme/theme-toggle";
import LanguageSwitcher from "./language-switcher";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileNav from "./mobile-nav";

const Header = () => {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useGSAP(
    () => {
      gsap.from(".header-logo", {
        opacity: 0,
        y: -8,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.from(".header-nav-item", {
        opacity: 0,
        y: -8,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out",
      });
    },
    { scope: headerRef },
  );

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const logo = "<OP>";
  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="type-label font-heading font-bold text-primary header-logo"
        >
          {logo}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "header-nav-item",
                  "type-label text-muted-foreground hover:text-foreground transition-colors duration-200",
                  isActive && "text-primary",
                )}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
