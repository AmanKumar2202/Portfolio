import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accessibility,
  ArrowLeft,
  ArrowUpRight,
  Braces,
  Check,
  Clock3,
  Code2,
  FileCode2,
  Gauge,
  LockKeyhole,
  Play,
  Radio,
  ServerCog,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Float, MeshTransmissionMaterial } from "@react-three/drei";
import MagneticWrapper from "../components/MagneticWrapper";
import SEO from "../components/SEO";
import * as THREE from "three";

const featureGroups = [
  {
    id: "workspace",
    label: "Workspace",
    icon: Code2,
    title: "A focused, multi-language IDE",
    summary:
      "The browser workspace pairs Monaco editing with durable drafts and a controlled execution pipeline.",
    features: [
      "Ten pinned JavaScript, TypeScript, Python, Java, C#, C++, Go, Rust, Ruby and Swift runtimes",
      "Per-language draft persistence when switching runtimes",
      "Multiple Monaco themes plus independent light and dark application themes",
      "Structured compile, runtime, timeout and validation feedback",
      "Authenticated execution history and user statistics",
    ],
  },
  {
    id: "rooms",
    label: "Live rooms",
    icon: Users,
    title: "Pair programming without screen sharing",
    summary:
      "Short-lived rooms turn a solo editor into a reactive workspace for pairing and technical interviews.",
    features: [
      "Six-character room links with automatic four-hour expiry",
      "Code synchronization through 400 ms debounced Convex updates",
      "Presence avatars backed by participant heartbeats",
      "Shared execution output for every connected participant",
      "Pair mode, host-locked interview mode and guest read-only access",
    ],
  },
  {
    id: "community",
    label: "Review",
    icon: Share2,
    title: "Code that can become a conversation",
    summary:
      "Developers can publish reviewable snippets and discuss implementation details without creating a repository.",
    features: [
      "Authenticated snippet publishing with titles and language metadata",
      "Public snippet discovery and personal execution profiles",
      "Starred snippets with duplicate-safe toggle behavior",
      "Formatted discussions with code-block previews",
      "Ownership-checked deletion and one-click code copying",
    ],
  },
  {
    id: "security",
    label: "Trust",
    icon: ShieldCheck,
    title: "Execution is treated as a server capability",
    summary:
      "Identity, entitlement, quotas and resource limits are enforced before untrusted source reaches Piston.",
    features: [
      "Clerk authentication at the Next.js and Convex boundaries",
      "Transactional rolling quota of ten executions per user per minute",
      "Pinned runtimes, 50K-character source limits and bounded output",
      "Compile, run and network timeouts with accepted/rejected audit logs",
      "Sanitized comments, ownership checks and internal-only trusted mutations",
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    icon: Workflow,
    title: "Built beyond the happy path",
    summary:
      "Subscriptions, verification, accessibility and failure states are part of the system rather than demo polish.",
    features: [
      "Signature-verified Clerk and Lemon Squeezy webhooks",
      "Server-enforced Pro runtime entitlements",
      "Error boundaries, custom not-found states and stable loading skeletons",
      "Keyboard-operable selectors and accessible names throughout",
      "Strict linting, type checks, integration tests, CI and pre-commit hooks",
    ],
  },
];

const metrics = [
  {
    value: "10",
    label: "language runtimes",
    detail: "Pinned and server validated",
    icon: Braces,
  },
  {
    value: "4h",
    label: "collaboration rooms",
    detail: "Automatic expiry and cleanup",
    icon: Clock3,
  },
  {
    value: "10/min",
    label: "execution quota",
    detail: "Transactional rolling window",
    icon: Gauge,
  },
  {
    value: "100",
    label: "accessibility & SEO",
    detail: "Measured mobile Lighthouse",
    icon: Accessibility,
  },
];

const engineeringWins = [
  {
    icon: Zap,
    value: "56%",
    title: "Smaller profile entry bundle",
    text: "Route-level splitting reduced initial profile JavaScript from 528 kB to 234 kB.",
  },
  {
    icon: FileCode2,
    value: "60%",
    title: "Smaller snippet entry bundle",
    text: "Lazy-loaded syntax highlighting and comments reduced snippet detail from 496 kB to 196 kB.",
  },
  {
    icon: Radio,
    value: "0.058",
    title: "Measured layout shift",
    text: "Stable authentication and selector placeholders reduced CLS from 0.925 in the mobile audit.",
  },
  {
    icon: LockKeyhole,
    value: "10/10",
    title: "Regression tests passing",
    text: "Coverage includes quotas, rejected audits, subscriptions, stars, sanitization and editor persistence.",
  },
];

const stack = [
  "Next.js 15",
  "TypeScript",
  "React 19",
  "Convex",
  "Clerk",
  "Monaco",
  "Piston",
  "Lemon Squeezy",
  "Vitest",
  "Docker",
];

function FloatingBlocks() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const elapsed = state.clock.getElapsedTime();
    groupRef.current.rotation.y = elapsed * 0.1;
    groupRef.current.rotation.x = Math.sin(elapsed * 0.35) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.3}>
        <Box args={[1.2, 1.2, 1.2]} position={[-1.4, 0.9, -1.5]} rotation={[0.5, 0.5, 0]}>
          <MeshTransmissionMaterial
            color="#f97316"
            transmission={0.9}
            roughness={0.15}
            thickness={1.5}
          />
        </Box>
      </Float>
      <Float speed={1.4} rotationIntensity={1.1} floatIntensity={1}>
        <Box args={[1.55, 1.55, 1.55]} position={[1.7, -0.8, -1]} rotation={[-0.4, 0.2, 0.5]}>
          <MeshTransmissionMaterial
            color="#f59e0b"
            transmission={0.88}
            roughness={0.2}
            thickness={1.3}
          />
        </Box>
      </Float>
    </group>
  );
}

export default function AutoCode() {
  const [activeGroup, setActiveGroup] = useState(featureGroups[0]);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-case project-case-codeforge min-h-screen overflow-hidden bg-stone-950 font-sans text-stone-300 selection:bg-orange-400/25">
      <SEO
        title="CodeForge — Secure browser IDE and collaborative rooms"
        description="A multi-language browser IDE with controlled code execution, reactive collaboration rooms, reviewable snippets, transactional quotas, and production-minded delivery."
      />

      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-orange-400 to-amber-400"
        style={{ scaleX }}
      />

      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="pointer-events-none absolute right-[-12%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 opacity-55 md:right-0">
          <Canvas camera={{ position: [0, 0, 7] }} dpr={[1, 1.5]}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[8, 8, 5]} intensity={1.7} />
            <FloatingBlocks />
          </Canvas>
        </div>
        <div className="pointer-events-none absolute left-[12%] top-[24%] h-80 w-80 rounded-full bg-orange-500/10 blur-[110px]" />

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
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              <Sparkles className="h-5 w-5" />
              Auto-Code, evolved into CodeForge
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl md:text-8xl">
              Code together.
              <span className="block bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text text-transparent">
                Run with guardrails.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-400 md:text-xl">
              A multi-language browser IDE for quick experiments, reviewable snippets,
              pair programming, and technical interviews—with execution security enforced
              on the server.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <MagneticWrapper className="inline-block" intensity={0.16}>
                <a
                  href="https://auto-code-mu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-stone-950 transition-all hover:bg-orange-400"
                >
                  Open live app <ArrowUpRight className="h-5 w-5" />
                </a>
              </MagneticWrapper>
              <span className="inline-flex items-center gap-2 text-sm text-stone-400">
                <ShieldCheck className="h-4 w-4 text-orange-400" />
                Authenticated, quota-controlled execution
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
              className="rounded-lg border border-white/10 bg-stone-900/70 px-3 py-2 text-xs font-semibold text-stone-300"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Product systems</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              More than an editor and a Run button.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-400">
              Explore the workspace, collaboration, community, security, and delivery layers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="CodeForge feature areas">
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
                        ? "border-orange-400/40 bg-orange-400/10 text-white"
                        : "border-white/10 bg-white/[0.025] text-stone-400 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <span className={`rounded-xl p-2 ${active ? "bg-orange-400/15 text-orange-300" : "bg-white/5"}`}>
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
              className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 md:p-10"
            >
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl" />
              <activeGroup.icon className="h-10 w-10 text-orange-400" />
              <h3 className="mt-7 text-3xl font-black text-white">{activeGroup.title}</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-stone-400">{activeGroup.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {activeGroup.features.map((feature) => (
                  <div key={feature} className="flex gap-3 rounded-xl border border-white/[0.07] bg-stone-950/35 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-400/15 text-orange-300">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-stone-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/20 px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Verified capabilities</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Concrete limits. Clear guarantees.
            </h2>
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
                  className="rounded-3xl border border-orange-400/15 bg-orange-400/[0.06] p-6"
                >
                  <Icon className="h-6 w-6 text-orange-400" />
                  <div className="mt-7 text-4xl font-black tracking-tight text-white">{metric.value}</div>
                  <div className="mt-2 font-bold text-orange-300">{metric.label}</div>
                  <div className="mt-1 text-xs text-stone-500">{metric.detail}</div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Measured outcomes</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Faster entry points. Stable interactions.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-stone-400">
              Results from the documented local production build and mobile Lighthouse audit.
            </p>
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
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition-colors hover:border-orange-400/25 hover:bg-white/[0.055]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <strong className="text-3xl font-black text-white">{win.value}</strong>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{win.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone-400">{win.text}</p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-center rounded-[2rem] border border-orange-400/20 bg-gradient-to-r from-orange-500/10 to-amber-500/5 px-6 py-12 text-center">
            <ServerCog className="h-8 w-8 text-orange-400" />
            <h2 className="mt-5 text-3xl font-black text-white">Try the workspace.</h2>
            <p className="mt-3 max-w-xl text-stone-400">
              Write and run code, publish a snippet, or start a room for a live session.
            </p>
            <a
              href="https://auto-code-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-stone-950 transition-transform hover:-translate-y-0.5"
            >
              Launch CodeForge <Play className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
