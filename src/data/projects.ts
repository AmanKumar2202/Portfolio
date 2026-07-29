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
    id: "whispr-intelligence",
    title: "Whispr Intelligence",
    eyebrow: "Local AI / ML infrastructure",
    summary: "The locally operated intelligence engine behind WhisprAI, combining trained intent classification, specialized agents, structured tools, extractive RAG, and productivity AI.",
    description: "I built a production-oriented FastAPI AI service that classifies twelve intents locally, routes requests through deterministic agents and tools, grounds responses in user-isolated documents, and scales stateless general and RAG workloads independently.",
    role: "AI/ML & backend engineer",
    year: "2026",
    accent: "violet",
    repository: "https://github.com/AmanKumar2202/chatbot-service",
    stack: ["Python", "FastAPI", "scikit-learn", "Chroma", "Redis", "Kubernetes"],
    outcomes: [
      { value: "98.3%", label: "Intent validation accuracy" },
      { value: "233/s", label: "Locally sustained requests" },
      { value: "100", label: "Automated tests passing" },
    ],
    features: [
      {
        title: "Verifiable local intelligence",
        description: "A reproducible TF-IDF training pipeline compares probability-producing classifiers, verifies saved artifacts with hashes, and confidence-gates twelve intent routes.",
      },
      {
        title: "Agents, tools, and grounded knowledge",
        description: "Specialized agents, explicit tool contracts, user-isolated Chroma retrieval, source attribution, and local PageRank summaries power WhisprAI without sending prompts to an external LLM.",
      },
      {
        title: "Production-oriented serving",
        description: "Stateless FastAPI workers, Redis limits, workload-separated deployments, Prometheus telemetry, health probes, Docker, Kubernetes HPA, and k6 assets support measured scaling.",
      },
    ],
  },
  {
    id: "whispr-ai",
    title: "WhisprAI",
    eyebrow: "Messaging + personal AI",
    summary: "A real-time messaging and personal-assistant platform with document intelligence, collaboration tools, selective privacy, and horizontally scalable infrastructure.",
    description: "I engineered a full-stack communication platform that combines direct and group messaging with a streaming AI workspace, RAG document knowledge, productivity tools, Redis-coordinated sockets, and independent background workers.",
    role: "Full-stack engineer",
    year: "2025",
    accent: "green",
    liveUrl: "https://whisprai-nine.vercel.app/login",
    stack: ["React", "Express", "Socket.IO", "MongoDB", "Redis", "BullMQ"],
    outcomes: [
      { value: "50K", label: "Socket load-test target" },
      { value: "1K/s", label: "Message test profile" },
      { value: "6", label: "Integrated product systems" },
    ],
    features: [
      {
        title: "Rich real-time communication",
        description: "Direct and group chat includes presence, typing, reactions, read receipts, search, media, offline recovery, and privacy-aware activity controls.",
      },
      {
        title: "AI throughout the workflow",
        description: "Smart replies and an in-chat writing assistant complement persistent streaming conversations, voice controls, web search, reminders, Calendar actions, RAG documents, summaries, citations, and flashcards.",
      },
      {
        title: "Scale-ready foundations",
        description: "Stateless web replicas, Redis-backed Socket.IO, BullMQ workers, indexed cursor reads, metrics, health probes, and staged k6 scenarios prepare the system for measured scaling.",
      },
    ],
  },
  {
    id: "auto-code",
    title: "CodeForge",
    eyebrow: "Collaborative browser IDE",
    summary: "A secure multi-language coding workspace with controlled execution, ephemeral pairing rooms, and a community for reviewing snippets.",
    description: "I evolved Auto-Code into CodeForge: a production-minded browser IDE where identity, runtime entitlements, transactional quotas, source limits, and audit logging protect code execution while Convex powers live rooms and community workflows.",
    role: "Full-stack engineer",
    year: "2025",
    accent: "blue",
    liveUrl: "https://auto-code-mu.vercel.app/",
    stack: ["Next.js", "TypeScript", "Convex", "Clerk", "Monaco", "Piston"],
    outcomes: [
      { value: "10", label: "Pinned language runtimes" },
      { value: "100", label: "Accessibility and SEO" },
      { value: "60%", label: "Smaller snippet entry bundle" },
    ],
    features: [
      {
        title: "Execution with guardrails",
        description: "A trusted Convex action validates identity, Pro entitlements, pinned runtimes, source size, timeouts, and a transactional ten-runs-per-minute quota before calling Piston.",
      },
      {
        title: "Rooms built for pairing",
        description: "Four-hour collaboration rooms provide debounced code sync, participant presence, shared output, guest viewing, and host-controlled pair or interview modes.",
      },
      {
        title: "A reviewable code community",
        description: "Authenticated snippets, stars, formatted discussions, execution history, sanitization, and ownership checks turn quick experiments into durable technical conversations.",
      },
    ],
  },
];

export const getProject = (id?: string) => projects.find((project) => project.id === id);
