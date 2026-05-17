import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink, Cpu, CheckCircle2, MessageSquare, Sparkles, Lock } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Torus, Sphere, MeshTransmissionMaterial } from "@react-three/drei";
import MagneticWrapper from "../components/MagneticWrapper";
import * as THREE from "three";

// --- 3D FLOATING AI BRAIN FOR HERO ---
const FloatingBrain = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Ring */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Torus args={[1.8, 0.4, 64, 128]} position={[0, 0, 0]} rotation={[1, 0.5, 0]}>
          <MeshTransmissionMaterial color="#10b981" transmission={0.95} roughness={0.1} thickness={2} clearcoat={1} />
        </Torus>
      </Float>
      {/* Inner Core */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.8, 64, 64]} position={[0, 0, 0]}>
          <MeshTransmissionMaterial color="#2dd4bf" transmission={0.9} roughness={0.3} thickness={1.5} clearcoat={1} />
        </Sphere>
      </Float>
    </group>
  );
};

export default function WhisprAI() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: <MessageSquare className="w-8 h-8" />, title: "Real-Time Messaging", desc: "Instant message delivery with WebSocket technology for seamless, lag-free communication across all devices." },
    { icon: <Sparkles className="w-8 h-8" />, title: "AI-Powered Bot", desc: "Intelligent bot that mimics human conversational style with context-aware smart reply suggestions." },
    { icon: <Lock className="w-8 h-8" />, title: "Secure Authentication", desc: "MongoDB-powered secure authentication with real-time data synchronization and absolute privacy." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 text-slate-300">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* =========================================
          HERO SECTION (100vh)
      ========================================= */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20 px-6">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <FloatingBrain />
          </Canvas>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <MagneticWrapper className="inline-block mb-12" intensity={0.2}>
            <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </MagneticWrapper>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-emerald-400" />
              <span className="text-emerald-400 tracking-widest uppercase font-bold text-sm">Case Study</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 max-w-4xl">
              Intelligent <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Conversations.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              A WhatsApp-inspired chat application integrated with an AI bot that mimics human conversational style, featuring real-time messaging and personality-based chat modes.
            </p>

            <MagneticWrapper className="inline-block" intensity={0.2}>
              <a href="https://whisprai-nine.vercel.app/login" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105">
                Launch Application <ExternalLink className="w-5 h-5" />
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
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Core Architecture</h2>
                <p className="text-lg text-slate-400 mb-8">
                  Engineered for absolute zero-latency communication while processing complex NLP models in real-time.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "MongoDB", "Node.js", "OpenAI GPT", "Tailwind CSS", "WebSockets"].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-xl text-sm font-semibold">
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
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed">{feature.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Capabilities & Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* AI Modes Metric Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="p-10 rounded-[2rem] bg-gradient-to-br from-emerald-900/40 to-teal-900/20 border border-emerald-500/20 backdrop-blur-xl flex flex-col justify-center items-center text-center"
            >
              <div className="text-7xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                4x
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Personality Modes</h3>
              <p className="text-slate-400">Dynamic AI shifts between Professional, Casual, Creative, and Technical tones seamlessly.</p>
            </motion.div>

            {/* Achievements List Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Key Milestones</h3>
              <div className="space-y-6">
                {[
                  "Real-time messaging with instant delivery",
                  "Smart reply suggestions powered by OpenAI GPT",
                  "Human-like conversational AI bot integration",
                  "Intuitive WhatsApp-inspired interface"
                ].map(achievement => (
                  <div key={achievement} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
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