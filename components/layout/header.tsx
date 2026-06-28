"use client";

import { NAV_ITEMS } from "@/constants";
import { cn, isNavActive } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import ThemeToggle from "../theme/theme-toggle";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isFirstMobileMenuRun = useRef(true);
  const menuTl = useRef<gsap.core.Timeline | null>(null);
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
    {
      scope: headerRef,
    },
  );

  useGSAP(
    () => {
      const menu = mobileMenuRef.current;
      if (!menu) return;

      const links = gsap.utils.toArray<HTMLElement>(".header-nav-item", menu);

      if (isFirstMobileMenuRun.current) {
        isFirstMobileMenuRun.current = false;
        if (!menuOpen) {
          gsap.set(menu, {
            clipPath: "inset(0 0 100% 0)",
            opacity: 0,
            pointerEvents: "none",
          });
          return;
        }
      }

      menuTl.current?.kill();
      menuTl.current = gsap.timeline();

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(menu, {
          clipPath: menuOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        });
        gsap.set(links, { opacity: menuOpen ? 1 : 0, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(menu, { pointerEvents: "auto" });
        menuTl.current
          ?.to(menu, {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          })
          .from(
            links,
            {
              y: 12,
              opacity: 0,
              stagger: 0.06,
              duration: 0.25,
              ease: "power2.out",
            },
            "-=0.15",
          );
      });

      return () => mm.revert();
    },
    { scope: headerRef, dependencies: [menuOpen] },
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
                href={item.href as Route}
                className={cn(
                  "header-nav-item",
                  "type-label text-muted-foreground hover:text-foreground transition-colors duration-200",
                  isActive && "text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
        <ThemeToggle />
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          ref={mobileMenuRef}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 0 : -1}
          className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href as Route}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "header-nav-item",
                  "type-label text-muted-foreground hover:text-foreground transition-colors duration-200",
                  isActive && "text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
