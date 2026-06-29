"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Route } from "next";
import Link from "next/link";

type PageCTAProps = {
  label: string;
  href?: Route;
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
