import ContactContent from "@/components/contact/contact-content";
import ContactHero from "@/components/contact/contact-hero";
import { profile } from "@/data/profile";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: `Get in touch with ${profile.name}, a full-stack engineer open to internships, collaboration, and full-stack roles. Based in ${profile.location}.`,
  path: "/contact",
});

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  );
};

export default ContactPage;
