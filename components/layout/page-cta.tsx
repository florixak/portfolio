"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

type PageCTAProps = {
  label: string;
  href?: ComponentProps<typeof Link>["href"];
  variant?: "default" | "outline";
};

const PageCTA = ({
  label,
  href = "/contact",
  variant = "default",
}: PageCTAProps) => {
  return (
    <Button asChild variant={variant}>
      <Link href={href}>
        {label} <ArrowUpRight className="size-4" />
      </Link>
    </Button>
  );
};

export default PageCTA;
