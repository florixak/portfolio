import NotFoundContent from "@/components/layout/not-found-content";
import { notFoundTerminalSections } from "@/data/terminal";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("metadata.notFound");
  return { title: t("title"), robots: { index: false, follow: true } };
}

const NotFound = async () => {
  const t = await getTranslations("notFound");

  return (
    <NotFoundContent
      title={t.rich("title", {
        primary: (chunks) => <span className="text-primary">{chunks}</span>,
        br: () => <br />,
      })}
      description={t("description")}
      primaryLink={{ label: t("backHome"), href: "/" }}
      secondaryLink={{ label: t("viewProjects"), href: "/projects" }}
      terminalSections={notFoundTerminalSections}
    />
  );
};

export default NotFound;
