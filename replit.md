# Aman Kumar Portfolio

## Overview

A premium portfolio website for Aman Kumar, a Software Engineer and Full Stack Developer. The design features glassmorphism UI, bento-grid layouts, extensive Framer Motion effects, and a dark theme. Built as a modern single-page application with React frontend, Express backend, and PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.
Design: Premium, dark theme (#0a0a0a background), white text, blue/purple gradient accents
Personal Info: Aman Kumar, amannkrmishraa@gmail.com, Based in India
Role: Software Engineer & Full Stack Developer (NOT freelance - removed all freelance references)

## Recent Changes

- Removed testimonials section per user request
- Cleaned up all old references and data
- Created premium portfolio with exact design replication from reference
- Added starfield background with precomputed positions (no jitter)
- Implemented bento grid with 8 cards (collaboration, tech stack, timezone, CTA, impact, location, inside scoop)
- Added skills section "The Secret Sauce" with 26+ tech icon grid
- Created blue gradient marquee banner with animated keywords
- Updated Navbar with center-aligned pill navigation and glassmorphism
- Updated Footer with column layout, availability badge, and social icons

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state and data fetching
- **Styling**: Tailwind CSS with dark theme by default
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion for scroll reveals and transitions
- **Icons**: react-icons/si for tech stack logos, lucide-react for UI icons

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints with Zod validation
- **Database ORM**: Drizzle ORM with PostgreSQL

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` - projects, skills, testimonials, messages tables

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components (Navbar, Footer)
│   │   ├── pages/        # Route pages (Home, Projects, About, Contact)
│   │   ├── hooks/        # Custom hooks
│   │   └── lib/          # Utilities
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared code
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions
├── attached_assets/  # Logo and assets
```

### API Endpoints
- `GET /api/projects` - List all projects
- `GET /api/skills` - List all skills
- `GET /api/testimonials` - List all testimonials
- `POST /api/contact` - Submit contact form message

### Key Sections (Home Page)
1. **Hero** - Animated star field background, "Software Engineer" badge, headline "Crafting robust software with elegant code", avatar with hover effect, CTAs
2. **Bento Grid** - 8 cards: Experience (with rotating circles), Tech Stack, Problem Solving, Contact, Code Quality mockup, Location, Current Focus
3. **Featured Projects** - "My Work" section with project cards, gradient backgrounds, hover effects, feature lists
4. **Tech Stack** - "My Toolkit" with 26+ tech icon grid with hover animations
5. **Marquee** - Blue gradient banner with engineering-focused keywords
6. **About** - "Software Engineer with a passion for innovation" bio, social links, resume button
7. **CTA** - "From Concept to Production, I Make It Happen!" with "Open to new opportunities"
8. **Footer** - Column layout with links and "Open to opportunities" badge

### Motion Effects (Framer Motion)
- Animated twinkling stars in hero
- Rotating concentric circles in Experience card
- Hover scale effects on all cards (whileHover)
- Staggered entry animations on skill icons and tags
- Arrow rotation on project buttons
- Rotating gradient on About section logo
- All sections have scroll-triggered reveal animations

## Build System
- Development: `npm run dev`
- Production: `npm run build`
- Database: `npm run db:push`

## External Dependencies

### UI/Styling
- Tailwind CSS, Radix UI, Framer Motion
- Lucide React, React Icons (Simple Icons)

### Key NPM Packages
- @tanstack/react-query
- react-hook-form + zod
- wouter
- drizzle-orm + drizzle-zod
