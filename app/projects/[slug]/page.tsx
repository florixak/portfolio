import ProjectDetail from "@/components/projects/project-detail";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
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

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.shortDescription,
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
};

export default ProjectPage;
