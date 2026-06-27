import { projects } from "@/data/projects";
import { createProjectOgImage, ogSize } from "@/lib/og";
import { getProjectBySlug } from "@/lib/project-utils";

export const alt = "Project preview";
export const size = ogSize;
export const contentType = "image/png";

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

type ProjectOgImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectOgImage({ params }: ProjectOgImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createProjectOgImage({
      slug: "project",
      title: "Project",
      featured: false,
      priority: 0,
      status: "completed",
      year: new Date().getFullYear(),
      shortDescription: "Project case study on Ondřej Pták's portfolio.",
      description: "",
      stack: [],
      highlights: [],
      thumbnail: "/projects/omori-wordle/omori-wordle.webp",
    });
  }

  return createProjectOgImage(project);
}
