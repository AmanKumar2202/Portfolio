import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  BookOpenCheck,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  FileSearch,
  Gauge,
  Github,
  GraduationCap,
  Languages,
  Network,
  ReceiptText,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Wrench,
  Zap,
} from "lucide-react";
import MagneticWrapper from "../components/MagneticWrapper";
import SEO from "../components/SEO";

const featureGroups = [
  {
    id: "ml",
    label: "ML core",
    icon: BrainCircuit,
    title: "A trained, verifiable intent engine",
    summary:
      "A reproducible classical-ML pipeline classifies requests locally and routes them through a confidence-aware response engine.",
    features: [
      "Twelve balanced intents trained from 600 labeled examples",
      "TF-IDF unigram and bigram feature extraction",
      "Logistic Regression compared with calibrated LinearSVC",
      "98.3% held-out validation accuracy on the selected model",
      "Atomic artifacts with dataset, model and vectorizer SHA-256 verification",
      "Confidence gates prevent low-certainty routing from masquerading as knowledge",
    ],
  },
  {
    id: "agents",
    label: "Agents & tools",
    icon: Bot,
    title: "Specialists with structured handoffs",
    summary:
      "Deterministic agents and tool contracts keep useful automation explicit, inspectable, and safe for the calling application.",
    features: [
      "General QA, coding help, formal writing and small-talk agents",
      "Structured meeting, reminder and web-search tool calls",
      "Citation-topic and schedule-availability extraction",
      "Explicit missing-argument reporting and tool-result continuation",
      "Agent overrides with source, confidence and intent metadata",
      "Caller-controlled execution for calendars, search, delivery and citations",
    ],
  },
  {
    id: "knowledge",
    label: "RAG & documents",
    icon: FileSearch,
    title: "Grounded answers without an external LLM",
    summary:
      "Local embeddings, user-isolated retrieval, and extractive ranking turn application-provided text into reusable knowledge.",
    features: [
      "Sentence-transformer embeddings with shared Chroma storage",
      "Hashed per-user collections and document/chunk quotas",
      "Grounded excerpts with filenames and source attribution",
      "TextRank-style summarization using embeddings and PageRank",
      "Up to two million characters and configurable key points",
      "General and RAG workload roles for independent scaling",
    ],
  },
  {
    id: "productivity",
    label: "Productivity AI",
    icon: Sparkles,
    title: "Local intelligence for real workflows",
    summary:
      "Focused analyzers support the features surfaced inside WhisprAI while keeping their boundaries honest.",
    features: [
      "Action items, deadlines, meeting minutes and context catch-up",
      "Definition and TF-IDF cloze flashcards",
      "SymPy equations, arithmetic, derivatives and integrals",
      "Clearly labeled generic essay scaffolds and Socratic prompts",
      "Confidence-scored parsing of OCR-produced receipt text",
      "Offline Argos translation for installed directional language pairs",
    ],
  },
  {
    id: "production",
    label: "Production",
    icon: ServerCog,
    title: "Stateless, observable, and horizontally scalable",
    summary:
      "The service separates compute-heavy knowledge workloads from lightweight routing and carries its limits through every transport.",
    features: [
      "REST, Server-Sent Events and authenticated WebSocket interfaces",
      "Redis-backed per-user HTTP and WebSocket rate limits",
      "Gunicorn/Uvicorn workers with body, concurrency and timeout caps",
      "Prometheus metrics, JSON logs, request IDs and readiness probes",
      "Docker Compose plus Kubernetes HPA for general and RAG deployments",
      "Distributed k6 assets with a 50,000-user validation workload",
    ],
  },
];

const metrics = [
  {
    value: "98.3%",
    label: "validation accuracy",
    detail: "12-intent classifier",
    icon: Gauge,
  },
  {
    value: "100",
    label: "automated tests",
    detail: "Current verified suite",
    icon: TestTube2,
  },
  {
    value: "233/s",
    label: "sustained requests",
    detail: "Local 15-second run",
    icon: Activity,
  },
  {
    value: "1,000",
    label: "request burst",
    detail: "Zero local failures",
    icon: Zap,
  },
];

const capabilities = [
  { icon: Code2, label: "Coding assistance" },
  { icon: Search, label: "Tool routing" },
  { icon: BookOpenCheck, label: "Flashcards" },
  { icon: GraduationCap, label: "Homework help" },
  { icon: ReceiptText, label: "Receipt parsing" },
  { icon: Languages, label: "Offline translation" },
  { icon: FileSearch, label: "Document RAG" },
  { icon: Wrench, label: "Conversation analysis" },
];

const stack = [
  "Python",
  "FastAPI",
  "scikit-learn",
  "Sentence Transformers",
  "Chroma",
  "Redis",
  "NetworkX",
  "SymPy",
  "Argos Translate",
  "Prometheus",
  "Docker",
  "Kubernetes",
];

function IntelligenceMap() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[430px]">
      <div className="absolute inset-8 rounded-full border border-violet-400/15 sm:inset-12" />
      <div className="absolute inset-20 rounded-full border border-violet-400/20 sm:inset-28" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
        <motion.span
          key={angle}
          className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_22px_rgba(167,139,250,.8)]"
          style={{
            x: `calc(-50% + ${Math.cos((angle * Math.PI) / 180) * 150}px)`,
            y: `calc(-50% + ${Math.sin((angle * Math.PI) / 180) * 150}px)`,
          }}
          animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.4, delay: index * 0.16, repeat: Infinity }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-violet-300/30 bg-violet-400/10 text-violet-300 shadow-[0_0_70px_rgba(139,92,246,.2)] backdrop-blur-xl"
        animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrainCircuit className="h-14 w-14" />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
        classify → route → retrieve → respond
      </div>
    </div>
  );
}

export default function ChatbotService() {
  const [activeGroup, setActiveGroup] = useState(featureGroups[0]);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-case project-case-intelligence min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-300 selection:bg-violet-400/25">
      <SEO
        title="Whispr Intelligence — Local AI/ML service"
        description="A locally operated FastAPI intelligence service with trained intent classification, deterministic agents, tool routing, extractive RAG, productivity AI, and production scaling controls."
      />

      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-violet-400 to-fuchsia-400"
        style={{ scaleX }}
      />

      <section className="relative min-h-[92vh] overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="pointer-events-none absolute left-[8%] top-[20%] h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]" />
        <div className="relative z-10 mx-auto grid min-h-[70vh] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <MagneticWrapper className="mb-10 inline-block" intensity={0.16}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" /> Back to projects
              </Link>
            </MagneticWrapper>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
                <BrainCircuit className="h-5 w-5" />
                AI / ML service
              </div>
              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl md:text-8xl">
                Whispr
                <span className="block bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                  Intelligence.
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
                The locally operated AI/ML engine behind WhisprAI—combining trained
                intent classification, specialized agents, structured tools, grounded
                retrieval, and focused productivity intelligence.
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <MagneticWrapper className="inline-block" intensity={0.16}>
                  <a
                    href="https://github.com/AmanKumar2202/chatbot-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-primary-action inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 font-bold text-white transition-all hover:bg-violet-400 sm:w-auto"
                  >
                    <Github className="h-5 w-5" /> View source
                  </a>
                </MagneticWrapper>
                <Link
                  to="/projects/whispr-ai"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/10"
                >
                  Use through WhisprAI <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-slate-500">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                No standalone deployment link—the complete user-facing workflows are integrated into WhisprAI.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="hidden lg:block"
          >
            <IntelligenceMap />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.025] px-4 py-7 sm:px-6 sm:py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-xs font-semibold text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">Intelligence systems</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Local AI with explicit boundaries.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Explore the model, agents, knowledge, productivity, and production layers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="Whispr Intelligence feature areas">
              {featureGroups.map((group) => {
                const Icon = group.icon;
                const active = activeGroup.id === group.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveGroup(group)}
                    className={`flex min-h-20 items-center gap-3 rounded-2xl border px-4 text-left transition-all ${
                      active
                        ? "border-violet-400/40 bg-violet-400/10 text-white"
                        : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <span className={`rounded-xl p-2 ${active ? "bg-violet-400/15 text-violet-300" : "bg-white/5"}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold">{group.label}</span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              role="tabpanel"
              className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 md:p-10"
            >
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />
              <activeGroup.icon className="h-10 w-10 text-violet-400" />
              <h3 className="mt-7 text-3xl font-black text-white">{activeGroup.title}</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">{activeGroup.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {activeGroup.features.map((feature) => (
                  <div key={feature} className="flex gap-3 rounded-xl border border-white/[0.07] bg-slate-950/35 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-400/15 text-violet-300">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/20 px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">Verified outcomes</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Measured, not imagined.
              </h2>
            </div>
            <p className="max-w-2xl leading-relaxed text-slate-400 lg:justify-self-end">
              Performance figures come from the actual FastAPI pipeline on a
              4-core development machine. They are not presented as production-cluster results.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.article
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-3xl border border-violet-400/15 bg-violet-400/[0.06] p-6"
                >
                  <Icon className="h-6 w-6 text-violet-400" />
                  <div className="mt-7 text-4xl font-black tracking-tight text-white">{metric.value}</div>
                  <div className="mt-2 font-bold text-violet-300">{metric.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{metric.detail}</div>
                </motion.article>
              );
            })}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-slate-500">
            The repository also contains Kubernetes and distributed k6 assets that ramp toward
            50,000 virtual users; that figure remains a validation target until the workload passes on the target cluster.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">WhisprAI integration</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              The engine behind the experience.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              WhisprAI handles conversations, identity, files, calendars, reminders, and UI.
              This service supplies the intelligence contracts underneath those workflows.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, label }) => (
              <article key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-400">
                  <Icon className="h-5 w-5" />
                </span>
                <strong className="text-sm text-white">{label}</strong>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/5 px-6 py-12 text-center">
            <Network className="h-8 w-8 text-violet-400" />
            <h2 className="mt-5 text-3xl font-black text-white">Explore both sides of the system.</h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Read the service implementation on GitHub, then see its features inside the WhisprAI product.
            </p>
            <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <a
                href="https://github.com/AmanKumar2202/chatbot-service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                <Github className="h-5 w-5" /> GitHub repository
              </a>
              <Link
                to="/projects/whispr-ai"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                View WhisprAI <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
