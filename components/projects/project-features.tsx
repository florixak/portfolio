type ProjectFeaturesProps = {
  highlights: string[];
};

const ProjectFeatures = ({ highlights }: ProjectFeaturesProps) => {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
      <p className="type-label text-primary mb-6">Key Features</p>
      <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
        {highlights.map((highlight) => (
          <li key={highlight} className="type-body bg-background p-6">
            {highlight}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectFeatures;
