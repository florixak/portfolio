import { TechStackCategory } from "@/types";

export const techStack: TechStackCategory[] = [
  {
    label: "Frontend",
    items: [
      { label: "React" },
      { label: "Next.js" },
      { label: "TanStack Start" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
    ],
  },
  {
    label: "Backend",
    items: [{ label: "Java" }, { label: "Spring Boot" }],
  },
  {
    label: "Database",
    items: [
      { label: "PostgreSQL" },
      { label: "Drizzle ORM" },
      { label: "Neon" },
      { label: "Supabase" },
    ],
  },
  {
    label: "Tools",
    items: [
      { label: "Git" },
      { label: "Docker" },
      { label: "Stripe" },
      { label: "Vercel" },
      { label: "OpenAI" },
    ],
  },
];
