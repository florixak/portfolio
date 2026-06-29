import ContactContent from "@/components/contact/contact-content";
import ContactHero from "@/components/contact/contact-hero";
import Reveal from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: `Do you have an interesting project or idea? Feel free to reach out, I always open to exploring interesting ideas and projects.`,
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
