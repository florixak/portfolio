import ProjectDetail from "@/components/projects/project-detail";
import JsonLd from "@/components/seo/json-ld";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { projectBreadcrumbSchema, projectSchema } from "@/lib/schema";
import { getProjectBySlug } from "@/lib/project-utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return createMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${slug}`,
    ogType: "article",
    publishedTime: `${project.year}-01-01`,
  });
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[projectSchema(project), projectBreadcrumbSchema(project)]}
      />
      <ProjectDetail project={project} />
    </>
  );
};

export default ProjectPage;
