import PageFooter from "@/components/layout/page-footer";
import ProjectsHeader from "@/components/projects/projects-header";
import ProjectsList from "@/components/projects/projects-list";
import { projectsByPriority } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsHeader count={projectsByPriority.length} />
      <ProjectsList projects={projectsByPriority} />
      <PageFooter
        title={
          <>
            Interested in how I approach
            <br />
            <span className="text-primary">building products?</span>
          </>
        }
        description="Then contact me to discuss your project or ideas."
        ctaLabel="Contact Me"
      />
    </>
  );
};

export default ProjectsPage;
