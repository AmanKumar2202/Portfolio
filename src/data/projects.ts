export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  accent: string;
  liveUrl?: string;
  repository?: string;
  stack: string[];
  outcomes: { value: string; label: string }[];
  features: { title: string; description: string }[];
};

export const projects: Project[] = [
  {
    id: "ledger-safe",
    title: "Ledger-Safe",
    eyebrow: "Fintech infrastructure",
    summary: "A concurrency-safe payout engine built to protect balances, prevent duplicate transfers, and make every money movement auditable.",
    description: "I built a production-grade payout platform with an append-only ledger, idempotent APIs, database-level locking, and an asynchronous processing pipeline designed around strict financial invariants.",
    role: "Full-stack engineer",
    year: "2026",
    accent: "orange",
    stack: ["Django", "DRF", "PostgreSQL", "Celery", "React"],
    outcomes: [{ value: "0", label: "Duplicate payouts by design" }, { value: "ACID", label: "Transaction safety" }, { value: "Async", label: "Resilient processing" }],
    features: [
      { title: "Balances you can trust", description: "An append-only ledger and database aggregation preserve a complete audit trail while enforcing strict financial invariants." },
      { title: "Safe under concurrency", description: "Atomic transactions and SELECT FOR UPDATE locks prevent race conditions and double-spending during simultaneous requests." },
      { title: "Reliable payout orchestration", description: "Celery workers, retry logic, and a strict state machine move payouts safely from pending through completion or failure." },
    ],
  },
  {
    id: "auto-code",
    title: "Auto-Code",
    eyebrow: "AI developer platform",
    summary: "A multi-language online IDE with real-time infrastructure, AI-assisted workflows, and noticeably faster navigation.",
    description: "I engineered an AI-powered browser IDE and replaced a traditional MVC data layer with Convex to simplify state, reduce fetch latency, and create a faster real-time development experience.",
    role: "Full-stack engineer",
    year: "2025",
    accent: "blue",
    liveUrl: "https://auto-code-mu.vercel.app/",
    stack: ["Next.js", "TypeScript", "Convex", "Docker", "Google Cloud"],
    outcomes: [{ value: "50%", label: "Lower data-fetch latency" }, { value: "40%", label: "Faster page transitions" }, { value: "30%", label: "Lower time to interactive" }],
    features: [
      { title: "A focused browser workspace", description: "Multi-language editing, live theming, and role-based execution dashboards create a capable IDE without desktop setup." },
      { title: "Real-time by default", description: "Convex synchronizes application data and removes much of the client-side state complexity found in the earlier architecture." },
      { title: "Built to integrate", description: "Serverless infrastructure and webhook support provide a scalable base for AI and execution workflows." },
    ],
  },
  {
    id: "whispr-ai",
    title: "WhisprAI",
    eyebrow: "Real-time communication",
    summary: "A secure MERN messaging platform combining live conversations, presence, media, and extensible AI assistance.",
    description: "I built a production-ready chat application with protected HTTP and WebSocket flows, OTP onboarding, real-time presence, and an integration layer for useful AI communication tools.",
    role: "Full-stack engineer",
    year: "2025",
    accent: "green",
    liveUrl: "https://whisprai-nine.vercel.app/login",
    stack: ["React", "Node.js", "MongoDB", "Socket.IO", "AI APIs"],
    outcomes: [{ value: "Live", label: "Messages and presence" }, { value: "OTP", label: "Verified onboarding" }, { value: "AI", label: "Extensible assistance" }],
    features: [
      { title: "Real-time conversations", description: "Socket.IO powers instant messaging, online presence, typing indicators, and media sharing across active sessions." },
      { title: "Security throughout the stack", description: "JWT auth, protected APIs and sockets, secure cookies, validation, centralized errors, and configurable CORS harden the experience." },
      { title: "AI that fits the workflow", description: "A dedicated integration layer supports smart replies, translation, transcription, and chatbot capabilities without coupling them to core messaging." },
    ],
  },
];

export const getProject = (id?: string) => projects.find((project) => project.id === id);
