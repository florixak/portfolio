import AboutContent from "@/components/about/about-content";
import AboutHero from "@/components/about/about-hero";
import PageFooter from "@/components/layout/page-footer";
import Reveal from "@/components/motion/reveal";
import { about } from "@/data/about";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: about.intro,
  path: "/about",
});

const AboutPage = () => {
  return (
    <>
      <Reveal>
        <AboutHero />
      </Reveal>
      <AboutContent />
      <PageFooter
        label="Get in touch"
        title={
          <>
            Interested in working together
            <br />
            <span className="text-primary">or discussing ideas?</span>
          </>
        }
        ctaLabel="Get in touch"
      />
    </>
  );
};

export default AboutPage;
