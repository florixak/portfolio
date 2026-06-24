type ProjectsHeaderProps = {
  count: number;
};

const ProjectsHeader = ({ count }: ProjectsHeaderProps) => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 border-b border-border">
      <p className="type-label text-primary mb-6">Portfolio</p>
      <h1 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 gap-6 items-end lg:grid-cols-[1fr_auto]">
        <p className="type-body max-w-2xl">
          A collection of projects exploring full-stack development, interactive
          interfaces and product-oriented thinking. Each project reflects
          different challenges, technologies and approaches.
        </p>
        <p className="type-index text-right">{count} projects total</p>
      </div>
    </section>
  );
};

export default ProjectsHeader;
