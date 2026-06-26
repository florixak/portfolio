import { about } from "@/data/about";
import { contactTerminalSections } from "@/data/terminal";
import Terminal from "@/components/layout/terminal";
import { NAV_ITEMS } from "@/constants";
import { Route } from "next";
import Link from "next/link";
import ConnectList from "./connect-list";

const openToItems =
  about.currently.find((item) => item.label === "Open to")?.items ?? [];

const ContactContent = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 gap-px bg-border lg:grid-cols-[1fr_380px]">
          <div className="bg-background p-8 md:p-10">
            <p className="type-label text-primary mb-8">Connect</p>
            <ConnectList />

            <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
              <div className="size-2 shrink-0 animate-pulse rounded-full bg-primary" />
              <div>
                <p className="type-label-xs text-muted-foreground/40 mb-0.5">
                  Response time
                </p>
                <p className="type-body">Usually within 24–48 hours.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-px bg-border">
            <div className="bg-background p-8 md:p-10">
              <p className="type-label text-primary mb-6">Currently Open To</p>
              <ul className="space-y-0">
                {openToItems.map((item) => (
                  <li
                    key={item}
                    className="type-body flex cursor-default items-center gap-3 border-b border-border py-3.5 transition-colors duration-200 last:border-0 hover:text-foreground"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 md:p-10">
              <p className="type-label-xs text-muted-foreground/30 mb-5">
                Status check
              </p>
              <Terminal
                sections={contactTerminalSections}
                showHeader={false}
                showCursor={false}
                className="max-w-none shrink"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-14 pb-24 border-t border-border">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <p className="font-heading text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight tracking-tight text-muted-foreground/25 transition-colors duration-300 select-none">
            {"See you around".split("").map((char, index) => (
              <span
                key={index}
                className="hover:text-primary transition-colors duration-200"
              >
                {char}
              </span>
            ))}
            <span className="text-primary">.</span>
          </p>

          <nav
            aria-label="Contact page navigation"
            className="flex items-center gap-6"
          >
            {NAV_ITEMS.filter((item) => item.href !== "/contact").map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href as Route}
                  className="type-label-xs text-muted-foreground/30 transition-colors duration-200 hover:text-primary"
                >
                  {item.href === "/" ? "← Home" : item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
