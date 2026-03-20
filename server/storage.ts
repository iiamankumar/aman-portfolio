import { db } from "./db";
import { desc } from "drizzle-orm";
import {
  projects, skills, testimonials, messages, guestbookEntries,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Testimonial, type InsertTestimonial,
  type Message, type InsertMessage,
  type GuestbookEntry, type InsertGuestbookEntry
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getTestimonials(): Promise<Testimonial[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  
  // Guestbook
  getGuestbookEntries(): Promise<GuestbookEntry[]>;
  createGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry>;
  
  // Seed methods
  createProject(project: InsertProject): Promise<Project>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }

  async getGuestbookEntries(): Promise<GuestbookEntry[]> {
    return await db.select().from(guestbookEntries).orderBy(desc(guestbookEntries.createdAt));
  }

  async createGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry> {
    const [newEntry] = await db.insert(guestbookEntries).values(entry).returning();
    return newEntry;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [newTestimonial] = await db.insert(testimonials).values(testimonial).returning();
    return newTestimonial;
  }
}

export const storage = new DatabaseStorage();
