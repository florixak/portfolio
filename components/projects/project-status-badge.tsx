import { Project } from "@/types";
import { useTranslations } from "next-intl";

type ProjectStatusBadgeProps = {
  status: Project["status"];
};

const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => {
  const t = useTranslations("projects.filters");

  return (
    <span
      className={`type-label-xs border px-2 py-1 ${
        status === "active"
          ? "border-primary/25 text-primary"
          : status === "archived"
            ? "border-muted-foreground/25 text-muted-foreground/50"
            : "border-yellow-400/25 text-yellow-400"
      }`}
    >
      {t(status)}
    </span>
  );
};

export default ProjectStatusBadge;
