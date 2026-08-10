import { profile } from "@/data/profile";
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const t = useTranslations("contact");

  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 border-b border-border">
      <p className="type-label text-primary mb-6">{t("eyebrow")}</p>
      <h1 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl mb-8 max-w-3xl">
        {t.rich("title", {
          primary: (chunks) => <span className="text-primary">{chunks}</span>,
          br: () => <br />,
        })}
      </h1>
      <div className="max-w-xl space-y-4">
        <p className="type-body">{t("paragraph")}</p>
        <p className="type-body">
          {profile.availableForWork
            ? t("availableForWork")
            : t("notAvailableForWork")}
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
