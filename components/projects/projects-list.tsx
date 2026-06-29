"use client";

import { filterProjects } from "@/lib/project-utils";
import { Filter, Project } from "@/types";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Reveal from "../motion/reveal";
import ProjectCard from "./project-card";
import ProjectsFilter from "./projects-filter";
import useDebounce from "@/hooks/use-debounce";

gsap.registerPlugin(Flip);

type ProjectsListProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  useDebounce({
    value: query,
    delay: 500,
    onDebounce: setFilterQuery,
  });

  const gridRef = useRef<HTMLDivElement>(null);
  const flipStateRef = useRef<Flip.FlipState | null>(null);
  const filtered = useMemo(
    () => filterProjects(projects, activeFilter, filterQuery),
    [projects, activeFilter, filterQuery],
  );

  const captureFlipState = () => {
    const grid = gridRef.current;
    if (!grid?.children.length) return;
    flipStateRef.current = Flip.getState(grid.children);
  };

  const updateFilter = (filter: Filter) => {
    if (filter === activeFilter) return;
    captureFlipState();
    setActiveFilter(filter);
  };

  const updateQuery = (value: string) => {
    if (value === query) return;
    captureFlipState();
    setQuery(value);
    if (value === "") {
      setFilterQuery("");
    }
  };

  const clearFilters = () => {
    if (activeFilter === "All" && query === "" && filterQuery === "") return;
    captureFlipState();
    setActiveFilter("All");
    setQuery("");
    setFilterQuery("");
  };

  useLayoutEffect(() => {
    const state = flipStateRef.current;
    const grid = gridRef.current;
    if (!state || !grid) return;

    flipStateRef.current = null;

    const lockedHeight = grid.offsetHeight;
    grid.style.minHeight = `${lockedHeight}px`;

    Flip.from(state, {
      duration: 0.45,
      ease: "power1.inOut",
      absolute: true,
      stagger: 0.03,
      onEnter: (els) =>
        gsap.fromTo(els, { opacity: 0 }, { opacity: 1, duration: 0.25 }),
      onLeave: (els) => gsap.to(els, { opacity: 0, duration: 0.2 }),
      onComplete: () => {
        gsap.set(grid, { clearProps: "minHeight" });
      },
    });

    return () => {
      gsap.set(grid, { clearProps: "minHeight" });
    };
  }, [filtered]);

  return (
    <>
      <Reveal>
        <ProjectsFilter
          activeFilter={activeFilter}
          setActiveFilter={updateFilter}
          query={query}
          setQuery={updateQuery}
          filteredCount={filtered.length}
          onClearFilters={clearFilters}
        />
      </Reveal>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length > 0 ? (
          <Reveal>
            <div
              ref={gridRef}
              className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, index) => (
                <div key={project.slug} data-project-card className="h-full">
                  <ProjectCard index={index} project={project} />
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          <Reveal className="flex flex-col items-center gap-4 py-32 text-center">
            <p className="type-heading text-muted-foreground/30">
              No projects found
            </p>
            <p className="type-label-xs text-muted-foreground/30">
              Try a different filter or search term
            </p>
          </Reveal>
        )}
      </section>
    </>
  );
};

export default ProjectsList;
