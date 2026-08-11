import { profile } from "@/data/profile";
import { social } from "@/data/social";
import { useTranslations } from "next-intl";
import ContactLink from "./contact-link";
import Reveal from "../motion/reveal";
import Stagger from "../motion/stagger";

const ContactFooter = () => {
  const t = useTranslations("contact.homeCta");
  const tContact = useTranslations("contact");

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24 border-t border-border"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
        <Reveal>
          <p className="type-index mb-7">{t("index")}</p>
          <h2 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            {t.rich("title", {
              primary: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </h2>
          <p className="type-body mt-8 max-w-md">
            {profile.availableForWork
              ? t("availableDescription")
              : t("notAvailableDescription")}
          </p>
        </Reveal>

        <nav aria-label={tContact("linksNavLabel")}>
          <Stagger as="ul" className="flex h-full flex-col gap-px bg-border">
            {social.map((item) => (
              <ContactLink key={item.label} item={item} />
            ))}
          </Stagger>
        </nav>
      </div>
    </section>
  );
};

export default ContactFooter;
