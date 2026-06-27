import PageFooter from "@/components/layout/page-footer";
import ProjectsHeader from "@/components/projects/projects-header";
import ProjectsList from "@/components/projects/projects-list";
import { projectsByPriority } from "@/data/projects";
import { profile } from "@/data/profile";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description: `Explore full-stack projects by ${profile.name}, including Next.js apps, Spring Boot backends, AI-powered tools, and interactive web experiences.`,
  path: "/projects",
});

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
