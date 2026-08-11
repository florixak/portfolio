import { omitDiacritics } from "@/lib/utils";
import { profile } from "./profile";
import { TerminalSection } from "@/types";

type HeroTerminalOptions = {
  role: string;
  location: string;
};

type ContactTerminalOptions = {
  statusLine: string;
};

export const getHeroTerminalSections = ({
  role,
  location,
}: HeroTerminalOptions): TerminalSection[] => [
  {
    label: "whoami",
    lines: [omitDiacritics(profile.name), role],
  },
  {
    label: "cat stack.txt",
    lines: ["React · Next.js · TypeScript", "Java · Spring Boot · PostgreSQL"],
  },
  {
    label: "echo $LOCATION",
    lines: [location],
  },
];

export const getContactTerminalSections = ({
  statusLine,
}: ContactTerminalOptions): TerminalSection[] => [
  { label: "echo $EMAIL", lines: [profile.email] },
  {
    label: "curl --status",
    lines: [statusLine],
  },
];

export const notFoundTerminalSections: TerminalSection[] = [
  {
    label: "curl -I /requested-path",
    lines: ["HTTP/1.1 404 Not Found"],
  },
  {
    label: "ls /pages",
    lines: ["home · about · projects · contact"],
  },
];

export const projectNotFoundTerminalSections: TerminalSection[] = [
  {
    label: "cat project.json",
    lines: ["Error: project not found"],
  },
  {
    label: "ls ~/projects",
    lines: ["Browse the portfolio for available work"],
  },
];

export const errorTerminalSections: TerminalSection[] = [
  {
    label: "journalctl --priority=err",
    lines: ["HTTP/1.1 500 Internal Server Error"],
  },
  {
    label: "systemctl restart app",
    lines: ["Attempting recovery..."],
  },
];
