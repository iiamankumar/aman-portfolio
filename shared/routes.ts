import { z } from 'zod';

// Validation Schemas
export const insertMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export const insertGuestbookSchema = z.object({
  message: z.string().min(1).max(500),
});

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.custom<typeof projects.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/projects/:id',
      responses: {
        200: z.custom<typeof projects.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    }
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.custom<typeof skills.$inferSelect>()),
      },
    },
  },
  testimonials: {
    list: {
      method: 'GET' as const,
      path: '/api/testimonials',
      responses: {
        200: z.array(z.custom<typeof testimonials.$inferSelect>()),
      },
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertMessageSchema,
      responses: {
        201: z.object({ success: z.boolean(), message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
  guestbook: {
    list: {
      method: 'GET' as const,
      path: '/api/guestbook',
      responses: {
        200: z.array(z.custom<typeof guestbookEntries.$inferSelect>()),
      },
    },
    submit: {
      method: 'POST' as const,
      path: '/api/guestbook',
      input: insertGuestbookSchema,
      responses: {
        201: z.custom<typeof guestbookEntries.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
