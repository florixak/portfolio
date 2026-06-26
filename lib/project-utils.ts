import { projects, projectsByPriority } from "@/data/projects";
import { Filter, Project } from "@/types";

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getFeaturedProjects = () =>
  projectsByPriority.filter((project) => project.featured).slice(0, 3);

export const filterProjects = (
  projects: Project[],
  filter: Filter,
  query: string,
) => {
  const normalizedQuery = query.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesFilter =
      filter === "All" || project.status === filter.toLowerCase();

    const matchesQuery =
      !normalizedQuery ||
      project.title.toLowerCase().includes(normalizedQuery) ||
      project.description.toLowerCase().includes(normalizedQuery) ||
      project.shortDescription.toLowerCase().includes(normalizedQuery) ||
      project.stack.some((tech) =>
        tech.toLowerCase().includes(normalizedQuery),
      );

    return matchesFilter && matchesQuery;
  });
};
