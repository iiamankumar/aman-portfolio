import mongoose from "mongoose";

// Projects Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
  tags: [{ type: String }],
  period: String,
}, { timestamps: true });

// Skills Schema
const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  iconName: String,
  isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

// Testimonials Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  content: { type: String, required: true },
  avatarUrl: String,
}, { timestamps: true });

// Messages Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

// Guestbook Entries Schema
const guestbookSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userImage: String,
  message: { type: String, required: true },
}, { timestamps: true });

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  firstName: String,
  lastName: String,
  profileImageUrl: String,
}, { timestamps: true });

// Session Schema (for express-session with connect-mongo)
const sessionSchema = new mongoose.Schema({
  sid: { type: String, required: true, unique: true },
  sess: { type: mongoose.Schema.Types.Mixed, required: true },
  expire: { type: Date, required: true },
}, { timestamps: true });

sessionSchema.index({ expire: 1 }, { expireAfterSeconds: 0 });

// Export Models
export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);
export const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema);
export const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
export const GuestbookEntry = mongoose.models.GuestbookEntry || mongoose.model("GuestbookEntry", guestbookSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Session = mongoose.models.Session || mongoose.model("Session", sessionSchema);

// Export types
export type IProject = mongoose.InferSchemaType<typeof projectSchema>;
export type ISkill = mongoose.InferSchemaType<typeof skillSchema>;
export type ITestimonial = mongoose.InferSchemaType<typeof testimonialSchema>;
export type IMessage = mongoose.InferSchemaType<typeof messageSchema>;
export type IGuestbookEntry = mongoose.InferSchemaType<typeof guestbookSchema>;
export type IUser = mongoose.InferSchemaType<typeof userSchema>;
