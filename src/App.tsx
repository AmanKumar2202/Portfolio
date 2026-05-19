import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useScroll, useSpring } from "framer-motion";
import { PerformanceMonitor } from "@react-three/drei";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AutoCode from "./pages/AutoCode";
import WhisprAI from "./pages/WhisprAI";
import SmartStream from "./pages/SmartStream";
import GalaxyBackground from "./components/GalaxyBackground";

function App() {
  // Track viewport scroll progress (0 to 1) and apply a smooth cinematic spring
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });

  // State to gracefully degrade pixel ratio on low-end devices
  const [dpr, setDpr] = useState(1.5);

  return (
    <Router>
      {/* FIXED 3D BACKGROUND CANVAS */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Canvas dpr={[1, dpr]}>
          <PerformanceMonitor
            onIncline={() => setDpr(1.5)}
            onDecline={() => setDpr(1)}
          />
          <Suspense fallback={null}>
            <GalaxyBackground scrollProgress={smoothScroll} />
          </Suspense>
        </Canvas>
      </div>

      <div className="flex flex-col min-h-screen">
        <Navigation />

        {/* THE CURTAIN (Main Content) 
            bg-transparent is used here to allow the Living GLSL Shader Canvas to act as the true background
            while keeping the z-10 behavior intact so it masks the footer curtain reveal.
        */}
        <main className="flex-grow relative z-10 bg-transparent shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          {/* Subtle Top Spotlight Glow (Optional, keeps the premium lighting) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[120px] pointer-events-none z-0" />

          {/* Page Routes */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/auto-code" element={<AutoCode />} />
              <Route path="/projects/whispr-ai" element={<WhisprAI />} />
              <Route path="/projects/smart-stream" element={<SmartStream />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
