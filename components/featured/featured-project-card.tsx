import ProjectStatusBadge from "@/components/projects/project-status-badge";
import { Link } from "@/i18n/navigation";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";

type FeaturedProjectCardProps = {
  index: number;
  project: Project;
};

const FeaturedProjectCard = ({ index, project }: FeaturedProjectCardProps) => {
  const stack = project.stack.slice(0, 3);
  const remainingStackCount = project.stack.length - stack.length;

  return (
    <Link
      href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
      className="group flex h-full flex-col bg-background p-8 transition-colors duration-200 hover:bg-card hover:text-primary"
    >
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[28px_1fr_auto] md:gap-10">
        <span className="type-index order-1 pt-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="order-3 md:order-2">
          <h3 className="type-title mb-3">{project.title}</h3>
          <p className="type-body mb-5 max-w-xl">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
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
        </div>

        <div className="order-2 flex shrink-0 items-center gap-3 md:order-3 md:justify-end">
          <ProjectStatusBadge status={project.status} />
          <span className="type-body text-muted-foreground/40">
            {project.year}
          </span>
          <ArrowUpRight
            size={13}
            className="text-muted-foreground/40 transition-colors duration-200 group-hover:text-primary"
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProjectCard;
