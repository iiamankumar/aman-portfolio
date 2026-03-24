# Aman Kumar Portfolio

A modern, full-stack portfolio website showcasing projects, skills, and professional experience.

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: SQLite with Drizzle ORM
- **UI Framework**: TailwindCSS + shadcn/ui
- **State Management**: TanStack React Query
- **Authentication**: Replit Auth (Google OAuth)
- **Animations**: Framer Motion

## ✨ Features

- **Modern Portfolio Design**: Beautiful, responsive design with smooth animations
- **Project Showcase**: Display your projects with images, descriptions, and tech stacks
- **Skills Section**: Showcase your technical skills with icons
- **Contact Form**: Working contact form with backend integration
- **Guestbook/Wall**: Interactive guestbook with Google authentication
- **Dark Theme**: Sleek dark mode design
- **Fully Responsive**: Optimized for all device sizes

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository** (if not already done)
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the values as needed
   ```bash
   cp .env.example .env
   ```

4. **Initialize the database**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/app/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
│   └── public/          # Static assets
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   ├── db.ts            # Database configuration
│   ├── storage.ts       # Data access layer
│   └── replit_integrations/ # Auth integration
├── shared/              # Shared types and schemas
│   ├── schema.ts        # Database schema
│   ├── routes.ts        # API route contracts
│   └── models/          # Data models
└── portfolio.db         # SQLite database
```

## 🔌 API Endpoints

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `GET /api/skills` - Get all skills
- `GET /api/testimonials` - Get all testimonials
- `POST /api/contact` - Submit contact form
- `GET /api/guestbook` - Get guestbook entries
- `POST /api/guestbook` - Add guestbook entry (requires auth)
- `GET /api/login` - Initiate Google OAuth login
- `GET /api/logout` - Logout user

## 🎨 Customization

### Adding Projects

Edit `/app/server/routes.ts` in the `seedDatabase()` function to add your projects:

```typescript
await storage.createProject({
  title: "Your Project",
  description: "Project description",
  imageUrl: "https://example.com/image.jpg",
  link: "https://project-url.com",
  tags: ["React", "Node.js"],
  period: "Q1 2025"
});
```

### Updating Personal Information

Edit the following files:
- `/app/client/src/pages/Home.tsx` - Hero section, about text
- `/app/client/src/components/Navbar.tsx` - Navigation links
- `/app/client/src/components/Footer.tsx` - Footer content

## 🔧 Development

### Running Tests
```bash
npm test
```

### Type Checking
```bash
npm run check
```

### Database Migrations
```bash
npm run db:push
```

## 📝 Environment Variables

```env
# Database
DATABASE_URL=./portfolio.db

# Session
SESSION_SECRET=your-secret-key

# Server
PORT=5000
NODE_ENV=development

# Replit Auth (Optional)
REPL_ID=
ISSUER_URL=https://replit.com/oidc
```

## 🚀 Deployment

This application is optimized for deployment on:
- Replit
- Vercel (see `vercel.json`)
- Any Node.js hosting platform

## 📄 License

MIT

## 👤 Author

**Aman Kumar**
- GitHub: [@iiamankumar](https://github.com/iiamankumar)
- LinkedIn: [iiaman-kumar](https://linkedin.com/in/iiaman-kumar)
- Email: amannkrmishraa@gmail.com