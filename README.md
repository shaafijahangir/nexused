# NexusEd - AI-Native Learning Management System

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

NexusEd is a next-generation, AI-native Learning Management System designed to replace fragmented educational technology stacks with a unified platform. Unlike legacy LMS platforms where AI is bolted on as an afterthought, NexusEd embeds AI throughout the entire user experience.

## 🌟 Core Features

- **AI-Native Architecture**: AI woven into every feature, not a separate add-on
- **Multi-Tenant SaaS**: Schema-per-tenant with PostgreSQL Row-Level Security
- **Unified Platform**: SIS + LMS + Payments + Messaging in one product
- **Role-Based Access**: Student, Instructor, Parent, Admin, and TA roles
- **Real-time Updates**: WebSocket-based live updates and notifications
- **Mobile-First Design**: Responsive UI designed for phones first

## 🏗️ Architecture

### Technology Stack

#### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **TanStack Query** - Data fetching and caching
- **Zustand** - State management
- **GraphQL (Apollo Client)** - API communication

#### Backend
- **NestJS** - Modular Node.js framework
- **TypeScript** - Type-safe backend
- **GraphQL (Apollo Server)** - Primary API
- **PostgreSQL 16** - Primary database with RLS
- **TypeORM** - Database ORM
- **BullMQ** - Job queue processing
- **Socket.IO** - Real-time communication
- **Passport.js** - Authentication

#### AI & Services
- **Claude API (Anthropic)** - Primary LLM
- **OpenAI API** - Fallback LLM
- **Redis** - Caching and session storage

## 📁 Project Structure

```
nexused/
├── nexused-frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/              # Next.js 15 App Router
│   │   │   ├── (auth)/       # Authentication routes
│   │   │   ├── (dashboard)/  # Dashboard routes (role-based)
│   │   │   │   ├── student/
│   │   │   │   ├── instructor/
│   │   │   │   ├── parent/
│   │   │   │   └── admin/
│   │   │   └── course/       # Course-specific routes
│   │   ├── components/       # React components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── dashboard/
│   │   │   ├── course/
│   │   │   └── ai/
│   │   ├── lib/             # Utilities and helpers
│   │   └── types/           # TypeScript types
│   └── package.json
│
└── nexused-backend/          # NestJS backend application
    ├── src/
    │   ├── modules/         # Feature modules
    │   │   ├── auth/
    │   │   ├── users/
    │   │   ├── tenants/
    │   │   ├── courses/
    │   │   ├── enrollments/
    │   │   ├── assignments/
    │   │   ├── gradebook/
    │   │   ├── messaging/
    │   │   ├── announcements/
    │   │   └── ai/
    │   ├── database/        # Database entities and migrations
    │   │   └── entities/
    │   ├── config/          # Configuration files
    │   ├── guards/          # Auth guards
    │   └── decorators/      # Custom decorators
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 22+)
- **npm** 10+
- **PostgreSQL** 16+
- **Redis** (optional, for caching and queues)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nexused
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd nexused-frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../nexused-backend
   npm install
   ```

4. **Configure Environment Variables**

   Backend:
   ```bash
   cd nexused-backend
   cp .env.example .env
   # Edit .env with your database credentials and API keys
   ```

5. **Set Up Database**
   ```bash
   # Create PostgreSQL database
   createdb nexused

   # The database schema will be automatically created on first run
   # (synchronize: true in development)
   ```

### Running the Application

#### Development Mode

**Terminal 1 - Backend:**
```bash
cd nexused-backend
npm run start:dev
```
Backend will run on http://localhost:3001/api

**Terminal 2 - Frontend:**
```bash
cd nexused-frontend
npm run dev
```
Frontend will run on http://localhost:3000

#### Production Build

**Backend:**
```bash
cd nexused-backend
npm run build
npm run start:prod
```

**Frontend:**
```bash
cd nexused-frontend
npm run build
npm run start
```

## 🗄️ Database Schema

### Core Entities

- **Tenants** - Multi-tenant institutions
- **Users** - Students, instructors, admins, parents
- **Academic Terms** - Semesters/terms
- **Courses** - Course catalog
- **Course Sections** - Specific course instances
- **Enrollments** - Student-section relationships
- **Assignments** - Course assignments
- **Submissions** - Student assignment submissions

### Multi-Tenancy

NexusEd uses a **schema-per-tenant** approach:
- Each institution gets its own PostgreSQL schema
- PostgreSQL Row-Level Security (RLS) provides defense-in-depth
- Shared infrastructure for operational efficiency

## 🔐 Authentication & Authorization

### Supported Methods
- Email/Password
- Google OAuth 2.0
- SAML 2.0 (planned)
- LTI 1.3 (planned)

### Roles
- **Student** - Access courses, submit assignments, view grades
- **Instructor** - Manage courses, grade assignments, view analytics
- **Admin** - Manage users, courses, system settings
- **Parent** - View child's progress, communicate with teachers
- **TA** - Assist instructors with grading and support

## 🤖 AI Features

### Current (MVP)
- **AI Course Planner** - Analyzes prerequisites and recommends courses
- **Study Coach** - Socratic tutoring without giving direct answers

### Planned
- **Content Generation** - Auto-generate quizzes from course materials
- **At-Risk Detection** - Predictive alerts for struggling students
- **Feedback Copilot** - Suggested rubric comments
- **Policy Assistant** - RAG-powered policy Q&A

### AI Guardrails
- Socratic method enforcement (no direct homework answers)
- PII protection before external API calls
- Scope limitation to enrolled courses
- Rate limiting (50 interactions/day per student)
- Human review flags for suspicious interactions

## 📊 GraphQL API

GraphQL Playground available at: http://localhost:3001/api/graphql

### Example Query
```graphql
query GetUser {
  user(id: "user-id") {
    id
    email
    firstName
    lastName
    roles
  }
}
```

## 🧪 Testing

```bash
# Backend unit tests
cd nexused-backend
npm run test

# Backend e2e tests
npm run test:e2e

# Frontend tests (coming soon)
cd nexused-frontend
npm run test
```

## 📝 Development Roadmap

### Phase 1: Foundation ✅
- [x] Project scaffolding
- [x] Authentication system
- [x] Multi-tenant foundation
- [x] Core database schema
- [x] Base UI components
- [x] GraphQL API setup

### Phase 2: Core LMS (In Progress)
- [ ] Course management
- [ ] Content viewer
- [ ] Assignment system
- [ ] Gradebook
- [ ] Student dashboard
- [ ] Instructor dashboard

### Phase 3: AI & Communication
- [ ] AI Course Planner
- [ ] AI infrastructure
- [ ] Messaging system
- [ ] Announcements
- [ ] Notification center
- [ ] Mobile optimization

### Future Phases
- [ ] SpeedGrader & quizzes
- [ ] AI tutor & content generation
- [ ] Payment processing (Stripe)
- [ ] LTI integrations
- [ ] Advanced analytics
- [ ] Degree audit system

## 🛠️ Development Tools

### Recommended VS Code Extensions
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- GraphQL: Language Feature Support
- PostgreSQL (by Chris Kolkman)

### Code Style
- **TypeScript** for all code
- **ESLint** for linting
- **Prettier** for formatting (configured in both projects)
- **Conventional Commits** for commit messages

## 🔒 Security & Compliance

- **FERPA Compliance** - Student data protection
- **WCAG 2.1 AA** - Accessibility standards
- **SOC 2 Type II** - Target certification
- **Data Encryption** - AES-256 at rest, TLS 1.3 in transit
- **Row-Level Security** - PostgreSQL RLS for tenant isolation

## 📖 Documentation

- [Product Requirements Document](docs/PRD.md)
- [API Documentation](docs/API.md) (coming soon)
- [Deployment Guide](docs/DEPLOYMENT.md) (coming soon)
- [Contributing Guidelines](CONTRIBUTING.md) (coming soon)

## 🤝 Contributing

This is a private project currently under active development. Contribution guidelines will be published when the project reaches beta.

## 📄 License

Copyright © 2024 NexusEd. All rights reserved.

## 📧 Support

For questions or support, please contact the development team.

---

**Built with ❤️ using Next.js, NestJS, and Claude AI**
