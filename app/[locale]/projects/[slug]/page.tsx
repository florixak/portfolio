import ProjectDetail from "@/components/projects/project-detail";
import JsonLd from "@/components/seo/json-ld";
import { projects } from "@/data/projects";
import type { Locale } from "@/i18n/routing";
import { createMetadata } from "@/lib/seo";
import { projectBreadcrumbSchema, projectSchema } from "@/lib/schema";
import { getProjectBySlug } from "@/lib/project-utils";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    const t = await getTranslations({ locale, namespace: "projectNotFound" });
    return { title: t("metaTitle") };
  }

  return createMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${slug}`,
    locale,
    ogType: "article",
    publishedTime: `${project.year}-01-01`,
  });
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { locale, slug } = await params;
  setRequestLocale(locale);
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
