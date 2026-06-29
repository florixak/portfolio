import { getNextProject } from "@/lib/project-utils";
import { Project } from "@/types";
import ProjectCaseStudy from "./project-case-study";
import ProjectDetailHero from "./project-detail-hero";
import ProjectFeatures from "./project-features";
import ProjectNext from "./project-next";
import ProjectPreview from "./project-preview";
import Reveal from "../motion/reveal";

type ProjectDetailProps = {
  project: Project;
};

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const nextProject = getNextProject(project.slug);

  return (
    <article>
      <Reveal>
        <ProjectDetailHero project={project} />
      </Reveal>
      <Reveal>
        <ProjectPreview project={project} />
      </Reveal>
      <ProjectCaseStudy caseStudy={project.caseStudy} />
      <ProjectFeatures highlights={project.highlights} />
      {nextProject ? <ProjectNext project={nextProject} /> : null}
    </article>
  );
};

export default ProjectDetail;
