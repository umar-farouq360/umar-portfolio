# Umar Farouq — Portfolio

A full-stack personal portfolio for presenting selected projects, sharing technical work, and managing portfolio content through a private admin area.

**Live site:** [umar-farouq.up.railway.app](https://umar-farouq.up.railway.app)

## Overview

This project was built independently as a full-stack application. It combines a responsive React frontend with an Express API and a PostgreSQL-backed content layer. Redis supports request deduplication and related server-side coordination.

The public site presents an introduction, toolkit, selected projects, and contact information. The protected admin area supports project management and visitor analytics.

## Features

- Responsive portfolio with project listing and individual project pages.
- Admin authentication using JWTs delivered through secure HTTP cookies.
- Admin project management: create, update, delete, feature, publish, and reorder projects.
- Visitor analytics with page-view tracking and an admin statistics view.
- PostgreSQL persistence through Drizzle ORM.
- Redis integration for server-side coordination and deduplication.
- Input validation, rate limiting, security headers, and structured API error handling.
- Light/dark appearance controls and motion-enhanced interface.

## Technology

| Area | Tools |
|---|---|
| Frontend | React, TypeScript, Vite, React Router |
| UI | Tailwind CSS, Radix UI, shadcn-style components, Framer Motion, Lucide |
| State and charts | Zustand, TanStack-style data patterns, Recharts |
| Backend | Node.js, Express, TypeScript |
| Authentication | JWT, bcryptjs, HTTP-only cookies |
| Database | PostgreSQL, Drizzle ORM |
| Cache / coordination | Redis, ioredis |
| Validation and security | Zod, Helmet, express-rate-limit |
| Infrastructure | Docker Compose, pnpm workspaces |

## Repository Structure

```text
.
├── client/                 # React + Vite frontend
├── server/                 # Express API
├── docs/                   # Project documentation
├── docker-compose.yml      # Local PostgreSQL and Redis
├── docker-compose.prod.yml # Production container setup
├── pnpm-workspace.yaml
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- pnpm 10 (the repository pins pnpm 10.29.3)
- Docker and Docker Compose

Enable Corepack and install dependencies:

```bash
corepack enable
pnpm install
```

### 1. Configure environment variables

Create the local environment files:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env.local
```

Update `server/.env` with your local configuration. In particular, set a strong `JWT_SECRET`, an `ADMIN_USERNAME`, a bcrypt `ADMIN_PASSWORD_HASH`, and an `ANALYTICS_SALT`. The example file contains local PostgreSQL and Redis connection strings that match the supplied Docker Compose configuration.

Generate an admin password hash with:

```bash
pnpm hash-password
```

Copy the generated hash into `ADMIN_PASSWORD_HASH` in `server/.env`. Do not commit local environment files or production secrets.

### 2. Start PostgreSQL and Redis

From the repository root:

```bash
docker compose up -d
```

The development compose file exposes PostgreSQL on port `5433` and Redis on port `6380`.

### 3. Apply database migrations and seed data

```bash
pnpm db:migrate
pnpm db:seed
```

### 4. Start the application

Run the API and frontend in separate terminals:

```bash
pnpm dev:server
```

```bash
pnpm dev:client
```

Open the frontend at the Vite development URL printed in the terminal. The API listens on port `5000` by default.

## Useful Commands

| Command | Description |
|---|---|
| `pnpm dev:server` | Start the Express API in watch mode |
| `pnpm dev:client` | Start the Vite development server |
| `pnpm build` | Build all workspace packages |
| `pnpm typecheck` | Run TypeScript checks |
| `pnpm lint` | Lint the frontend |
| `pnpm db:generate` | Generate Drizzle migrations |
| `pnpm db:migrate` | Apply database migrations |
| `pnpm db:seed` | Seed the database |
| `pnpm db:studio` | Open Drizzle Studio |

> **Testing note:** A root `pnpm test` script is not configured yet.

## Deployment

The repository includes Docker Compose configuration for production deployment and a Vercel configuration for the frontend. Production deployment requires correctly configured environment variables, persistent PostgreSQL and Redis services, and a trusted reverse-proxy configuration. Never reuse the development credentials shown in the example files.

## Author

**Umar Farouq Ibrahim** — Software Developer & Product Builder

- Portfolio: [umar-farouq.up.railway.app](https://umar-farouq.up.railway.app)
- GitHub: [@umar-farouq360](https://github.com/umar-farouq360)
- LinkedIn: [Umar Farouq Ibrahim](https://www.linkedin.com/in/umar-farouq-ibrahim-7b861a44a)
- Email: [umarfarouqibrahim360@gmail.com](mailto:umarfarouqibrahim360@gmail.com)
