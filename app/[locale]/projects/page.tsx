import PageFooter from "@/components/layout/page-footer";
import Reveal from "@/components/motion/reveal";
import ProjectsHeader from "@/components/projects/projects-header";
import ProjectsList from "@/components/projects/projects-list";
import type { Locale } from "@/i18n/routing";
import { getLocalizedProjects } from "@/lib/project-utils";
import { createMetadata } from "@/lib/seo";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";

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
  const tFooter = await getTranslations("projects.footer");
  const messages = await getMessages();
  const localizedProjects = getLocalizedProjects(messages.projectEntries);

  return (
    <>
      <Reveal>
        <ProjectsHeader count={localizedProjects.length} />
      </Reveal>
      <ProjectsList projects={localizedProjects} />
      <PageFooter
        title={tFooter.rich("title", {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
          br: () => <br />,
        })}
        description={tFooter("description")}
        ctaLabel={tFooter("cta")}
      />
    </>
  );
};

export default ProjectsPage;
