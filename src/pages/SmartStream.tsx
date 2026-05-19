import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Play,
  CheckCircle2,
  Film,
  Search,
  Sparkles,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Cone,
  Torus,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import MagneticWrapper from "../components/MagneticWrapper";
import * as THREE from "three";

// --- 3D FLOATING PLAY BUTTON FOR HERO ---
const FloatingPlayButton = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.z =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Streaming Ring */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <Torus
          args={[2.2, 0.15, 64, 128]}
          position={[0, 0, 0]}
          rotation={[1.5, 0, 0]}
        >
          <MeshTransmissionMaterial
            color="#f43f5e"
            transmission={0.9}
            roughness={0.2}
            thickness={2}
            clearcoat={1}
          />
        </Torus>
      </Float>
      {/* Central Play Button (Cone rotated 90 degrees) */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
        <Cone
          args={[1.2, 2.5, 64]}
          position={[0.2, 0, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <MeshTransmissionMaterial
            color="#f97316"
            transmission={0.95}
            roughness={0.1}
            thickness={1.5}
            clearcoat={1}
          />
        </Cone>
      </Float>
    </group>
  );
};

export default function SmartStream() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI Semantic Search",
      desc: "Find movies based on mood, plot descriptions, or complex queries using OpenAI's NLP rather than just exact title matches.",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Massive Media Library",
      desc: "Real-time integration with the TMDB API fetching rich metadata, trailers, high-res posters, and cast information.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Dynamic Discovery",
      desc: "Personalized content discovery engine that suggests highly relevant movies and shows based on semantic relationships.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-orange-500/30 text-slate-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-rose-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* =========================================
          HERO SECTION (Dynamic Height)
      ========================================= */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-24 px-6">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <FloatingPlayButton />
          </Canvas>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-rose-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-500/15 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <MagneticWrapper className="inline-block mb-12" intensity={0.2}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </MagneticWrapper>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Play className="w-8 h-8 text-orange-400" />
              <span className="text-orange-400 tracking-widest uppercase font-bold text-sm">
                Case Study
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 max-w-4xl">
              Cinematic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
                Discovery.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              A Netflix-inspired streaming platform featuring an AI-powered
              semantic search engine that understands natural language queries
              for hyper-personalized media discovery.
            </p>

            <MagneticWrapper className="inline-block" intensity={0.2}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white rounded-2xl font-bold transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-105"
              >
                Launch Platform <ExternalLink className="w-5 h-5" />
              </a>
            </MagneticWrapper>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          STICKY SCROLL ARCHITECTURE SECTION
      ========================================= */}
      <section className="py-32 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky Left Column */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Core Architecture
                </h2>
                <p className="text-lg text-slate-400 mb-8">
                  Designed for high-volume media consumption with a seamless,
                  infinite-scrolling interface and sub-second intelligent search
                  indexing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "OpenAI NLP",
                    "TMDB API",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-300 rounded-xl text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrolling Right Column (Cards) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-colors"
                >
                  <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          METRICS & ACHIEVEMENTS BENTO
      ========================================= */}
      <section className="py-32 px-6 relative z-10 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Performance & Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Metric Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2rem] bg-gradient-to-br from-orange-900/40 to-rose-900/20 border border-orange-500/20 backdrop-blur-xl flex flex-col justify-center items-center text-center"
            >
              <div className="text-7xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                &lt;50<span className="text-3xl text-orange-400">ms</span>
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                Search Latency
              </h3>
              <p className="text-slate-400">
                Blazing fast AI semantic query processing delivering instant
                results to the user.
              </p>
            </motion.div>

            {/* Achievements List Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Key Milestones
              </h3>
              <div className="space-y-6">
                {[
                  "Natural language processing for contextual search",
                  "Netflix-grade UI/UX with smooth animations",
                  "Dynamic infinite scrolling for massive datasets",
                  "Intelligent media recommendation pipeline",
                ].map((achievement) => (
                  <div key={achievement} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <p className="text-lg text-slate-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
