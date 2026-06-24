"use client";

import { projectsByPriority } from "@/data/projects";
import { filterProjects } from "@/lib/product-utils";
import { Filter } from "@/types";
import { useMemo, useState } from "react";
import ProjectCard from "./project-card";
import ProjectsFilter from "./projects-filter";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => filterProjects(projectsByPriority, activeFilter, query),
    [activeFilter, query],
  );

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 border-b border-border">
        <p className="type-label text-primary mb-6">Portfolio</p>
        <h1 className="font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl mb-8">
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-6 items-end lg:grid-cols-[1fr_auto]">
          <p className="type-body max-w-2xl">
            A collection of projects exploring full-stack development,
            interactive interfaces and product-oriented thinking. Each project
            reflects different challenges, technologies and approaches.
          </p>
          <p className="type-index text-right">
            {projectsByPriority.length} projects total
          </p>
        </div>
      </section>

      <ProjectsFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        query={query}
        setQuery={setQuery}
        filteredCount={filtered.length}
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <ProjectCard key={project.slug} index={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-32 text-center">
            <p className="type-heading text-muted-foreground/30">
              No projects found
            </p>
            <p className="type-label-xs text-muted-foreground/30">
              Try a different filter or search term
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
