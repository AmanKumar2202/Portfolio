# Aman Kumar — Developer Portfolio

A responsive engineering portfolio presenting my backend and full-stack experience, technical capabilities, and production-oriented project case studies.

## Live Portfolio

**[View the deployed portfolio](https://amankumar2202.vercel.app/)**

## Overview

I am Aman Kumar, a backend-focused full-stack developer based in Bengaluru, India. I build secure APIs, real-time applications, AI-enabled services, and scalable data systems with a focus on reliability, performance, and maintainable architecture.

The portfolio goes beyond project summaries by documenting system design decisions, implementation details, security controls, infrastructure, testing, and measurable engineering outcomes.

## Featured Projects

### Whispr Intelligence

A locally operated AI/ML service built with FastAPI, scikit-learn, Sentence Transformers, ChromaDB, and Redis. It combines confidence-gated intent classification, specialized agents, structured tools, user-isolated RAG, extractive summarization, and production-ready observability and deployment assets.

### WhisprAI

A full-stack messaging and personal-assistant platform built with React, Express, Socket.IO, MongoDB, Redis, and BullMQ. It supports rich real-time communication, document intelligence, productivity tools, selective privacy, background processing, and horizontally scalable infrastructure.

### CodeForge

A collaborative browser IDE built with Next.js, TypeScript, Monaco, Convex, Clerk, and Piston. It provides guarded multi-language execution, authenticated history, reviewable community snippets, and short-lived pairing or interview rooms with synchronized code and output.

## Portfolio Features

- Responsive experience across desktop, tablet, and mobile devices
- Dedicated, route-based engineering case studies
- Fully clickable and keyboard-accessible project cards
- Light and dark themes with persistent user preference
- Embedded résumé viewer with direct viewing and download actions
- Framer Motion page and interaction animations
- Per-page SEO metadata through React Helmet Async
- Personalized transparent favicon and consistent visual identity
- Reusable components and data-driven project content

## Technology Stack

| Area | Technologies |
| --- | --- |
| Application | React 18, TypeScript, React Router |
| Styling | Custom CSS, responsive layouts, theme variables |
| Motion and visuals | Framer Motion, Three.js, React Three Fiber, Drei |
| UI assets | Lucide React |
| SEO | React Helmet Async |
| Tooling | Vite, ESLint, TypeScript |
| Deployment | Vercel |

## Project Structure

```text
.
├── public/                 Static assets and favicon
├── src/
│   ├── components/        Navigation, SEO, résumé, and reusable UI
│   ├── data/              Structured project and case-study content
│   ├── pages/             Home and project case-study pages
│   ├── App.tsx            Routing and shared application layout
│   ├── index.css          Themes, components, and responsive styles
│   └── main.tsx           React application entry point
├── index.html             Document metadata and application mount
├── package.json           Dependencies and development scripts
└── vite.config.ts         Vite configuration
```

## Running Locally

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/AmanKumar2202/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run typecheck` | Validate TypeScript without emitting files |

## Production Build

```bash
npm run typecheck
npm run lint
npm run build
```

The generated production assets are written to `dist/`.

## Contact

- **Portfolio:** [amankumar2202.vercel.app](https://amankumar2202.vercel.app/)
- **Email:** [amankumar220203@gmail.com](mailto:amankumar220203@gmail.com)
- **LinkedIn:** [linkedin.com/in/aman-kumar-a402a7229](https://www.linkedin.com/in/aman-kumar-a402a7229/)
- **GitHub:** [github.com/AmanKumar2202](https://github.com/AmanKumar2202)

---

Designed and developed by Aman Kumar.
