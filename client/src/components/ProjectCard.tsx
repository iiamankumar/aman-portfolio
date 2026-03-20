import type { Project } from "@shared/schema";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Tags should be parsed as string[] if coming from JSON, 
  // but typescript might see it as unknown depending on drizzle setup.
  // Safe casting:
  const tags = (project.tags as unknown as string[]) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-muted/20 border border-border/50 hover:border-primary/50 transition-colors">
        {/* Image Container */}
        <div className="aspect-video overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-primary mb-1">{project.period}</p>
              <h3 className="text-xl font-bold font-display">{project.title}</h3>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background border border-border hover:bg-primary hover:border-primary hover:text-white transition-all"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                +{tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
