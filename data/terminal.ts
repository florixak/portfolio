import { omitDiacritics } from "@/lib/utils";
import { profile } from "./profile";
import { TerminalSection } from "@/types";

export const heroTerminalSections: TerminalSection[] = [
  {
    label: "whoami",
    lines: [omitDiacritics(profile.name), profile.role],
  },
  {
    label: "cat stack.txt",
    lines: ["React · Next.js · TypeScript", "Java · Spring Boot · PostgreSQL"],
  },
  {
    label: "echo $LOCATION",
    lines: [profile.location],
  },
];

export const contactTerminalSections: TerminalSection[] = [
  { label: "echo $EMAIL", lines: [profile.email] },
  {
    label: "curl --status",
    lines: [
      profile.availableForWork
        ? "Open to collaboration"
        : "Interested in collaboration",
    ],
  },
];
