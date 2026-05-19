import { Link } from "react-router-dom";
import { ArrowRight, Code2, Database, Cloud, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HolographicCard from "../components/HolographicCard";
import Hero3DText from "../components/Hero3DText";
import StickyScrollSection from "../components/StickyScrollSection";

function ProjectCard({
  project,
  index,
}: {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    highlights: string[];
    gradient?: string;
  };
  index: number;
}) {
  return (
    <Link to={`/projects/${project.id}`} className="block outline-none h-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        className="relative group h-full rounded-[2rem] p-[1.5px] overflow-hidden"
      >
        {/* Animated Gradient Border (Reveals on Hover) */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-purple-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]" />

        {/* Default Static Border */}
        <div className="absolute inset-0 bg-white/10 group-hover:opacity-0 transition-opacity duration-700 rounded-[2rem]" />

        {/* Inner Card Content */}
        <div className="relative h-full bg-slate-950/80 backdrop-blur-3xl rounded-[calc(2rem-1.5px)] p-8 flex flex-col transition-all duration-700 group-hover:bg-slate-950/60">
          {/* Icon Header */}
          <div className="flex items-center justify-between mb-8">
            <div
              className={`w-16 h-16 bg-gradient-to-br ${project.gradient || "from-sky-400 to-emerald-400"} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
            >
              <Code2 className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-white/10 group-hover:rotate-45 transition-all duration-500">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-slate-400 mb-8 leading-relaxed flex-grow text-lg">
            {project.description}
          </p>

          <div className="mb-8">
            <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">
              Key Highlights
            </p>
            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-sm text-slate-300 flex items-start gap-3 group-hover:text-white transition-colors duration-300"
                >
                  <span className="text-sky-400 mt-0.5 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">
                    ✦
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mt-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-black/40 border border-white/5 text-slate-300 rounded-lg text-xs font-medium group-hover:border-white/20 group-hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  const projects = [
    {
      id: "auto-code",
      title: "Auto-Code",
      description:
        "AI-powered multi-language online IDE with real-time collaboration",
      tech: ["Next.js", "TypeScript", "Docker", "GCP", "Convex"],
      highlights: [
        "40% faster page transitions",
        "Real-time backend",
        "90+ Lighthouse score",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "whispr-ai",
      title: "WhisprAI",
      description: "WhatsApp-inspired chat app with AI bot integration",
      tech: ["React", "MongoDB", "Node.js", "OpenAI GPT"],
      highlights: [
        "Real-time messaging",
        "Smart reply suggestions",
        "Personality-based modes",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: "smart-stream",
      title: "SmartStream",
      description: "Netflix clone with AI-powered smart search",
      tech: ["React.js", "Node.js", "OpenAI NLP", "TMDB API"],
      highlights: [
        "Natural language queries",
        "AI recommendations",
        "Dynamic search",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-white/20">
      {/* =========================================
          PHASE 2: 3D INTERACTIVE HERO SECTION 
      ========================================= */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
        {/* 3D Hero Text Canvas */}
        <div className="absolute inset-0 z-10 pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Suspense fallback={null}>
              <Hero3DText />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        {/* Foreground Subtitle & CTA underneath */}
        <div className="relative z-20 mt-auto pb-32 pointer-events-none flex flex-col items-center">
          <motion.div
            initial={{ filter: "blur(12px)", opacity: 0, y: 30 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.6,
            }}
            className="flex flex-col items-center pointer-events-auto"
          >
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8 tracking-wide drop-shadow-lg">
              Full-Stack Engineer
            </p>
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Decorative Dark Gradient Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
      </section>

      {/* =========================================
          PHASE 2: FULL-STACK BENTO GRID SKILLS SECTION 
      ========================================= */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Holographic Background Orbs */}
        <div
          className="absolute top-0 -left-32 w-[600px] h-[600px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-pulse"
          style={{ animationDuration: "14s", animationDelay: "4s" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Technical Arsenal
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              A comprehensive toolkit spanning robust backend architectures,
              dynamic frontend interfaces, and intelligent API integrations.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[200px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {/* Full-Stack - Large Span */}
            <HolographicCard
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Full-Stack Development
                </h3>
                <p className="text-slate-400 mb-6">
                  Architecting robust end-to-end web applications with modern
                  frontend frameworks and scalable Node.js backends.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "TypeScript",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </HolographicCard>

            {/* AI / ML - Vertical Span */}
            <HolographicCard
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:col-span-1 md:row-span-2 p-8 flex flex-col group"
            >
              <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                AI Integration
              </h3>
              <p className="text-slate-400 mb-auto text-sm">
                Leveraging powerful LLMs to build intelligent, context-aware
                user experiences.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                {["Google Gemini API", "Smart Replies", "NLP"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:scale-105 hover:border-fuchsia-400/50 hover:shadow-[0_0_15px_rgba(232,121,249,0.4)] transition-all duration-300 cursor-default text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </HolographicCard>

            {/* Database - Single Block */}
            <HolographicCard
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-violet-400 group-hover:-rotate-12 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "Mongoose", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-white rounded-lg text-xs font-medium hover:scale-105 hover:border-violet-400/50 hover:shadow-[0_0_15px_rgba(167,139,250,0.4)] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </HolographicCard>

            {/* Algorithms - Single Block */}
            <HolographicCard
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Core Logic</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", "C++ / Java"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-white rounded-lg text-xs font-medium hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </HolographicCard>

            {/* DevOps - Wide Horizontal Span */}
            <HolographicCard
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:col-span-2 md:row-span-1 p-6 flex flex-col justify-center group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-fuchsia-400 group-hover:-translate-y-1 transition-transform">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    DevOps & Infrastructure
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS", "CI/CD Pipelines"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:scale-105 hover:border-fuchsia-400/50 hover:shadow-[0_0_15px_rgba(232,121,249,0.4)] transition-all duration-300 cursor-default whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PHASE 3: STICKY-SCROLL CONSTELLATION SKILLS SECTION 
      ========================================= */}
      <StickyScrollSection />

      {/* =========================================
          PHASE 3: AURORA GLASSMORPHISM PROJECTS SECTION 
      ========================================= */}
      <section
        id="projects"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        {/* Animated Aurora Background Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-emerald-400">
                Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A curated selection of my latest work, showcasing complex
              problem-solving, modern tech stacks, and premium user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
