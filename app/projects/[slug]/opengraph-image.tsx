import { projects } from "@/data/projects";
import { createProjectOgImage, ogSize } from "@/lib/og";
import { getProjectBySlug } from "@/lib/project-utils";
import { notFound } from "next/navigation";

export const alt = "Project preview";
export const size = ogSize;
export const contentType = "image/png";
export const runtime = "nodejs";

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

type ProjectOgImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectOgImage({ params }: ProjectOgImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return createProjectOgImage(project);
}
