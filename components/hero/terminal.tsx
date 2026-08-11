import Terminal from "@/components/layout/terminal";
import { getHeroTerminalSections } from "@/data/terminal";
import { useTranslations } from "next-intl";

const HeroTerminal = () => {
  const tProfile = useTranslations("profile");

  const sections = getHeroTerminalSections({
    role: tProfile("role"),
    location: tProfile("location"),
  });

  return <Terminal sections={sections} />;
};

export default HeroTerminal;
