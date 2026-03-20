import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-portfolio";
import { Loader2 } from "lucide-react";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of projects I've worked on, ranging from web applications to mobile apps and design systems.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
              
              {!projects?.length && (
                <div className="col-span-full py-32 text-center text-muted-foreground border border-dashed border-border rounded-2xl">
                  No projects added yet.
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
