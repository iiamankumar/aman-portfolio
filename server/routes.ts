import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { setupAuth, registerAuthRoutes, isAuthenticated } from "./replit_integrations/auth";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  await setupAuth(app);
  registerAuthRoutes(app);

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    // Basic implementation since storage doesn't have getProject(id) yet in interface
    // but the list is small so we can filter in memory or update storage later.
    // For now, I'll just fetch all and find. 
    const projects = await storage.getProjects();
    const project = projects.find(p => p.id === Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createMessage(input);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.guestbook.list.path, async (req, res) => {
    const entries = await storage.getGuestbookEntries();
    res.json(entries);
  });

  app.post(api.guestbook.submit.path, isAuthenticated, async (req: any, res) => {
    try {
      const user = req.user.claims;
      const messageSchema = z.object({ message: z.string().min(1).max(500) });
      const { message } = messageSchema.parse(req.body);
      
      const entry = await storage.createGuestbookEntry({
        userId: user.sub,
        userName: `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email || 'Anonymous',
        userImage: user.profile_image_url || null,
        message,
      });
      res.status(201).json(entry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data on startup
  seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const projects = await storage.getProjects();
  if (projects.length === 0) {
    await storage.createProject({
      title: "Next Ventures",
      description: "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=75",
      link: "#",
      tags: ["Next.js", "React", "Sanity CMS", "TypeScript", "Better Auth", "Tailwind CSS"],
      period: "Q1 2025"
    });
    
    await storage.createProject({
      title: "Finote App",
      description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=75",
      link: "#",
      tags: ["Expo", "TypeScript", "Firebase", "Zod", "Zustand"],
      period: "Q4 2025"
    });

    await storage.createProject({
      title: "Zenith Minds",
      description: "A platform connecting students and instructors for enhanced learning experiences.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=75",
      link: "#",
      tags: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      period: "2025"
    });

    await storage.createProject({
      title: "Snippix",
      description: "A platform for creating and sharing code snippets with a clean and intuitive design.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=75",
      link: "#",
      tags: ["Next.js", "React", "Zustand", "TypeScript", "shadcn-ui"],
      period: "2025"
    });

    await storage.createProject({
      title: "StarForge",
      description: "A sleek AI SaaS landing page with a user-friendly design that enhances engagement.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=75",
      link: "#",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Parallax"],
      period: "2025"
    });
  }

  const skills = await storage.getSkills();
  if (skills.length === 0) {
    const skillList = [
      { name: "React", category: "Frontend", iconName: "SiReact" },
      { name: "Next.js", category: "Frontend", iconName: "SiNextdotjs" },
      { name: "TypeScript", category: "Frontend", iconName: "SiTypescript" },
      { name: "Tailwind CSS", category: "Frontend", iconName: "SiTailwindcss" },
      { name: "Framer Motion", category: "Frontend", iconName: "SiFramer" },
      { name: "Node.js", category: "Backend", iconName: "SiNodedotjs" },
      { name: "Express.js", category: "Backend", iconName: "SiExpress" },
      { name: "PostgreSQL", category: "Backend", iconName: "SiPostgresql" },
      { name: "MongoDB", category: "Backend", iconName: "SiMongodb" },
      { name: "Prisma", category: "Backend", iconName: "SiPrisma" },
      { name: "Drizzle", category: "Backend", iconName: "SiDrizzle" },
      { name: "Docker", category: "Tools", iconName: "SiDocker" },
      { name: "Git", category: "Tools", iconName: "SiGit" },
      { name: "Figma", category: "Tools", iconName: "SiFigma" },
    ];
    
    for (const skill of skillList) {
      await storage.createSkill(skill);
    }
  }

  // Testimonials section removed per user request
}
