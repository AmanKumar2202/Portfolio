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
    id: "auto-code",
    title: "Auto-Code",
    eyebrow: "Developer platform",
    summary: "A browser-based coding environment built for fast, focused development.",
    description: "I designed and built a multi-language online IDE with real-time data, cloud execution, and a responsive workspace that feels at home in the browser.",
    role: "Full-stack engineer",
    year: "2025",
    accent: "blue",
    liveUrl: "https://auto-code-mu.vercel.app/",
    stack: ["Next.js", "TypeScript", "Convex", "Docker", "Google Cloud"],
    outcomes: [{ value: "90+", label: "Lighthouse score" }, { value: "40%", label: "Faster navigation" }, { value: "30%", label: "Lower time to interactive" }],
    features: [
      { title: "A workspace that stays out of the way", description: "A responsive editor experience with sensible hierarchy, theming, and quick navigation." },
      { title: "Real-time by default", description: "Convex keeps project data synchronized without brittle client-side state plumbing." },
      { title: "Portable execution", description: "Containerized services make language execution predictable across local and cloud environments." },
    ],
  },
  {
    id: "whispr-ai",
    title: "WhisprAI",
    eyebrow: "AI communication",
    summary: "Real-time messaging with context-aware AI assistance built into the conversation.",
    description: "A familiar messaging experience enhanced with AI replies and adjustable conversation styles, designed to keep the technology useful without making it intrusive.",
    role: "Full-stack engineer",
    year: "2025",
    accent: "green",
    liveUrl: "https://whisprai-nine.vercel.app/login",
    stack: ["React", "Node.js", "MongoDB", "WebSockets", "OpenAI API"],
    outcomes: [{ value: "4", label: "Conversation modes" }, { value: "Live", label: "Message delivery" }, { value: "AI", label: "Contextual replies" }],
    features: [
      { title: "Instant conversations", description: "WebSocket-based delivery makes messages feel immediate across active sessions." },
      { title: "Useful AI, in context", description: "Suggested replies respond to the current conversation instead of acting like a separate chatbot." },
      { title: "Familiar interaction patterns", description: "A deliberately recognizable interface reduces the learning curve for first-time users." },
    ],
  },
  {
    id: "smart-stream",
    title: "SmartStream",
    eyebrow: "Media discovery",
    summary: "A streaming discovery experience that understands intent, mood, and natural language.",
    description: "A media browser that combines TMDB's catalogue with semantic search so people can discover something to watch without knowing an exact title.",
    role: "Frontend & AI engineer",
    year: "2025",
    accent: "orange",
    stack: ["React", "Node.js", "OpenAI API", "TMDB API", "Tailwind CSS"],
    outcomes: [{ value: "NLP", label: "Intent-based search" }, { value: "TMDB", label: "Live catalogue" }, { value: "∞", label: "Continuous discovery" }],
    features: [
      { title: "Search the way you think", description: "Natural-language queries work for moods, themes, plots, and combinations of preferences." },
      { title: "Rich catalogue data", description: "Live metadata, artwork, cast information, and trailers are composed into a clear browsing experience." },
      { title: "Designed for discovery", description: "Progressive loading and relevant recommendations encourage exploration without overwhelming users." },
    ],
  },
];

export const getProject = (id?: string) => projects.find((project) => project.id === id);
