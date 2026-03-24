import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

export * from "./models/auth";

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  link: text("link").notNull(),
  tags: text("tags", { mode: "json" }).$type<string[]>().notNull(),
  period: text("period"), // e.g., "Q1 2025"
});

export const skills = sqliteTable("skills", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  category: text("category").notNull(), // "Frontend", "Backend", "Tools", etc.
  iconName: text("icon_name"), // e.g., "SiReact", "SiNextdotjs"
  isFeatured: integer("is_featured", { mode: "boolean" }).default(false),
});

export const testimonials = sqliteTable("testimonials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  avatarUrl: text("avatar_url"),
});

export const messages = sqliteTable("messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
});

export const guestbookEntries = sqliteTable("guestbook_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  userName: text("user_name").notNull(),
  userImage: text("user_image"),
  message: text("message").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(sql`(unixepoch())`),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export const insertGuestbookSchema = createInsertSchema(guestbookEntries).omit({ id: true, createdAt: true });
export const guestbookMessageSchema = insertGuestbookSchema.pick({ message: true });

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;

export type GuestbookEntry = typeof guestbookEntries.$inferSelect;
export type InsertGuestbookEntry = z.infer<typeof insertGuestbookSchema>;
