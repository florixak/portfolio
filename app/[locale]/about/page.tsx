import AboutContent from "@/components/about/about-content";
import AboutHero from "@/components/about/about-hero";
import PageFooter from "@/components/layout/page-footer";
import Reveal from "@/components/motion/reveal";
import type { Locale } from "@/i18n/routing";
import { createMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

type AboutPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return createMetadata({
    title: t("title"),
    description: t("intro"),
    path: "/about",
    locale,
  });
}

// Server Component usage example: `getTranslations` is the awaitable
// counterpart to `useTranslations`, used here since the page itself is an
// `async` function (needed to `await` the `params` Promise for the locale).
const AboutPage = async ({ params }: AboutPageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <Reveal>
        <AboutHero />
      </Reveal>
      <AboutContent />
      <PageFooter
        label={t("footer.label")}
        title={t.rich("footer.title", {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
          br: () => <br />,
        })}
        ctaLabel={t("footer.cta")}
      />
    </>
  );
};

export default AboutPage;
