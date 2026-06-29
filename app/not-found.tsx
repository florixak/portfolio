import NotFoundContent from "@/components/layout/not-found-content";
import { notFoundTerminalSections } from "@/data/terminal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const NotFound = () => {
  return (
    <NotFoundContent
      title={
        <>
          Page
          <br />
          <span className="text-primary">not found</span>
        </>
      }
      description="The page you are looking for does not exist or may have been moved. Head back home or explore the projects."
      primaryLink={{ label: "Back home", href: "/" }}
      secondaryLink={{ label: "View projects", href: "/projects" }}
      terminalSections={notFoundTerminalSections}
    />
  );
};

export default NotFound;
