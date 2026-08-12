import { Link } from "@/i18n/navigation";
import { getFeaturedProjects } from "@/lib/project-utils";
import { ArrowUpRight } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import SectionHeader from "../layout/section-header";
import FeaturedProjectCard from "./featured-project-card";
import Reveal from "../motion/reveal";
import Stagger from "../motion/stagger";

const FeaturedProjects = () => {
  const t = useTranslations("home.featuredProjects");
  const messages = useMessages();
  const projects = getFeaturedProjects(messages.projectEntries);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24 border-t border-border"
    >
      <Reveal>
        <SectionHeader num="02" title={t("title")} sub={t("sub")} />
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
          {t("viewAll")} <ArrowUpRight size={12} />
        </Link>
      </Reveal>
    </section>
  );
};

export default FeaturedProjects;
