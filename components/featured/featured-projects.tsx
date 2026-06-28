import { getFeaturedProjects } from "@/lib/project-utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../layout/section-header";
import FeaturedProjectCard from "./featured-project-card";
import Reveal from "../motion/reveal";
import Stagger from "../motion/stagger";

const FeaturedProjects = () => {
  const projects = getFeaturedProjects();
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24 border-t border-border"
    >
      <Reveal>
        <SectionHeader
          num="02"
          title="Featured Projects"
          sub="Selected projects that reflect my interests in product development, full-stack architecture and interactive experiences."
        />
      </Reveal>

      <Stagger className="mt-12 flex flex-col gap-px bg-border">
        {projects.map((project, i) => (
          <FeaturedProjectCard key={project.slug} index={i} project={project} />
        ))}
      </Stagger>

      <Reveal className="mt-8 flex justify-end">
        <Link
          href="/projects"
          className="type-label inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          View all projects <ArrowUpRight size={12} />
        </Link>
      </Reveal>
    </section>
  );
};

export default FeaturedProjects;
