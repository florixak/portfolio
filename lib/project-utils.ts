import { projects, projectsByPriority } from "@/data/projects";
import { Filter, Project, ProjectCopy, ProjectMeta } from "@/types";

export type ProjectEntries = IntlMessages["projectEntries"];
type ProjectEntryKey = keyof ProjectEntries;

/**
 * Merge locale-invariant meta with prose from `messages.*.projectEntries`.
 * Pass `messages.projectEntries` from `getMessages()` / `useMessages()` —
 * `t.raw()` only types leaf keys, so nested entry objects are read from the
 * messages map directly (same end result as `about`'s `t.raw` for arrays).
 */
export const localizeProject = (
  meta: ProjectMeta,
  entries: ProjectEntries,
): Project => {
  const copy = entries[meta.slug as ProjectEntryKey] as ProjectCopy;
  return { ...meta, ...copy };
};

export const getLocalizedProjects = (entries: ProjectEntries): Project[] =>
  projectsByPriority.map((meta) => localizeProject(meta, entries));

export const getProjectBySlug = (
  slug: string,
  entries: ProjectEntries,
): Project | undefined => {
  const meta = projects.find((project) => project.slug === slug);
  if (!meta) return undefined;
  return localizeProject(meta, entries);
};

export const getFeaturedProjects = (entries: ProjectEntries): Project[] =>
  getLocalizedProjects(entries)
    .filter((project) => project.featured)
    .slice(0, 3);

export const getProjectPreviewImages = (project: Project) => {
  const screenshots = project.screenshots?.filter(Boolean) ?? [];
  const preview = screenshots[0] ?? project.thumbnail;
  const gallery = screenshots.length > 1 ? screenshots.slice(1) : [];

  return { preview, gallery };
};

export const getNextProject = (
  slug: string,
  entries: ProjectEntries,
): Project | undefined => {
  const localized = getLocalizedProjects(entries);

  if (localized.length <= 1) {
    return undefined;
  }

  const index = localized.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return undefined;
  }

  const nextProject = localized[index + 1] ?? localized[0];

  return nextProject.slug === slug ? undefined : nextProject;
};

export const filterProjects = (
  projectList: Project[],
  filter: Filter,
  query: string,
) => {
  const normalizedQuery = query.trim().toLowerCase();

  return projectList.filter((project) => {
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
