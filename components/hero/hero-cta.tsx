"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

// Client Component usage example: `useTranslations` reads messages that
// were serialized into the page by `NextIntlClientProvider`. The `Link`
// from `@/i18n/navigation` automatically keeps the current locale prefix.
const HeroCTA = () => {
  const t = useTranslations("hero");

  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
      <Button asChild>
        <Link href="/projects">
          {t("viewProjects")} <ArrowUpRight className="size-4" />
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/contact">
          {t("contactMe")} <ArrowUpRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
};

export default HeroCTA;
