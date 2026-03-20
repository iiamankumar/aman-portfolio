import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink, ChevronDown, ChevronRight, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs,
  SiGithub, SiPostgresql, SiMongodb, SiPrisma, SiDocker
} from "react-icons/si";
import { useState } from "react";

const projectDetails: Record<number, {
  title: string;
  date: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  techStack: { name: string; description: string; icon?: any }[];
  keyFeatures: { title: string; description: string }[];
  challenges: { title: string; description: string }[];
  outcome: string;
}> = {
  1: {
    title: "Next Ventures",
    date: "Q1 2025",
    category: "Web App",
    description: "A full-stack startup pitch platform built using cutting-edge Next.js 15 features, Sanity CMS, and a sleek UI/UX experience.",
    longDescription: "Next Ventures is a web platform for early-stage entrepreneurs to create, share, and explore startup pitches. It combines modern full-stack development practices with a carefully crafted user experience — enabling founders to go from idea to presentation effortlessly.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    githubUrl: "https://github.com/amankumar/next-ventures",
    liveUrl: "https://next-ventures.vercel.app",
    techStack: [
      { name: "Next.js 15", description: "Full-stack React framework with SSR, PPR, and Server Actions", icon: SiNextdotjs },
      { name: "TypeScript", description: "Type safety for reliable development", icon: SiTypescript },
      { name: "Tailwind CSS", description: "Utility-first styling for modern UIs", icon: SiTailwindcss },
      { name: "Shadcn UI", description: "Accessible component library built on Radix" },
      { name: "Motion.dev", description: "Smooth animation and transition effects", icon: SiFramer },
      { name: "Auth.js", description: "Authentication framework with GitHub OAuth" },
      { name: "Sanity CMS", description: "Headless CMS with real-time content editing" },
      { name: "GROQ", description: "Structured query language for Sanity" },
    ],
    keyFeatures: [
      { title: "High-Performance Architecture", description: "Built with Next.js 15's latest features including Partial Prerendering for optimal performance." },
      { title: "Headless CMS Integration", description: "Sanity CMS provides real-time content editing and dynamic content management." },
      { title: "Seamless Authentication", description: "Auth.js integration with GitHub OAuth for secure user authentication." },
      { title: "Polished & Accessible UI", description: "Shadcn UI components ensure accessibility and consistent design language." },
    ],
    challenges: [
      { title: "Adopting the Next.js 15 Ecosystem", description: "Working with experimental features like Partial Prerendering and Server Actions was both exciting and challenging. Since documentation and community resources were still evolving, I had to frequently refer to source code and RFCs to understand internals." },
      { title: "Real-Time CMS Syncing", description: "Integrating Sanity's live preview and dynamic content sync pushed me to better understand GROQ queries and Sanity's studio architecture. I learned how to optimize content fetches and resolve race conditions during live editing." },
      { title: "Auth.js Integration", description: "Although Auth.js offered a solid foundation for OAuth, customizing session behavior and securing edge cases (e.g., token expiry) required debugging and patching both server and client logic." },
      { title: "Design & Component Composition", description: "Using Shadcn UI taught me more about accessible component composition and headless design systems. Creating cohesive animations using Motion.dev also deepened my understanding of motion hierarchy and delay sequencing." },
    ],
    outcome: "Next Ventures was successfully launched as a portfolio project and has been well-received for its clean design, speed, and usability. It stands as a solid demonstration of my full-stack capabilities and my ability to adopt emerging web technologies with confidence."
  },
  2: {
    title: "TaskFlow Pro",
    date: "Q4 2024",
    category: "SaaS Platform",
    description: "A comprehensive project management solution with real-time collaboration, Kanban boards, and advanced analytics.",
    longDescription: "TaskFlow Pro is an enterprise-grade project management platform designed for modern teams. It features real-time collaboration, customizable workflows, and powerful analytics to help teams stay productive and aligned.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    githubUrl: "https://github.com/amankumar/taskflow-pro",
    liveUrl: "https://taskflow-pro.vercel.app",
    techStack: [
      { name: "React", description: "Component-based UI library for building interactive interfaces", icon: SiReact },
      { name: "Node.js", description: "JavaScript runtime for building scalable backend services", icon: SiNodedotjs },
      { name: "PostgreSQL", description: "Robust relational database for data persistence", icon: SiPostgresql },
      { name: "Prisma", description: "Modern ORM for type-safe database queries", icon: SiPrisma },
      { name: "Docker", description: "Container platform for consistent deployments", icon: SiDocker },
      { name: "WebSockets", description: "Real-time bidirectional communication" },
    ],
    keyFeatures: [
      { title: "Real-Time Collaboration", description: "WebSocket-powered live updates for seamless team collaboration." },
      { title: "Customizable Workflows", description: "Flexible Kanban boards and workflow automation." },
      { title: "Advanced Analytics", description: "Comprehensive dashboards with actionable insights." },
      { title: "Role-Based Access Control", description: "Granular permissions for team security." },
    ],
    challenges: [
      { title: "Scaling Real-Time Features", description: "Implementing WebSocket connections at scale required careful architecture decisions around connection pooling and message broadcasting." },
      { title: "Database Optimization", description: "Complex queries for analytics required extensive optimization and proper indexing strategies." },
      { title: "State Synchronization", description: "Keeping client state in sync with real-time updates while maintaining optimistic UI was challenging." },
    ],
    outcome: "TaskFlow Pro successfully handles thousands of concurrent users and has become a reliable tool for teams managing complex projects."
  },
  3: {
    title: "AI Code Assistant",
    date: "Q3 2024",
    category: "Developer Tool",
    description: "An intelligent code completion and review tool powered by machine learning.",
    longDescription: "AI Code Assistant is a developer productivity tool that leverages machine learning to provide intelligent code suggestions, automated code reviews, and documentation generation.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    githubUrl: "https://github.com/amankumar/ai-code-assistant",
    liveUrl: "https://ai-code-assistant.dev",
    techStack: [
      { name: "TypeScript", description: "Type-safe development for reliable code", icon: SiTypescript },
      { name: "React", description: "Frontend framework for the web interface", icon: SiReact },
      { name: "MongoDB", description: "NoSQL database for flexible data storage", icon: SiMongodb },
      { name: "OpenAI API", description: "AI models for intelligent code analysis" },
    ],
    keyFeatures: [
      { title: "Intelligent Code Completion", description: "Context-aware suggestions that understand your codebase." },
      { title: "Automated Code Review", description: "AI-powered analysis for code quality and best practices." },
      { title: "Documentation Generation", description: "Automatic documentation from code comments and structure." },
      { title: "Multi-Language Support", description: "Works with JavaScript, TypeScript, Python, and more." },
    ],
    challenges: [
      { title: "Model Fine-Tuning", description: "Customizing AI responses for different programming languages and coding styles required extensive experimentation." },
      { title: "Latency Optimization", description: "Reducing response time while maintaining quality suggestions was a key challenge." },
    ],
    outcome: "The tool has significantly improved developer productivity, reducing code review time by 40% and catching common bugs before they reach production."
  }
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = parseInt(params?.id || "1");
  const project = projectDetails[projectId] || projectDetails[1];
  const [tocOpen, setTocOpen] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);

  const allProjectIds = Object.keys(projectDetails).map(Number);
  const currentIndex = allProjectIds.indexOf(projectId);
  const prevProject = currentIndex > 0 ? projectDetails[allProjectIds[currentIndex - 1]] : null;
  const nextProject = currentIndex < allProjectIds.length - 1 ? projectDetails[allProjectIds[currentIndex + 1]] : null;
  const prevId = currentIndex > 0 ? allProjectIds[currentIndex - 1] : null;
  const nextId = currentIndex < allProjectIds.length - 1 ? allProjectIds[currentIndex + 1] : null;

  const toggleFeature = (index: number) => {
    setExpandedFeatures(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-transparent" />
          <div className="max-w-5xl mx-auto px-6">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 relative z-50"
            >
              <Link href="/#projects">
                <Button variant="ghost" className="text-white/60 hover:text-white" data-testid="button-back">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                </Button>
              </Link>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-3xl overflow-hidden mb-8 border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
                data-testid="img-project-hero"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <Badge className="bg-[#1a1a1a] text-white border-white/20" data-testid="badge-date">
                  {project.date}
                </Badge>
              </div>
            </motion.div>

            {/* Title and Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-project-title">
                {project.title}
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-3xl" data-testid="text-project-description">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.techStack.slice(0, 10).map((tech, i) => (
                  <Badge 
                    key={i}
                    variant="outline" 
                    className="rounded-full border-white/20 bg-[#1a1a1a] text-white text-sm px-4 py-2 flex items-center gap-2"
                    data-testid={`badge-tech-${i}`}
                  >
                    {tech.icon && <tech.icon className="w-4 h-4" />}
                    {tech.name}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-12">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-white/20" data-testid="button-github">
                    <SiGithub className="w-4 h-4 mr-2" /> Star on GitHub
                  </Button>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white/20 text-white" data-testid="button-live">
                    Check it out <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Project Screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-white/10 mb-16"
            >
              <img 
                src={project.imageUrl} 
                alt={`${project.title} screenshot`}
                className="w-full h-auto"
                data-testid="img-project-screenshot"
              />
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-4xl mx-auto px-6">
          {/* Table of Contents */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-2xl border border-white/10 p-6 mb-12"
          >
            <button 
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between text-left"
              data-testid="button-toc-toggle"
            >
              <span className="text-xl font-semibold">Table of Contents</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
            </button>
            {tocOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 space-y-2"
              >
                <a href="#overview" className="block text-white/60 hover:text-white">Overview</a>
                <a href="#features" className="block text-white/60 hover:text-white">Key Features</a>
                <a href="#tech-stack" className="block text-white/60 hover:text-white">Tech Stack</a>
                <a href="#challenges" className="block text-white/60 hover:text-white">Challenges & Learnings</a>
                <a href="#outcome" className="block text-white/60 hover:text-white">Outcome</a>
              </motion.div>
            )}
          </motion.div>

          {/* Overview */}
          <motion.div 
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-lg text-white/80 leading-relaxed" data-testid="text-long-description">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div 
            id="features"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8" data-testid="text-key-features-title">Key Features</h2>
            <div className="space-y-4">
              {project.keyFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#111] rounded-xl border border-white/10 overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => toggleFeature(i)}
                  data-testid={`feature-item-${i}`}
                >
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <ChevronRight className={`w-5 h-5 text-white/40 transition-transform ${expandedFeatures.includes(i) ? 'rotate-90' : ''}`} />
                      <span className="font-medium">{feature.title}</span>
                    </div>
                    <LinkIcon className="w-4 h-4 text-white/40" />
                  </div>
                  {expandedFeatures.includes(i) && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="px-5 pb-5 pt-0"
                    >
                      <p className="text-white/60 pl-9">{feature.description}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            id="tech-stack"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8" data-testid="text-tech-stack-title">Tech Stack</h2>
            <ul className="space-y-6">
              {project.techStack.map((tech, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                  data-testid={`tech-stack-item-${i}`}
                >
                  <span className="text-white/40 mt-1.5">•</span>
                  <div>
                    <span className="font-semibold underline underline-offset-4 decoration-white/30">{tech.name}</span>
                    <span className="text-white/60"> – {tech.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges & Learnings */}
          <motion.div 
            id="challenges"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60" data-testid="text-challenges-title">
              Challenges & Learnings
            </h2>
            <div className="space-y-8">
              {project.challenges.map((challenge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`challenge-item-${i}`}
                >
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-white/70 leading-relaxed">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcome */}
          <motion.div 
            id="outcome"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6" data-testid="text-outcome-title">Outcome</h2>
            <p className="text-lg text-white/80 leading-relaxed" data-testid="text-outcome">
              {project.outcome}
            </p>
          </motion.div>

          {/* Navigation to Other Projects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {prevProject && prevId && (
              <Link href={`/project/${prevId}`}>
                <div className="bg-[#111] rounded-xl border border-white/10 p-5 hover:border-white/20 transition-colors cursor-pointer" data-testid="link-prev-project">
                  <div className="flex items-center gap-2 text-white/60 mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>{prevProject.title}</span>
                  </div>
                  <p className="text-white/40 text-sm truncate">{prevProject.description}</p>
                </div>
              </Link>
            )}
            {nextProject && nextId && (
              <Link href={`/project/${nextId}`}>
                <div className="bg-[#111] rounded-xl border border-white/10 p-5 hover:border-white/20 transition-colors cursor-pointer" data-testid="link-next-project">
                  <div className="flex items-center justify-end gap-2 text-white/60 mb-2">
                    <span>{nextProject.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <p className="text-white/40 text-sm truncate text-right">{nextProject.description}</p>
                </div>
              </Link>
            )}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
