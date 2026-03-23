import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import type { InsertMessage } from "@shared/schema";
import { staticProjects, staticSkills } from "@/data/static-data";

// Projects Hook — falls back to static data when the API is unavailable (e.g. GitHub Pages)
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.projects.list.path);
        if (!res.ok) {
          console.warn(`[useProjects] API returned ${res.status}, falling back to static data`);
          return staticProjects;
        }
        return api.projects.list.responses[200].parse(await res.json());
      } catch (err) {
        console.warn("[useProjects] API unavailable, falling back to static data:", err);
        return staticProjects;
      }
    },
  });
}

// Single Project Hook — falls back to static data when the API is unavailable
export function useProject(id: number) {
  return useQuery({
    queryKey: [api.projects.get.path, id],
    queryFn: async () => {
      try {
        const url = buildUrl(api.projects.get.path, { id });
        const res = await fetch(url);
        if (!res.ok) {
          console.warn(`[useProject] API returned ${res.status} for id=${id}, falling back to static data`);
          return staticProjects.find((p) => p.id === id) ?? null;
        }
        return api.projects.get.responses[200].parse(await res.json());
      } catch (err) {
        console.warn("[useProject] API unavailable, falling back to static data:", err);
        return staticProjects.find((p) => p.id === id) ?? null;
      }
    },
  });
}

// Skills Hook — falls back to static data when the API is unavailable
export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.skills.list.path);
        if (!res.ok) {
          console.warn(`[useSkills] API returned ${res.status}, falling back to static data`);
          return staticSkills;
        }
        return api.skills.list.responses[200].parse(await res.json());
      } catch (err) {
        console.warn("[useSkills] API unavailable, falling back to static data:", err);
        return staticSkills;
      }
    },
  });
}

// Testimonials Hook
export function useTestimonials() {
  return useQuery({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      const res = await fetch(api.testimonials.list.path);
      if (!res.ok) throw new Error("Failed to fetch testimonials");
      return api.testimonials.list.responses[200].parse(await res.json());
    },
  });
}

// Contact Form Hook
export function useContactMutation() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}
