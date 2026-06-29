import NotFoundContent from "@/components/layout/not-found-content";
import { projectNotFoundTerminalSections } from "@/data/terminal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project not found",
  robots: { index: false, follow: true },
};

const ProjectNotFound = () => {
  return (
    <NotFoundContent
      label="404 — Project"
      title={
        <>
          Project
          <br />
          <span className="text-primary">not found</span>
        </>
      }
      description="This project does not exist or may have been removed from the portfolio. Browse all projects or return home."
      primaryLink={{ label: "All projects", href: "/projects" }}
      secondaryLink={{ label: "Back home", href: "/" }}
      terminalSections={projectNotFoundTerminalSections}
    />
  );
};

export default ProjectNotFound;
