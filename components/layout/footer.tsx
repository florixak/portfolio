import { COPYRIGHT_YEAR } from "@/constants";
import { profile } from "@/data/profile";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-border w-full flex flex-col gap-2 sm:flex-row items-center sm:justify-between">
      <p className="type-body text-muted-foreground text-center sm:text-left">
        {t("copyright", { year: COPYRIGHT_YEAR, name: profile.name })}
      </p>
      <p className="type-body text-muted-foreground text-center sm:text-right">
        {t("madeWith")}
      </p>
    </footer>
  );
};

export default Footer;
