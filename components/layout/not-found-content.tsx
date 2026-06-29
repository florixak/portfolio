import Terminal from "@/components/layout/terminal";
import Reveal from "@/components/motion/reveal";
import type { TerminalSection } from "@/types";
import type { Route } from "next";
import type { ReactNode } from "react";
import PageCTA from "./page-cta";

type NotFoundLink = {
  label: string;
  href: Route;
};

type NotFoundContentProps = {
  label?: string;
  title: ReactNode;
  description: string;
  primaryLink: NotFoundLink;
  secondaryLink: NotFoundLink;
  terminalSections: TerminalSection[];
};

const NotFoundContent = ({
  label = "404",
  title,
  description,
  primaryLink,
  secondaryLink,
  terminalSections,
}: NotFoundContentProps) => {
  return (
    <section className="max-w-7xl mx-auto flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-6 pt-28 pb-24">
      <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <p className="type-label text-primary mb-6">{label}</p>
          <h1 className="font-heading mb-8 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="type-body mb-10 max-w-xl">{description}</p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <PageCTA label={primaryLink.label} href={primaryLink.href} />
            <PageCTA
              label={secondaryLink.label}
              href={secondaryLink.href}
              variant="outline"
            />
          </div>
        </div>

        <div className="hidden md:block">
          <Terminal sections={terminalSections} />
        </div>
      </Reveal>
    </section>
  );
};

export default NotFoundContent;
