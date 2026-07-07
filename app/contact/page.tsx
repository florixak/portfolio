import ContactContent from "@/components/contact/contact-content";
import ContactHero from "@/components/contact/contact-hero";
import Reveal from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Reach out to discuss a project, collaboration, or full-stack role. I respond to most messages within 24 to 48 hours.",
  path: "/contact",
});

const ContactPage = () => {
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
