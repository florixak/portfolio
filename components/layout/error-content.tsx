"use client";

import Terminal from "@/components/layout/terminal";
import Reveal from "@/components/motion/reveal";
import PageCTA from "@/components/layout/page-cta";
import { Button } from "@/components/ui/button";
import type { TerminalSection } from "@/types";
import { RotateCcw } from "lucide-react";

type ErrorContentProps = {
  reset: () => void;
  terminalSections: TerminalSection[];
};

const ErrorContent = ({ reset, terminalSections }: ErrorContentProps) => {
  return (
    <section className="max-w-7xl mx-auto flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-6 pt-28 pb-24">
      <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <p className="type-label text-primary mb-6">500 — Error</p>
          <h1 className="font-heading mb-8 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Something
            <br />
            <span className="text-primary">went wrong</span>
          </h1>
          <p className="type-body mb-10 max-w-xl">
            An unexpected error occurred while loading this page. Try again or
            head back home.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button onClick={reset}>
              Try again <RotateCcw className="size-4" />
            </Button>
            <PageCTA label="Back home" href="/" variant="outline" />
          </div>
        </div>

        <div className="hidden md:block">
          <Terminal sections={terminalSections} />
        </div>
      </Reveal>
    </section>
  );
};

export default ErrorContent;
