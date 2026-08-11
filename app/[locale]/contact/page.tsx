import ContactContent from "@/components/contact/contact-content";
import ContactHero from "@/components/contact/contact-hero";
import Reveal from "@/components/motion/reveal";
import type { Locale } from "@/i18n/routing";
import { createMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

type ContactPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });

  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/contact",
    locale,
  });
}

const ContactPage = async ({ params }: ContactPageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Reveal>
        <ContactHero />
      </Reveal>
      <ContactContent />
    </>
  );
};

export default ContactPage;
