import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";

type FeaturedProjectCardProps = {
  index: number;
  project: Project;
};

const FeaturedProjectCard = ({ index, project }: FeaturedProjectCardProps) => {
  return (
    <div
      key={project.slug}
      className="bg-background p-8 md:p-10 transition-colors duration-200 cursor-default group hover:bg-card"
    >
      <div className="grid grid-cols-1 md:grid-cols-[28px_1fr_80px] gap-6 md:gap-10 items-start">
        <span className="type-index pt-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <h3 className="type-title">
              {project.title}
            </h3>
            <span
              className={`type-label-xs px-2 py-1 border ${
                project.status === "active"
                  ? "text-primary border-primary/25"
                  : "text-yellow-400 border-yellow-400/25"
              }`}
            >
              {project.status}
            </span>
          </div>
          <p className="type-body mb-5 max-w-xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="type-label-xs text-muted-foreground/60 bg-muted px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground/40 md:justify-end">
          <span className="type-body text-muted-foreground/40">{project.year}</span>
          <ArrowUpRight
            size={13}
            className={`transition-colors duration-200 group-hover:text-primary`}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
