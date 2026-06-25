import AboutContent from "@/components/about/about-content";
import AboutHero from "@/components/about/about-hero";
import PageFooter from "@/components/layout/page-footer";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
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
