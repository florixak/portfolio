import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";
import PageCTA from "./page-cta";
import Reveal from "../motion/reveal";
import Stagger from "../motion/stagger";

type PageFooterProps = {
  label?: string;
  title: ReactNode;
  description?: string;
  ctaLabel: string;
  ctaHref?: ComponentProps<typeof PageCTA>["href"];
};

const PageFooter = ({
  label,
  title,
  description,
  ctaLabel,
  ctaHref,
}: PageFooterProps) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
      <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          {label ? (
            <p className="type-label text-primary mb-5">{label}</p>
          ) : null}
          <h2
            className={cn(
              "font-heading text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-tight",
              description && "mb-4",
            )}
          >
            {title}
          </h2>
          {description ? (
            <p className="type-body max-w-lg">{description}</p>
          ) : null}
        </div>

        <PageCTA label={ctaLabel} href={ctaHref} />
      </Reveal>
    </section>
  );
};

export default PageFooter;
