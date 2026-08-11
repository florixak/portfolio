"use client";

import { NAV_ITEMS } from "@/constants";
import { Link, usePathname } from "@/i18n/navigation";
import { cn, isNavActive } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const t = useTranslations("nav");
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();

  if (isOpen && !shouldRender) setShouldRender(true);

  useGSAP(
    () => {
      const menu = ref.current;
      if (!menu || !shouldRender) return;

      const links = gsap.utils.toArray<HTMLElement>(".header-nav-item", menu);

      tl.current?.kill();
      tl.current = gsap.timeline();

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (isOpen) {
          gsap.set(menu, { clipPath: "inset(0 0 0% 0)", opacity: 1 });
          gsap.set(links, { opacity: 1, y: 0 });
        } else {
          setShouldRender(false);
        }
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (isOpen) {
          tl.current
            ?.fromTo(
              menu,
              { clipPath: "inset(0 0 100% 0)", opacity: 0 },
              {
                clipPath: "inset(0 0 0% 0)",
                opacity: 1,
                duration: 0.35,
                ease: "power2.out",
              },
            )
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
        } else {
          tl.current?.to(menu, {
            clipPath: "inset(0 0 100% 0)",
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setShouldRender(false),
          });
        }
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [isOpen, shouldRender] },
  );

  if (!shouldRender) return null;

  return (
    <nav
      ref={ref}
      id="mobile-nav"
      aria-label={t("mobileNavLabel")}
      className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = isNavActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
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
  );
};

export default MobileNav;
