import { techStack } from "@/data/stack";
import SectionHeader from "../layout/section-header";
import StackColumn from "./stack-column";

const TechStack = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
      <SectionHeader
        num="01"
        title="Core Stack"
        sub="Technologies I work with most"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-12">
        {techStack.map(({ label, items }) => (
          <StackColumn key={label} label={label} items={items} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
