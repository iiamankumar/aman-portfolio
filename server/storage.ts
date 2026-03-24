import { connectDB } from "./db";
import { Project, Skill, Testimonial, Message, GuestbookEntry, User } from "./models";
import type { IProject, ISkill, ITestimonial, IMessage, IGuestbookEntry, IUser } from "./models";

class Storage {
  // Projects
  async getProjects() {
    await connectDB();
    return await Project.find().sort({ createdAt: -1 });
  }

  async getProject(id: string) {
    await connectDB();
    return await Project.findById(id);
  }

  async createProject(data: Partial<IProject>) {
    await connectDB();
    return await Project.create(data);
  }

  async updateProject(id: string, data: Partial<IProject>) {
    await connectDB();
    return await Project.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProject(id: string) {
    await connectDB();
    return await Project.findByIdAndDelete(id);
  }

  // Skills
  async getSkills() {
    await connectDB();
    return await Skill.find().sort({ category: 1, name: 1 });
  }

  async getSkill(id: string) {
    await connectDB();
    return await Skill.findById(id);
  }

  async createSkill(data: Partial<ISkill>) {
    await connectDB();
    return await Skill.create(data);
  }

  async updateSkill(id: string, data: Partial<ISkill>) {
    await connectDB();
    return await Skill.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteSkill(id: string) {
    await connectDB();
    return await Skill.findByIdAndDelete(id);
  }

  // Testimonials
  async getTestimonials() {
    await connectDB();
    return await Testimonial.find().sort({ createdAt: -1 });
  }

  async createTestimonial(data: Partial<ITestimonial>) {
    await connectDB();
    return await Testimonial.create(data);
  }

  // Messages
  async getMessages() {
    await connectDB();
    return await Message.find().sort({ createdAt: -1 });
  }

  async createMessage(data: Partial<IMessage>) {
    await connectDB();
    return await Message.create(data);
  }

  // Guestbook Entries
  async getGuestbookEntries() {
    await connectDB();
    return await GuestbookEntry.find().sort({ createdAt: -1 });
  }

  async createGuestbookEntry(data: Partial<IGuestbookEntry>) {
    await connectDB();
    return await GuestbookEntry.create(data);
  }

  async deleteGuestbookEntry(id: string) {
    await connectDB();
    return await GuestbookEntry.findByIdAndDelete(id);
  }

  // Users
  async getUser(id: string) {
    await connectDB();
    return await User.findById(id);
  }

  async getUserByEmail(email: string) {
    await connectDB();
    return await User.findOne({ email });
  }

  async createUser(data: Partial<IUser>) {
    await connectDB();
    return await User.create(data);
  }

  async updateUser(id: string, data: Partial<IUser>) {
    await connectDB();
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async upsertUser(email: string, data: Partial<IUser>) {
    await connectDB();
    return await User.findOneAndUpdate(
      { email },
      data,
      { upsert: true, new: true }
    );
  }
}

export const storage = new Storage();
