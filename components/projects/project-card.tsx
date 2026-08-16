import { Link } from "@/i18n/navigation";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import ProjectStatusBadge from "./project-status-badge";

type ProjectCardProps = {
  index: number;
  project: Project;
};

const ProjectCard = ({ index, project }: ProjectCardProps) => {
  const t = useTranslations("projects.detail");

  const stack = project.stack.slice(0, 3);
  const remainingStackCount = project.stack.length - stack.length;

  return (
    <Link
      href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
      className="group flex h-full flex-col bg-background p-8 transition-colors duration-200 hover:bg-card"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="type-index">{String(index + 1).padStart(2, "0")}</span>
        <div className="flex shrink-0 items-center gap-3">
          <ProjectStatusBadge status={project.status} />
          <span className="type-body text-muted-foreground/40">
            {project.year}
          </span>
        </div>
      </div>
      <h2 className="type-title mb-3 transition-colors duration-200 group-hover:text-primary">
        {project.title}
      </h2>

      <p className="type-body mb-5 flex-1">{project.shortDescription}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="type-label-xs bg-muted px-2.5 py-1 text-muted-foreground/60"
          >
            {tech}
          </span>
        ))}
        {remainingStackCount > 0 && (
          <span className="type-label-xs bg-muted px-2.5 py-1 text-muted-foreground/60">
            +{remainingStackCount}
          </span>
        )}
      </div>

      <span className="type-label inline-flex items-center gap-2 border-t border-border pt-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary">
        {t("viewProject")}
        <ArrowUpRight
          size={12}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
};

export default ProjectCard;
