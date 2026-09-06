# Firman Aprilian Sugiharto — Backend Developer

Personal portfolio of **Firman Aprilian Sugiharto**, focused on backend engineering and building reliable backend systems with Go.

**Portfolio:** https://firman-aprilian.vercel.app  
**GitHub:** https://github.com/shiinobu

## About

This portfolio presents selected backend projects, professional experience, technical focus, and engineering case studies.

The primary focus is:

- Backend development with Go
- REST API design and implementation
- PostgreSQL and MySQL database systems
- Authentication and authorization
- Realtime communication with WebSocket
- Business logic and transactional workflows
- Maintainable backend architecture
- Docker-based development and deployment

Supporting technologies include PHP/Laravel, TypeScript, React/Next.js, JavaScript, GORM, and GitHub Actions.

## Featured Projects

### Device Monitoring System

Realtime device monitoring system built with Go, PostgreSQL, and WebSocket.

Key capabilities include:

- Device registration and management
- Heartbeat processing
- Realtime online/offline status monitoring
- Offline detection and notifications
- Monitoring dashboard and reporting

Repository: https://github.com/shiinobu/device-monitoring-system  
Case study: https://firman-aprilian.vercel.app/projects/device-monitoring-system

### Disbursement API

Backend API focused on transactional business logic, status workflows, validation, and database-driven operations.

Repository: https://github.com/shiinobu/disbursement-api  
Case study: https://firman-aprilian.vercel.app/projects/disbursement-api

### Other Projects

- **Manufacture System API** — Go REST API for manufacturing-related business workflows.
  - https://github.com/shiinobu/manufacture-system-api
- **Tourism Management API** — Laravel/PHP-based project demonstrating broader web application experience.
  - https://github.com/shiinobu/tourism-management-api

## Tech Stack

| Area | Technologies |
| --- | --- |
| Primary language | Go |
| API | REST API |
| Databases | PostgreSQL, MySQL |
| Realtime | WebSocket |
| Authentication | JWT |
| ORM | GORM |
| Infrastructure | Docker |
| CI/CD | GitHub Actions |
| Supporting | PHP/Laravel, TypeScript, React/Next.js, JavaScript |

## Project Structure

```text
firman-portfolio/
├── public/
│   ├── images/
│   ├── projects/
│   └── icons/
├── src/
│   ├── app/
│   ├── components/
│   ├── config/
│   ├── data/
│   ├── lib/
│   └── types/
├── .vscode/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

The application uses the Next.js App Router with TypeScript and Tailwind CSS.

## Getting Started

### Requirements

- Node.js 20.9 or newer
- npm
- Git

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/shiinobu/firman-portfolio.git
cd firman-portfolio
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Lint

Run ESLint before committing changes:

```bash
npm run lint
```

### Production Build

Validate the production build locally:

```bash
npm run build
```

Run the production server after a successful build:

```bash
npm run start
```

The application will be available at `http://localhost:3000`.

## Environment Variables

The current portfolio does not require environment variables for its core functionality.

If environment-dependent features are added in the future, document the required variables here and provide a safe `.env.example` without committing secrets.

## Deployment

The portfolio is intended to be deployed on Vercel.

Production URL:

https://firman-aprilian.vercel.app

For a production deployment, make sure the following checks pass locally:

```bash
npm install
npm run lint
npm run build
```

## SEO

The application includes:

- Page metadata and canonical URL configuration
- Open Graph metadata
- Twitter card metadata
- `sitemap.xml`
- `robots.txt`
- Static project routes generated from project data

## Accessibility

The UI includes accessibility-oriented details such as:

- Skip navigation
- Keyboard-accessible navigation
- Visible focus states
- Semantic page structure
- Responsive touch targets
- Reduced-motion support

## License

This repository is a personal portfolio project. Unless otherwise stated, the source code and portfolio content are not licensed for redistribution or commercial reuse.