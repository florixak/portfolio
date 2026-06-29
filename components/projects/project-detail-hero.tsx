import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectStatusBadge from "./project-status-badge";

type ProjectDetailHeroProps = {
  project: Project;
};

const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
  const description = project.description || project.shortDescription;

  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 border-b border-border">
      <Link
        href="/projects"
        className="type-label mb-6 inline-block text-muted-foreground transition-colors duration-200 hover:text-primary"
      >
        ← Projects
      </Link>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="type-index">{project.year}</span>
        <ProjectStatusBadge status={project.status} />
      </div>

      <h1 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
        {project.title}
      </h1>

      <p className="type-body mt-8 max-w-2xl">{description}</p>

      {project.stack.length > 0 ? (
        <ul className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="type-label-xs bg-muted px-2.5 py-1 text-muted-foreground/60"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}

      {(project.github || project.demo) && (
        <div className="mt-10 flex flex-wrap gap-6">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label inline-flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label inline-flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              Live demo <ArrowUpRight size={12} />
            </a>
          ) : null}
        </div>
      )}
    </section>
  );
};

export default ProjectDetailHero;
