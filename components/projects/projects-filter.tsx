"use client";

import { FILTERS } from "@/constants";
import { cn } from "@/lib/utils";
import { Filter } from "@/types";
import { Search, X } from "lucide-react";

type ProjectsFilterProps = {
  activeFilter: Filter;
  setActiveFilter: (filter: Filter) => void;
  query: string;
  setQuery: (query: string) => void;
  filteredCount: number;
};

const ProjectsFilter = ({
  activeFilter,
  setActiveFilter,
  query,
  setQuery,
  filteredCount,
}: ProjectsFilterProps) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 border-b border-border">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          role="tablist"
          aria-label="Filter projects by status"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "type-label-xs px-4 py-2.5 transition-colors duration-200 cursor-pointer",
                activeFilter === filter
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-card hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative md:ml-auto">
          <Search
            size={13}
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-muted-foreground/50"
          />
          <input
            type="search"
            placeholder="Search projects..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="type-body w-full border border-border bg-card py-2.5 pr-9 pl-9 text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/40 focus:border-primary/50 md:w-64 [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground/50 transition-colors duration-200 hover:text-foreground cursor-pointer"
            >
              <X size={12} />
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="type-index">
          {filteredCount} {filteredCount === 1 ? "result" : "results"}
        </span>
        {activeFilter !== "All" || query ? (
          <button
            type="button"
            onClick={() => {
              setActiveFilter("All");
              setQuery("");
            }}
            className="type-label-xs inline-flex items-center gap-1 text-muted-foreground/40 transition-colors duration-200 hover:text-primary cursor-pointer"
          >
            <X size={9} /> Clear
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectsFilter;
