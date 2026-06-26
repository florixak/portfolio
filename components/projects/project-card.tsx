import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { Route } from "next";
import Link from "next/link";

type ProjectCardProps = {
  index: number;
  project: Project;
};

const ProjectCard = ({ index, project }: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${project.slug}` as Route}
      className="group flex h-full flex-col bg-background p-8 transition-colors duration-200 hover:bg-card"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="type-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="type-body text-muted-foreground/40">
          {project.year}
        </span>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h2 className="type-title transition-colors duration-200 group-hover:text-primary">
          {project.title}
        </h2>
        <span
          className={`type-label-xs border px-2 py-1 ${
            project.status === "active"
              ? "border-primary/25 text-primary"
              : "border-yellow-400/25 text-yellow-400"
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="type-body mb-5 flex-1">{project.shortDescription}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="type-label-xs bg-muted px-2.5 py-1 text-muted-foreground/60"
          >
            {tech}
          </span>
        ))}
      </div>

      <span className="type-label inline-flex items-center gap-2 border-t border-border pt-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary">
        View Project
        <ArrowUpRight
          size={12}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
};

export default ProjectCard;
