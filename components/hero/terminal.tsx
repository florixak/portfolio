import Terminal from "@/components/layout/terminal";
import { heroTerminalSections } from "@/data/terminal";

const HeroTerminal = () => {
  return (
    <Terminal sections={heroTerminalSections} className="hidden md:block" />
  );
};

export default HeroTerminal;
