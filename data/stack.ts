import { TechStackCategory } from "@/types";

export const techStack: TechStackCategory[] = [
  {
    label: "Frontend",
    items: [
      { label: "React" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
      { label: "GSAP" },
      { label: "React Native" },
    ],
  },
  {
    label: "Backend",
    items: [
      { label: "Spring Boot" },
      { label: "Node.js" },
      { label: "Express.js" },
    ],
  },
  {
    label: "Database",
    items: [
      { label: "PostgreSQL" },
      { label: "Neon" },
      { label: "Supabase" },
      { label: "Drizzle ORM" },
      { label: "Prisma" },
    ],
  },
  {
    label: "Tools",
    items: [
      { label: "Docker" },
      { label: "Git" },
      { label: "Stripe" },
      { label: "Sanity.io" },
      { label: "Resend" },
      { label: "Vercel" },
    ],
  },
];
