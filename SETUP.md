# Setup Guide for Aman Kumar Portfolio

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
The `.env` file is already configured with SQLite defaults. You can modify it if needed:

```env
DATABASE_URL=./portfolio.db
SESSION_SECRET=your-super-secret-session-key-change-this-in-production-12345678
PORT=5000
NODE_ENV=development
```

### 3. Initialize Database
```bash
npm run db:push
```

This will:
- Create the SQLite database file
- Set up all tables (projects, skills, testimonials, messages, guestbook, users, sessions)
- Seed initial data (5 sample projects + 14 skills)

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at: **http://localhost:5000**

## 🎯 Application Status

✅ **Backend (Express.js)**: Running on port 5000  
✅ **Frontend (React)**: Served by Vite dev server  
✅ **Database (SQLite)**: Initialized with seed data  
✅ **API Endpoints**: All functional  
✅ **Authentication**: Configured for Replit Auth

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run check` | TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## 🔧 Supervisor Management

The application is managed by supervisor:

```bash
# Check status
supervisorctl status portfolio_app

# Restart application
supervisorctl restart portfolio_app

# View logs
tail -f /var/log/supervisor/portfolio.out.log
tail -f /var/log/supervisor/portfolio.err.log
```

## 📁 Key Files & Directories

```
/app/
├── server/              # Backend code
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── db.ts            # Database config
│   └── storage.ts       # Data layer
├── client/              # Frontend code
│   ├── src/
│   │   ├── pages/       # React pages
│   │   ├── components/  # UI components
│   │   └── hooks/       # Custom hooks
│   └── public/          # Static assets
├── shared/              # Shared types
│   ├── schema.ts        # DB schema
│   └── routes.ts        # API contracts
├── portfolio.db         # SQLite database
└── .env                 # Environment config
```

## 🔌 API Endpoints

All backend endpoints are working:

- **GET** `/api/projects` - List all projects (5 projects)
- **GET** `/api/projects/:id` - Get single project
- **GET** `/api/skills` - List all skills (14 skills)
- **GET** `/api/testimonials` - List testimonials
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/guestbook` - Get guestbook entries
- **POST** `/api/guestbook` - Add entry (requires auth)
- **GET** `/api/login` - Google OAuth login
- **GET** `/api/logout` - Logout

## 🎨 Customization

### Update Personal Info

1. **Hero Section**: Edit `/app/client/src/pages/Home.tsx`
2. **About Page**: Edit `/app/client/src/pages/About.tsx`
3. **Contact Info**: Update email in `Home.tsx` and `Contact.tsx`
4. **Social Links**: Update links in `Navbar.tsx` and `Footer.tsx`

### Add Projects

Edit `/app/server/routes.ts` in the `seedDatabase()` function:

```typescript
await storage.createProject({
  title: "Your Project",
  description: "Description here",
  imageUrl: "https://example.com/image.jpg",
  link: "https://project-url.com",
  tags: ["React", "TypeScript"],
  period: "Q1 2025"
});
```

Then restart the server:
```bash
supervisorctl restart portfolio_app
```

## 🐛 Troubleshooting

### Database Issues
```bash
# Reset database
rm portfolio.db
npm run db:push
```

### Port Conflicts
If port 5000 is busy, update `PORT` in `.env` file

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 🚀 Deployment

### For Production

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

### Vercel Deployment
The `vercel.json` configuration is included for easy Vercel deployment.

## 📝 Notes

- **Database**: Using SQLite for simplicity and portability
- **Authentication**: Configured for Replit Auth (Google OAuth)
- **Hot Reload**: Both frontend and backend support hot reload
- **Session Store**: Uses MemoryStore in development, can use PostgreSQL in production

## ✅ Testing

Test the APIs:

```bash
# Get projects
curl http://localhost:5000/api/projects

# Get skills
curl http://localhost:5000/api/skills

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

## 📞 Support

For issues or questions:
- Email: amannkrmishraa@gmail.com
- GitHub: [@iiamankumar](https://github.com/iiamankumar)

