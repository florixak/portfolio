import NotFoundContent from "@/components/layout/not-found-content";
import { projectNotFoundTerminalSections } from "@/data/terminal";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("projectNotFound");
  return { title: t("metaTitle"), robots: { index: false, follow: true } };
}

const ProjectNotFound = async () => {
  const t = await getTranslations("projectNotFound");

  return (
    <NotFoundContent
      label={t("label")}
      title={t.rich("title", {
        primary: (chunks) => <span className="text-primary">{chunks}</span>,
        br: () => <br />,
      })}
      description={t("description")}
      primaryLink={{ label: t("allProjects"), href: "/projects" }}
      secondaryLink={{ label: t("backHome"), href: "/" }}
      terminalSections={projectNotFoundTerminalSections}
    />
  );
};

export default ProjectNotFound;
