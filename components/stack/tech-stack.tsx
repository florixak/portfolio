import { techStack } from "@/data/stack";
import Column from "../layout/column";
import SectionHeader from "../layout/section-header";
import Stagger from "../motion/stagger";
import Reveal from "../motion/reveal";

const TechStack = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
      <Reveal>
        <SectionHeader
          num="01"
          title="Tech Stack"
          sub="What I build with in production projects"
        />
      </Reveal>

      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-12">
        {techStack.map(({ label, items }) => (
          <Column
            key={label}
            label={label}
            items={items.map((item) => item.label)}
          />
        ))}
      </Stagger>
    </section>
  );
};

export default TechStack;
