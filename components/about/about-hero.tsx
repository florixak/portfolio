import { useTranslations } from "next-intl";

const AboutHero = () => {
  const t = useTranslations("about");

  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 border-b border-border">
      <p className="type-label text-primary mb-6">{t("eyebrow")}</p>
      <h1 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl mb-8">
        {t("title")}
      </h1>
      <p className="type-body max-w-2xl">{t("intro")}</p>
    </section>
  );
};

export default AboutHero;
