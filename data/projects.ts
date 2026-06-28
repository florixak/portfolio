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
      "Daily Wordle-style puzzle game with OMORI themes, user accounts, and progress tracking.",
    description:
      "A Wordle-inspired game based on OMORI, where players guess words related to characters, locations, and themes from the game. Includes user accounts, progress tracking, and a daily puzzle.",
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
        "Combine a love of OMORI with the daily puzzle format of Wordle, while practicing a full-stack Next.js setup with auth and a database.",
      challenges: [
        "Designing a word bank tied to game lore without spoiling key story beats",
        "Managing game state and keyboard feedback across sessions",
        "Persisting user progress with authenticated accounts",
        "Keeping the game state in sync with the server",
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
        "React Context works well for self-contained game state but needs careful boundaries",
        "Daily puzzle logic is simpler when word selection is deterministic per date",
        "Vitest makes it easier to test game logic and auth flows in isolation",
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
      "AI-moderated pixel art community platform with artist profiles, feeds, and Sanity CMS.",
    description:
      "PixelVerse is a modern AI-moderated community platform that allows pixel artists to share their work, connect with other artists, and explore the vibrant world of pixel art.",
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
        "Build a social platform for pixel artists that scales content moderation with AI instead of manual review alone.",
      challenges: [
        "Balancing open community sharing with safe, moderated uploads",
        "Modeling artist profiles, posts, and feeds in a headless CMS",
        "Keeping data fetching predictable across complex UI surfaces",
        "Saving the state of reactions (like, love, dislike, etc.) in a way that is efficient and scalable",
      ],
      architecture: [
        "Next.js frontend with TanStack Query for server state",
        "Sanity.io as headless CMS for content and metadata",
        "OpenAI API or Gemini API for AI moderation",
      ],
      lessons: [
        "TanStack Query simplifies cache invalidation across feed and profile views",
        "Infinite scroll is a great way to keep the UI responsive and the data fetching efficient",
        "Sanity schemas should be designed early — retrofitting content models is costly",
        "AI moderation token costs are significant, so it's important to optimize them for the best results",
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
      "Simple full-stack mini e-shop built with a Spring Boot backend, Supabase PostgreSQL, Stripe, and a Vite + React + TypeScript frontend. Containerized with Docker for local and production deployment.",
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
        "Practice a realistic full-stack e-commerce flow spanning a Java backend, React frontend, and payment processing.",
      challenges: [
        "Coordinating API contracts between Spring Boot and the Vite frontend",
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
        "Docker is a powerful tool for local development and production deployment",
        "Clear API boundaries between frontend and backend reduce integration friction",
        "Stripe test mode and webhook forwarding are essential during development",
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
      "UI-focused clothing e-shop with catalog filters, checkout, and admin dashboard — built with RTSoft.",
    description:
      "Semester project built in collaboration with RTSoft — a UI-focused e-commerce application for a clothing brand concept. Features a product catalog with filters, shopping cart, multi-step checkout, and an admin dashboard with orders, products, and analytics.",
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
      "Product catalog with filters",
      "Multi-step checkout",
      "Admin dashboard",
      "Internationalization",
    ],
    thumbnail: "/projects/rtsoft-clothing-eshop/rtsoft-clothing-eshop.webp",
    github: "https://github.com/florixak/rtsoft-clothing-eshop",
    demo: "https://rtsoft-clothing-eshop.vercel.app",
    screenshots: ["/projects/rtsoft-clothing-eshop/rtsoft-clothing-eshop.webp"],
    caseStudy: {
      motivation:
        "Partner with RTSoft on a semester project to deliver a polished e-commerce experience, from browsing and checkout to admin management.",
      challenges: [
        "Designing a multi-step checkout",
        "Building admin tables with sorting, filtering, and order management",
        "Keeping cart and catalog state in sync across routes",
      ],
      architecture: [
        "React SPA with TanStack Router for nested layouts",
        "Zustand for cart state, TanStack Query for server data",
        "shadcn/ui components with Tailwind CSS",
        "i18next for Czech/English localization",
      ],
      lessons: [
        "Communication with the client is crucial to delivering a project that meets their needs",
        "TanStack Table is worth the setup cost for admin dashboards with real data volume",
        "Internationalization is a complex topic, but it's worth the effort for a real-world project",
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
      "Live text conversion tool with AI-powered formatting, schema inference, and Stripe premium access.",
    description:
      "Convert and format text with live previews. Authenticated users can unlock AI-powered transformations that structure, clean, and infer schemas from unstructured text, with premium access handled through Stripe.",
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
        "Explore TanStack Start while building a developer-friendly text utility with optional AI features behind authentication.",
      challenges: [
        "Rendering live previews without lag on large text inputs",
        "Gating AI features securely for authenticated users only",
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
        "TanStack Start blurs the client/server boundary — good for tools, but requires clear data boundaries",
        "Debounced previews are non-negotiable for a smooth editing experience",
        "AI tokens are expensive, so it's important to optimize them for the best results",
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
      "Interactive OMORI fan site with scroll-driven GSAP animations and polished front-end craft.",
    description:
      "A stunning interactive fan website celebrating the indie psychological horror RPG OMORI, built as a portfolio demonstration of modern web development techniques and animation capabilities.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "GSAP"],
    highlights: [
      "Scroll-driven animations",
      "Interactive UI sections",
      "OMORI-inspired visual design",
      "Portfolio-grade polish",
    ],
    thumbnail: "/projects/omori-headspace/omori-headspace.webp",
    github: "https://github.com/florixak/omori-headspace",
    demo: "https://omori-headspace.vercel.app",
    screenshots: ["/projects/omori-headspace/omori-headspace.webp"],
    caseStudy: {
      motivation:
        "Showcase animation and front-end craft through a fan site for OMORI — a game with a distinct visual identity worth translating to the web.",
      challenges: [
        "Matching the game's mood and color palette without using official assets",
        "Orchestrating GSAP timelines across scroll triggers and page sections",
        "Keeping performance acceptable with heavy animation on lower-end devices",
      ],
      architecture: [
        "Next.js 16 with App Router",
        "GSAP ScrollTrigger for section-based animations",
        "Tailwind CSS v4 for styling and responsive layout",
      ],
      lessons: [
        "GSAP timelines are easier to maintain when each section owns its animation module",
        "Reduced motion preferences and lazy animation init improve accessibility and performance",
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
      "I created the entire frontend for the meal reservation system in the school buffet.",
    description:
      "I created the entire frontend for the school buffet meal reservation system. The project was created as part of the graduation project at the SPŠE and VOŠ in Pilsen 2024/2025. It allows users to browse the menu, add items to the cart, and place orders. Administrators can manage the menu, orders. I created the frontend in React with TailwindCSS. The backend was written in PHP by my classmate. The application communicates with the backend via REST API.",
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
        "The cafeteria still ran on paper slips and shouted orders during the lunch rush. For our graduation project at SPŠE and VOŠ Plzeň, we wanted ordering to feel as quick as grabbing a tray — not another app students would ignore between classes.",
      challenges: [
        "Building a real-time Kitchen Display System (KDS) that keeps tickets synced instantly without server-side performance lag.",
        "Decoupling the frontend development flow from a concurrently developed PHP backend.",
        "Ensuring robust client-side validation and consistent global state (cart, auth, navigation) under high user traffic.",
      ],
      architecture: [
        "React (Vite + TypeScript) structured as a modular SPA, styled rapidly with TailwindCSS and dynamic tailwind-merge components.",
        "Global state powered by Zustand (CartStore) and react-auth-kit for lightweight, provider-less session and cart tracking.",
        "Data layer split between TanStack Query (Axios-driven caching/fetching for menus/accounts) and a custom native WebSocket service with a heartbeat interval for real-time KDS synchronization.",
        "Strict type-safe boundaries utilizing Zod schema validation for registration/inputs and static TypeScript interfaces across all data-fetching layers.",
      ],
      lessons: [
        "A Kitchen Display System reframes 'done': third-party WebSocket libraries lacked vital keep-alive mechanics, forcing us to build a custom native ping-interval solution to prevent dropped kitchen connections.",
        "Owning only the frontend forced disciplined API thinking; treating Axios and TanStack Query as the sole integration boundaries insulated the UI when backend behavior shifted late in the semester.",
        "UX and reliability matter more than animation polish — leveraging structured components (framer-motion, react-hot-toast, ldrs) kept the UI intuitive for busy kitchen staff and rushing students alike.",
        "Validating client-side edge cases with Zod and automating code health via ESLint/Prettier saved critical debugging time during integration testing.",
      ],
    },
  },
];

export const projectsByPriority = [...projects].sort(
  (a, b) => a.priority - b.priority,
);
