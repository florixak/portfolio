import PageFooter from "@/components/layout/page-footer";
import Reveal from "@/components/motion/reveal";
import ProjectsHeader from "@/components/projects/projects-header";
import ProjectsList from "@/components/projects/projects-list";
import { projectsByPriority } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Explore my projects, including React, Next.js, Spring Boot, AI-powered tools, and interactive web experiences.",
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
        description="Then contact me to discuss your project or ideas."
        ctaLabel="Contact Me"
      />
    </>
  );
};

export default ProjectsPage;
