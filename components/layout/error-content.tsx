"use client";

import Terminal from "@/components/layout/terminal";
import Reveal from "@/components/motion/reveal";
import PageCTA from "@/components/layout/page-cta";
import { Button } from "@/components/ui/button";
import type { TerminalSection } from "@/types";
import { RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";

type ErrorContentProps = {
  reset: () => void;
  terminalSections: TerminalSection[];
};

const ErrorContent = ({ reset, terminalSections }: ErrorContentProps) => {
  const t = useTranslations("error");

  return (
    <section className="max-w-7xl mx-auto flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-6 pt-28 pb-24">
      <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <p className="type-label text-primary mb-6">{t("label")}</p>
          <h1 className="font-heading mb-8 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {t.rich("title", {
              primary: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </h1>
          <p className="type-body mb-10 max-w-xl">{t("description")}</p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button onClick={reset}>
              {t("tryAgain")} <RotateCcw className="size-4" />
            </Button>
            <PageCTA label={t("backHome")} href="/" variant="outline" />
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
