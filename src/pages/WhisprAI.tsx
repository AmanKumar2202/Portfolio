import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CloudCog,
  FileSearch,
  Gauge,
  GraduationCap,
  LockKeyhole,
  MessageCircleMore,
  Network,
  Radio,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Sphere, Torus } from "@react-three/drei";
import MagneticWrapper from "../components/MagneticWrapper";
import SEO from "../components/SEO";
import * as THREE from "three";

const featureGroups = [
  {
    id: "messaging",
    label: "Messaging",
    icon: MessageCircleMore,
    title: "Conversations that feel immediate",
    summary: "Direct and group communication designed to remain fluid across reconnects and long histories.",
    features: [
      "Live messages, presence, last seen and typing indicators",
      "Reactions, read receipts and conversation search",
      "Image sharing with signed Cloudinary uploads",
      "AI smart replies plus in-chat drafting and summarization",
      "Offline outbox, reconnect handling and cursor pagination",
      "Virtualized histories and reduced-motion support",
    ],
  },
  {
    id: "assistant",
    label: "Personal AI",
    icon: BrainCircuit,
    title: "A persistent, tool-using assistant",
    summary: "An AI workspace with streaming answers, retained context and useful actions beyond chat.",
    features: [
      "Automatic, coding, formal-writing and general modes",
      "Streaming Markdown with syntax highlighting",
      "Persistent conversations with rename, search and deletion",
      "Voice input, text-to-speech, copy and regenerate controls",
      "Web search, reminders and Google Calendar booking",
      "Source, confidence and tool-call context on AI responses",
      "Redis memory, daily quotas and hourly tool limits",
    ],
  },
  {
    id: "knowledge",
    label: "Knowledge",
    icon: FileSearch,
    title: "Documents become reusable context",
    summary: "Knowledge uploads are processed off the request path and turned into grounded assistant context.",
    features: [
      "PDF, DOCX and TXT knowledge uploads",
      "Background extraction, RAG indexing and bounded retries",
      "Persisted summaries and key points",
      "Real-time indexing success and failure updates",
      "Persistent flashcard decks and academic citation search",
    ],
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Users,
    title: "AI assistance inside group work",
    summary: "Structured collaboration tools turn active conversations into decisions, plans and shared outcomes.",
    features: [
      "Action-item and smart-deadline extraction",
      "Persisted meeting minutes and catch-up summaries",
      "Availability matching with calendar handoff",
      "Receipt OCR with editable line items",
      "Multi-member bill splitting with proportional tax and tip",
    ],
  },
  {
    id: "productivity",
    label: "Productivity",
    icon: GraduationCap,
    title: "Practical tools for daily work",
    summary: "Focused utilities cover studying, writing, translation and attention management.",
    features: [
      "Math and essay homework guidance",
      "Editable email drafts with copy and mail actions",
      "Inline translation and speech playback",
      "Focus Guard with overnight schedule support",
      "Reminders and in-app notification history",
    ],
  },
  {
    id: "trust",
    label: "Trust & scale",
    icon: ShieldCheck,
    title: "Privacy and operations by design",
    summary: "Authentication, selective visibility and production controls are built through the stack.",
    features: [
      "OTP onboarding, password login and Google OAuth",
      "HTTP-only JWT sessions and encrypted Calendar tokens",
      "Per-user read receipt, online and last-seen privacy",
      "Rate limits, validation, CSRF and origin protection",
      "Admin analytics, Prometheus metrics and health probes",
    ],
  },
];

const capacityProfiles = [
  {
    value: "50K",
    label: "socket connections",
    detail: "Configured WebSocket ramp",
    icon: Radio,
  },
  {
    value: "1K/s",
    label: "message requests",
    detail: "Configured k6 arrival rate",
    icon: MessageCircleMore,
  },
  {
    value: "100/s",
    label: "assistant requests",
    detail: "Configured k6 arrival rate",
    icon: Bot,
  },
];

const engineeringWins = [
  {
    icon: Network,
    title: "Horizontal by design",
    text: "Stateless web replicas and a Redis Socket.IO adapter keep live sessions coordinated across instances.",
  },
  {
    icon: Workflow,
    title: "Heavy work is isolated",
    text: "BullMQ workers handle document, reminder and tool jobs with retries, backpressure and graceful failure.",
  },
  {
    icon: Gauge,
    title: "Hot paths are optimized",
    text: "Indexed conversation keys, projections, cursor pagination and precomputed summaries reduce database work.",
  },
  {
    icon: CloudCog,
    title: "Ready to operate",
    text: "Health probes, structured logs, request IDs, Prometheus metrics and multi-replica deployment guidance support production use.",
  },
];

const stack = [
  "React 19",
  "Express",
  "Socket.IO",
  "MongoDB",
  "Redis",
  "BullMQ",
  "Zustand",
  "TanStack Query",
  "Cloudinary",
  "Docker",
];

function FloatingSignal() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const elapsed = state.clock.getElapsedTime();
    groupRef.current.rotation.y = elapsed * 0.12;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.4) * 0.16;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <Torus args={[1.8, 0.25, 48, 96]} rotation={[1, 0.45, 0]}>
          <MeshTransmissionMaterial
            color="#10b981"
            transmission={0.94}
            roughness={0.12}
            thickness={1.4}
          />
        </Torus>
      </Float>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={0.8}>
        <Sphere args={[0.72, 48, 48]}>
          <MeshTransmissionMaterial
            color="#2dd4bf"
            transmission={0.88}
            roughness={0.25}
            thickness={1.2}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function WhisprAI() {
  const [activeGroup, setActiveGroup] = useState(featureGroups[0]);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-case project-case-whispr min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-300 selection:bg-emerald-400/25">
      <SEO
        title="WhisprAI — Real-time messaging and personal AI"
        description="A production-minded messaging and personal-assistant platform built with React, Express, Socket.IO, MongoDB, Redis and BullMQ."
      />

      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-emerald-400 to-teal-500"
        style={{ scaleX }}
      />

      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 opacity-60 md:right-0">
          <Canvas camera={{ position: [0, 0, 7] }} dpr={[1, 1.5]}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[8, 8, 5]} intensity={1.8} />
            <FloatingSignal />
          </Canvas>
        </div>
        <div className="pointer-events-none absolute left-[15%] top-[25%] h-80 w-80 rounded-full bg-emerald-500/10 blur-[110px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <MagneticWrapper className="mb-12 inline-block" intensity={0.16}>
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
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              <Sparkles className="h-5 w-5" />
              Full-stack case study
            </div>
            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl md:text-8xl">
              Messaging,
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-500 bg-clip-text text-transparent">
                made useful.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              WhisprAI combines real-time direct and group chat with a persistent AI assistant,
              document intelligence, collaboration tools and production-minded infrastructure.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <MagneticWrapper className="inline-block" intensity={0.16}>
                <a
                  href="https://whisprai-nine.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-slate-950 transition-all hover:bg-emerald-400"
                >
                  Open live app <ArrowUpRight className="h-5 w-5" />
                </a>
              </MagneticWrapper>
              <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                <LockKeyhole className="h-4 w-4 text-emerald-400" />
                OTP, password or Google sign-in
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.025] px-4 py-7 sm:px-6 sm:py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/10 bg-slate-900/70 px-3 py-2 text-xs font-semibold text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">Product depth</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              One platform, six focused systems.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Explore the implemented feature areas without wading through a wall of specifications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div
              className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1"
              role="tablist"
              aria-label="WhisprAI feature areas"
            >
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
                    className={`group flex min-h-20 items-center gap-3 rounded-2xl border px-4 text-left transition-all ${
                      active
                        ? "border-emerald-400/40 bg-emerald-400/10 text-white"
                        : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <span className={`rounded-xl p-2 ${active ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5"}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold">{group.label}</span>
                    <ChevronRight className={`ml-auto hidden h-4 w-4 lg:block ${active ? "text-emerald-300" : "opacity-0 group-hover:opacity-60"}`} />
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
              className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 md:p-10"
            >
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />
              <activeGroup.icon className="h-10 w-10 text-emerald-400" />
              <h3 className="mt-7 text-3xl font-black text-white">{activeGroup.title}</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">{activeGroup.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {activeGroup.features.map((feature) => (
                  <div key={feature} className="flex gap-3 rounded-xl border border-white/[0.07] bg-slate-950/35 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
              {(activeGroup.id === "assistant" || activeGroup.id === "knowledge" || activeGroup.id === "collaboration") && (
                <p className="mt-6 text-xs leading-relaxed text-slate-500">
                  Application flows, persistence, and integration contracts are implemented;
                  generated results depend on the separately deployed companion AI service.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/20 px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">Scale engineering</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Built to test the hard parts.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-400 lg:justify-self-end">
              The repository includes staged k6 profiles for the workloads below. These are
              engineering targets—not claimed production benchmarks—and require validation on
              production-sized infrastructure.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {capacityProfiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <motion.article
                  key={profile.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.06] p-7"
                >
                  <Icon className="h-6 w-6 text-emerald-400" />
                  <div className="mt-8 text-5xl font-black tracking-tight text-white">{profile.value}</div>
                  <div className="mt-2 font-bold text-emerald-300">{profile.label}</div>
                  <div className="mt-1 text-sm text-slate-500">{profile.detail}</div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">Engineering outcomes</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Production thinking, end to end.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {engineeringWins.map((win, index) => {
              const Icon = win.icon;
              return (
                <motion.article
                  key={win.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ delay: index * 0.06 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-colors hover:border-emerald-400/25 hover:bg-white/[0.055]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400 transition-transform group-hover:-translate-y-1">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{win.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{win.text}</p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-center rounded-[2rem] border border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 px-6 py-12 text-center">
            <ReceiptText className="h-8 w-8 text-emerald-400" />
            <h2 className="mt-5 text-3xl font-black text-white">See the complete experience.</h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Explore live messaging, the personal AI workspace and the collaboration toolkit.
            </p>
            <a
              href="https://whisprai-nine.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Launch WhisprAI <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
