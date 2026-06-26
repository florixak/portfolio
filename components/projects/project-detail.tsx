import { getNextProject } from "@/lib/project-utils";
import { Project } from "@/types";
import ProjectCaseStudy from "./project-case-study";
import ProjectDetailHero from "./project-detail-hero";
import ProjectFeatures from "./project-features";
import ProjectNext from "./project-next";
import ProjectPreview from "./project-preview";

type ProjectDetailProps = {
  project: Project;
};

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const nextProject = getNextProject(project.slug);

  return (
    <>
      <ProjectDetailHero project={project} />
      <ProjectPreview project={project} />
      <ProjectCaseStudy caseStudy={project.caseStudy} />
      <ProjectFeatures highlights={project.highlights} />
      {nextProject ? <ProjectNext project={nextProject} /> : null}
    </>
  );
};

export default ProjectDetail;
