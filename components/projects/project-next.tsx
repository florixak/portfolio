import PageFooter from "@/components/layout/page-footer";
import { Project } from "@/types";
import { Route } from "next";

type ProjectNextProps = {
  project: Project;
};

const ProjectNext = ({ project }: ProjectNextProps) => (
  <PageFooter
    label="Next Project"
    title={project.title}
    description={project.shortDescription}
    ctaLabel="View Project"
    ctaHref={`/projects/${project.slug}` as Route}
  />
);

export default ProjectNext;
