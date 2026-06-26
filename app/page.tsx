import ContactFooter from "@/components/contact/contact-footer";
import FeaturedProjects from "@/components/featured/featured-projects";
import Hero from "@/components/hero/hero";
import TechStack from "@/components/stack/tech-stack";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <ContactFooter />
    </>
  );
}
