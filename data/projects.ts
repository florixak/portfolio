import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "omori-wordle",
    title: "OMORI Wordle",
    featured: true,
    priority: 3,
    status: "active",
    year: 2026,
    shortDescription:
      "Daily Wordle-style puzzle with OMORI themes, user accounts, and progress tracking.",
    description:
      "A Wordle-inspired game built around OMORI. Players guess words tied to characters, locations, and themes from the game. The app includes user accounts, progress tracking, and a new puzzle each day.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Neon Postgres",
      "Better Auth",
      "TanStack Query",
      "TanStack Hotkeys",
      "Vitest",
      "React Context",
    ],
    highlights: [
      "Daily word puzzle",
      "User authentication",
      "Game state management",
      "OMORI-themed word bank",
      "Vitest test coverage",
    ],
    thumbnail: "/projects/omori-wordle/omori-wordle.webp",
    github: "https://github.com/florixak/omori-wordle",
    demo: "https://omori-wordle.vercel.app",
    screenshots: ["/projects/omori-wordle/omori-wordle.webp"],
    caseStudy: {
      motivation:
        "I wanted to combine an interest in OMORI with the daily puzzle format of Wordle, while working through a full-stack Next.js setup with authentication and a database.",
      challenges: [
        "Building a word bank tied to game lore without spoiling major story beats",
        "Managing game state and keyboard feedback across sessions",
        "Persisting user progress for authenticated accounts",
        "Keeping client and server game state aligned",
      ],
      architecture: [
        "Next.js App Router frontend with React Context for game state",
        "Drizzle ORM with Neon Postgres for users and stats",
        "Better Auth for session management",
        "TanStack Query for data fetching and caching",
        "TanStack Hotkeys for keyboard controls",
        "Vitest for unit and integration tests",
      ],
      lessons: [
        "React Context works well for self-contained game state, but the boundaries need to stay tight",
        "Daily puzzle logic is simpler when word selection is deterministic by date",
        "Vitest made it straightforward to test game logic and auth flows in isolation",
      ],
    },
  },
  {
    slug: "pixelverse",
    title: "PixelVerse",
    featured: true,
    priority: 2,
    status: "completed",
    year: 2026,
    shortDescription:
      "AI-moderated pixel art community with artist profiles, feeds, and Sanity CMS.",
    description:
      "PixelVerse is a community platform where pixel artists share work, browse feeds, and connect with other artists. Uploads pass through AI moderation before they go live.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Sanity.io",
      "TanStack Query",
      "TanStack Table",
      "TanStack Form",
    ],
    highlights: [
      "AI content moderation",
      "Artist profiles and feeds",
      "Headless CMS with Sanity",
      "Community discovery",
    ],
    thumbnail: "/projects/pixelverse/pixelverse.webp",
    github: "https://github.com/florixak/PixelVerse",
    demo: "https://pixel-verse-eta.vercel.app",
    screenshots: ["/projects/pixelverse/pixelverse.webp"],
    caseStudy: {
      motivation:
        "I wanted to build a social platform for pixel artists where AI handles a share of content moderation instead of relying on manual review alone.",
      challenges: [
        "Balancing open community sharing with safe, moderated uploads",
        "Modeling artist profiles, posts, and feeds in a headless CMS",
        "Keeping data fetching predictable across complex UI surfaces",
        "Storing reactions efficiently at a scale that would not break down under load",
      ],
      architecture: [
        "Next.js frontend with TanStack Query for server state",
        "Sanity.io as headless CMS for content and metadata",
        "OpenAI API or Gemini API for AI moderation",
      ],
      lessons: [
        "TanStack Query simplified cache invalidation across feed and profile views",
        "Infinite scroll kept the UI responsive while spreading data fetching over time",
        "Sanity schemas are worth defining early. Retrofitting content models is expensive",
        "AI moderation token costs add up quickly, so batching and prompt design matter",
      ],
    },
  },
  {
    slug: "minimal-eshop",
    title: "Minimal E-Shop",
    featured: false,
    priority: 4,
    status: "completed",
    year: 2025,
    shortDescription:
      "Full-stack e-commerce demo with Spring Boot, Stripe payments, and Docker deployment.",
    description:
      "A compact full-stack e-shop with a Spring Boot backend, Supabase PostgreSQL, Stripe payments, and a Vite + React + TypeScript frontend. Both services run in Docker for local development and deployment.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Spring Boot",
      "PostgreSQL",
      "Supabase",
      "Stripe",
      "Docker",
      "TanStack Router",
      "React Hook Form",
    ],
    highlights: [
      "Stripe checkout integration",
      "Spring Boot REST API",
      "Dockerized deployment",
      "Product catalog and cart",
    ],
    thumbnail: "/projects/minimal-eshop/minimal-eshop.webp",
    github: "https://github.com/florixak/minimal-eshop",
    demo: "https://minimal-minieshop.vercel.app",
    screenshots: ["/projects/minimal-eshop/minimal-eshop.webp"],
    caseStudy: {
      motivation:
        "I built this to practice a realistic e-commerce flow across a Java backend, a React frontend, and payment processing.",
      challenges: [
        "Aligning API contracts between Spring Boot and the Vite frontend",
        "Handling Stripe webhooks and payment confirmation reliably",
        "Packaging frontend and backend into a reproducible Docker setup",
      ],
      architecture: [
        "Spring Boot REST API with PostgreSQL on Supabase",
        "Vite + React SPA with TanStack Router",
        "Stripe for payment processing",
        "Docker Compose for local development",
      ],
      lessons: [
        "Docker made it easier to run the same stack locally and in deployment",
        "Clear API boundaries between frontend and backend reduced integration friction",
        "Stripe test mode and webhook forwarding were essential during development",
      ],
    },
  },
  {
    slug: "rtsoft-clothing-eshop",
    title: "RTSoft Clothing E-Shop",
    featured: false,
    priority: 5,
    status: "completed",
    year: 2026,
    shortDescription:
      "Production-inspired clothing e-commerce UI built with RTSoft, with catalog filtering, multi-step checkout, order management, and admin tools.",
    description:
      "Semester project developed with RTSoft. A clothing e-commerce application focused on realistic shopping flows, responsive layout, and maintainable UI. Students browse a filterable catalog with product variants, manage a cart, complete a multi-step checkout, and review order history. Admins manage products, orders, and analytics through a separate dashboard. The team ran usability tests with external participants and revised the interface based on their feedback.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "TanStack Query",
      "TanStack Router",
      "TanStack Table",
      "i18next",
    ],
    highlights: [
      "Responsive e-commerce experience",
      "Multi-step checkout flow",
      "Admin dashboard with analytics",
      "Product variants and filtering",
      "Internationalization (CZ / EN)",
      "Usability testing and UX iteration",
    ],
    thumbnail: "/projects/rtsoft-clothing-eshop/rtsoft-clothing-eshop.webp",
    github: "https://github.com/florixak/rtsoft-clothing-eshop",
    demo: "https://rtsoft-clothing-eshop.vercel.app",
    screenshots: ["/projects/rtsoft-clothing-eshop/rtsoft-clothing-eshop.webp"],
    caseStudy: {
      motivation:
        "The goal was a realistic e-commerce experience for a semester project with RTSoft, with equal weight on usability, architecture, and maintainable UI design.",
      challenges: [
        "Designing a multi-step checkout that did not overwhelm users",
        "Representing product variants, pricing, and stock accurately",
        "Building admin tables with sorting, filtering, and order management",
        "Keeping cart and catalog state consistent across routes",
        "Adjusting UI decisions after usability testing",
      ],
      architecture: [
        "React SPA with TanStack Router and nested layouts",
        "TanStack Query for server state",
        "Zustand for global cart state",
        "Reusable UI components built with shadcn/ui and Tailwind CSS",
        "Localization with i18next",
      ],
      lessons: [
        "Usability testing surfaced problems I had not anticipated during implementation",
        "Consistent UI patterns matter more as project scope grows",
        "Filtering and product variant logic affect both UX and data modeling",
        "Regular client feedback improved the final result more than late-stage polish alone",
      ],
    },
  },
  {
    slug: "textforge",
    title: "TextForge",
    featured: true,
    priority: 1,
    status: "completed",
    year: 2026,
    shortDescription:
      "Live text conversion tool with AI formatting, schema inference, and Stripe premium access.",
    description:
      "A text conversion tool with live previews. Signed-in users can run AI transformations that structure, clean, and infer schemas from unstructured text. Premium access is handled through Stripe.",
    stack: [
      "TanStack Start",
      "TypeScript",
      "Drizzle ORM",
      "Neon Postgres",
      "Better Auth",
      "Stripe",
      "shadcn/ui",
      "Resend",
      "TanStack Query",
    ],
    highlights: [
      "Live text previews",
      "AI-powered formatting",
      "Schema inference",
      "Stripe payments for premium features",
    ],
    thumbnail: "/projects/textforge/textforge.webp",
    github: "https://github.com/florixak/text-forge",
    demo: "https://text-forge-phi.vercel.app",
    screenshots: ["/projects/textforge/textforge.webp"],
    caseStudy: {
      motivation:
        "I built TextForge to learn TanStack Start while shipping a developer-facing text utility with optional AI features behind authentication.",
      challenges: [
        "Rendering live previews without lag on large text inputs",
        "Restricting AI features to authenticated users",
        "Handling Stripe checkout and access control for premium tiers",
        "Designing prompts that return structured, predictable output",
      ],
      architecture: [
        "TanStack Start full-stack framework with server functions",
        "Drizzle ORM on Neon Postgres for user data",
        "Better Auth with Resend for email flows",
        "Stripe for premium feature payments",
        "shadcn/ui for a responsive editor interface",
      ],
      lessons: [
        "TanStack Start blurs the client and server boundary. That helps for tools, but data boundaries need to stay explicit",
        "Debounced previews were required for a smooth editing experience",
        "AI token usage adds up fast, so request size and prompt design need deliberate limits",
      ],
    },
  },
  {
    slug: "omori-headspace",
    title: "OMORI Headspace",
    featured: false,
    priority: 6,
    status: "completed",
    year: 2026,
    shortDescription:
      "Interactive OMORI fan site with scroll-driven GSAP animations and detailed front-end work.",
    description:
      "An interactive fan site for the indie RPG OMORI, built to exercise scroll-driven animation and front-end detail work.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "GSAP"],
    highlights: [
      "Scroll-driven animations",
      "Interactive UI sections",
      "OMORI-inspired visual design",
      "Refined front-end execution",
    ],
    thumbnail: "/projects/omori-headspace/omori-headspace.webp",
    github: "https://github.com/florixak/omori-headspace",
    demo: "https://omori-headspace.vercel.app",
    screenshots: ["/projects/omori-headspace/omori-headspace.webp"],
    caseStudy: {
      motivation:
        "OMORI has a distinct visual identity, and I wanted a fan site that translated that mood into scroll-driven animation and front-end craft.",
      challenges: [
        "Matching the game's mood and color palette without using official assets",
        "Coordinating GSAP timelines across scroll triggers and page sections",
        "Keeping performance acceptable with heavy animation on lower-end devices",
      ],
      architecture: [
        "Next.js 16 with App Router",
        "GSAP ScrollTrigger for section-based animations",
        "Tailwind CSS v4 for styling and responsive layout",
      ],
      lessons: [
        "GSAP timelines are easier to maintain when each section owns its animation module",
        "Respecting reduced motion preferences and lazy-loading animations improved accessibility and performance",
      ],
    },
  },
  {
    slug: "school-buffet-reservation-system",
    title: "Reservation System for School Buffet",
    featured: false,
    priority: 7,
    status: "completed",
    year: 2025,
    shortDescription:
      "Frontend for a school buffet meal reservation system, including student ordering and admin tools.",
    description:
      "I built the frontend for a school buffet meal reservation system as part of my graduation project at SPŠE and VOŠ Plzeň (2024/2025). Students browse the menu, add items to a cart, and place orders. Administrators manage the menu and incoming orders. The frontend uses React with Tailwind CSS and communicates with a PHP backend written by a classmate over a REST API.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Zustand",
      "WebSocket",
      "TanStack Query",
      "Axios",
      "Zod",
    ],
    highlights: [
      "Student interface",
      "Admin interface",
      "WebSocket KDS integration",
      "REST API",
    ],
    thumbnail: "/projects/school-buffet/buffet.webp",
    github: "https://github.com/Web-Projekty/buffet-rezervace",
    demo: "https://buffet.vlastas.cc/",
    screenshots: ["/projects/school-buffet/buffet.webp"],
    caseStudy: {
      motivation:
        "The cafeteria still ran on paper slips and shouted orders during the lunch rush. For our graduation project at SPŠE and VOŠ Plzeň, we wanted ordering to feel as quick as grabbing a tray, not like another app students would ignore between classes.",
      challenges: [
        "Building a Kitchen Display System that kept tickets synced in real time without overloading the server",
        "Developing the frontend while the PHP backend was still being built in parallel",
        "Handling client-side validation and global state for cart, auth, and navigation under peak traffic",
      ],
      architecture: [
        "React (Vite + TypeScript) SPA with Tailwind CSS",
        "Zustand for cart state and react-auth-kit for session handling",
        "TanStack Query with Axios for menus and accounts, plus a custom WebSocket service with heartbeat keep-alive for the kitchen display",
        "Zod validation on inputs and TypeScript interfaces across data-fetching layers",
      ],
      lessons: [
        "Third-party WebSocket libraries did not handle keep-alive the way a kitchen display needs, so we built a native ping interval to prevent dropped connections",
        "Owning only the frontend forced disciplined API boundaries. Axios and TanStack Query became the integration surface when backend behavior changed late in the semester",
        "Reliability mattered more than animation polish for kitchen staff and students moving through a short lunch window",
        "Zod validation and consistent linting saved time during integration testing",
      ],
    },
  },
];

export const projectsByPriority = [...projects].sort(
  (a, b) => a.priority - b.priority,
);
