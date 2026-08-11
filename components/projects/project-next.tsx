import PageFooter from "@/components/layout/page-footer";
import { Project } from "@/types";
import { useTranslations } from "next-intl";

type ProjectNextProps = {
  project: Project;
};

const ProjectNext = ({ project }: ProjectNextProps) => {
  const t = useTranslations("projects.detail");

  return (
    <PageFooter
      label={t("nextProject")}
      title={project.title}
      description={project.shortDescription}
      ctaLabel={t("viewProject")}
      ctaHref={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
    />
  );
};

export default ProjectNext;
