import ProjectsCTA from "./projects-cta";

const ProjectsFooter = () => {
  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <h2 className="font-heading text-[clamp(1.8rem,4vw,3.2rem)] font-semibold tracking-tight leading-tight mb-4">
            Interested in how I approach
            <br />
            <span className="text-primary">building products?</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
            Then contact me to discuss your project or ideas.
          </p>
        </div>

        <ProjectsCTA />
      </div>
    </section>
  );
};

export default ProjectsFooter;
