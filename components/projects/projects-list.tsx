"use client";

import { filterProjects } from "@/lib/project-utils";
import { Filter, Project } from "@/types";
import { useMemo, useState } from "react";
import ProjectCard from "./project-card";
import ProjectsFilter from "./projects-filter";

type ProjectsListProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => filterProjects(projects, activeFilter, query),
    [projects, activeFilter, query],
  );

  return (
    <>
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

export default ProjectsList;
