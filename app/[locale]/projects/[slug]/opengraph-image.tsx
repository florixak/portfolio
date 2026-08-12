import { projects } from "@/data/projects";
import type { Locale } from "@/i18n/routing";
import { createProjectOgImage, ogSize } from "@/lib/og";
import { getProjectBySlug } from "@/lib/project-utils";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export const alt = "Project preview";
export const size = ogSize;
export const contentType = "image/png";
export const runtime = "nodejs";

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

type ProjectOgImageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export default async function ProjectOgImage({ params }: ProjectOgImageProps) {
  const { locale, slug } = await params;
  const messages = await getMessages({ locale });
  const project = getProjectBySlug(slug, messages.projectEntries);

  if (!project) {
    notFound();
  }

  return createProjectOgImage(project);
}
