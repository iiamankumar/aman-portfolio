import type { Project, Skill } from "@shared/schema";

export const staticProjects: Project[] = [
  {
    id: 1,
    title: "DevConnect — Developer Networking Platform",
    description:
      "A full-stack social platform for developers to connect, share projects, and collaborate. Features real-time messaging, GitHub OAuth, post feeds, and skill-based matching.",
    imageUrl: "https://placehold.co/800x450/1a1a2e/e94560?text=DevConnect",
    link: "https://github.com/iiamankumar",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind", "WebSockets"],
    period: "Q1 2025",
  },
  {
    id: 2,
    title: "TaskFlow — Kanban Project Manager",
    description:
      "A drag-and-drop Kanban board application with team workspaces, real-time collaboration, sprint planning, and detailed analytics dashboard.",
    imageUrl: "https://placehold.co/800x450/0f3460/16213e?text=TaskFlow",
    link: "https://github.com/iiamankumar",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Docker"],
    period: "Q4 2024",
  },
  {
    id: 3,
    title: "ShopSphere — E-Commerce Platform",
    description:
      "A production-grade e-commerce platform with Stripe payments, inventory management, dynamic product catalog, and an admin dashboard with analytics.",
    imageUrl: "https://placehold.co/800x450/16213e/0f3460?text=ShopSphere",
    link: "https://github.com/iiamankumar",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "Vercel"],
    period: "Q3 2024",
  },
  {
    id: 4,
    title: "CodeCollab — Real-Time Code Editor",
    description:
      "A browser-based collaborative code editor with live cursors, syntax highlighting for 30+ languages, integrated chat, and session recording.",
    imageUrl: "https://placehold.co/800x450/1a1a2e/61dafb?text=CodeCollab",
    link: "https://github.com/iiamankumar",
    tags: ["React", "Node.js", "WebSockets", "TypeScript", "Express", "Tailwind"],
    period: "Q2 2024",
  },
];

export const staticSkills: Skill[] = [
  { id: 1, name: "React", category: "Frontend", iconName: "SiReact", isFeatured: true },
  { id: 2, name: "Next.js", category: "Frontend", iconName: "SiNextdotjs", isFeatured: true },
  { id: 3, name: "TypeScript", category: "Language", iconName: "SiTypescript", isFeatured: true },
  { id: 4, name: "Tailwind CSS", category: "Frontend", iconName: "SiTailwindcss", isFeatured: true },
  { id: 5, name: "Node.js", category: "Backend", iconName: "SiNodedotjs", isFeatured: true },
  { id: 6, name: "PostgreSQL", category: "Database", iconName: "SiPostgresql", isFeatured: true },
  { id: 7, name: "Docker", category: "DevOps", iconName: "SiDocker", isFeatured: true },
  { id: 8, name: "Git", category: "Tools", iconName: "SiGit", isFeatured: true },
  { id: 9, name: "Framer Motion", category: "Frontend", iconName: "SiFramer", isFeatured: false },
  { id: 10, name: "MongoDB", category: "Database", iconName: "SiMongodb", isFeatured: false },
  { id: 11, name: "Redis", category: "Database", iconName: "SiRedis", isFeatured: false },
  { id: 12, name: "Prisma", category: "Backend", iconName: "SiPrisma", isFeatured: false },
];
