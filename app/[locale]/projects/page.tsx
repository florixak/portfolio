import PageFooter from "@/components/layout/page-footer";
import Reveal from "@/components/motion/reveal";
import ProjectsHeader from "@/components/projects/projects-header";
import ProjectsList from "@/components/projects/projects-list";
import { projectsByPriority } from "@/data/projects";
import type { Locale } from "@/i18n/routing";
import { createMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

type ProjectsPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.projects" });

  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/projects",
    locale,
  });
}

const ProjectsPage = async ({ params }: ProjectsPageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects.footer");

  return (
    <>
      <Reveal>
        <ProjectsHeader count={projectsByPriority.length} />
      </Reveal>
      <ProjectsList projects={projectsByPriority} />
      <PageFooter
        title={t.rich("title", {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
          br: () => <br />,
        })}
        description={t("description")}
        ctaLabel={t("cta")}
      />
    </>
  );
};

export default ProjectsPage;
