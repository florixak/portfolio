import ContactFooter from "@/components/contact/contact-footer";
import FeaturedProjects from "@/components/featured/featured-projects";
import Hero from "@/components/hero/hero";
import TechStack from "@/components/stack/tech-stack";
import type { Locale } from "@/i18n/routing";
import { createMetadata, defaultTitle } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

type HomeProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: HomeProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return createMetadata({
    title: defaultTitle,
    description: t("description"),
    path: "/",
    locale,
    absoluteTitle: true,
  });
}

// Server Component usage example: `setRequestLocale` opts this page into
// static rendering, and `getTranslations` reads the matching message
// catalog on the server — no translations are shipped to the client here.
const Home = async ({ params }: HomeProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <ContactFooter />
    </>
  );
};

export default Home;
