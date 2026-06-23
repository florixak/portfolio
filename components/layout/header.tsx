"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { Route } from "next";
import ThemeToggle from "../theme/theme-toggle";
import { NAV_ITEMS } from "@/constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = "<OP>";
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-sm text-primary tracking-[0.2em] uppercase font-bold"
          >
            {logo}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href as Route}
                className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>

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
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href as Route}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
