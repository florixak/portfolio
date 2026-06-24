import ProjectsHeader from "@/components/projects/projects-header";
import ProjectsList from "@/components/projects/projects-list";
import { projectsByPriority } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHeader count={projectsByPriority.length} />
      <ProjectsList projects={projectsByPriority} />
    </>
  );
};

export default ProjectsPage;
