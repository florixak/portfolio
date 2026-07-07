import PageFooter from "@/components/layout/page-footer";
import Reveal from "@/components/motion/reveal";
import ProjectsHeader from "@/components/projects/projects-header";
import ProjectsList from "@/components/projects/projects-list";
import { projectsByPriority } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Selected projects built with React, Next.js, Spring Boot, and related tooling, including AI-assisted applications and interactive web work.",
  path: "/projects",
});

const ProjectsPage = () => {
  return (
    <>
      <Reveal>
        <ProjectsHeader count={projectsByPriority.length} />
      </Reveal>
      <ProjectsList projects={projectsByPriority} />
      <PageFooter
        title={
          <>
            Interested in how I approach
            <br />
            <span className="text-primary">building products?</span>
          </>
        }
        description="Contact me if you would like to discuss a project or how I approach product work."
        ctaLabel="Contact Me"
      />
    </>
  );
};

export default ProjectsPage;
