import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  angle: number;
  distance: number;
  size: number;
  color: string;
}

interface Burst {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
}

const BURST_COLORS = ["#38bdf8", "#818cf8", "#34d399", "#f472b6", "#fbbf24"];

export default function ParticleBurst() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newBurst: Burst = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        particles: Array.from({ length: 25 }).map(() => ({
          angle: Math.random() * Math.PI * 2,
          distance: Math.random() * 80 + 20,
          size: Math.random() * 6 + 2,
          color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
        })),
      };

      setBursts((prev) => [...prev, newBurst]);

      // Clean up the burst from state after animation completes
      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== newBurst.id));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden">
      <AnimatePresence>
        {bursts.map((burst) => (
          <div
            key={burst.id}
            className="absolute left-0 top-0"
            style={{ left: burst.x, top: burst.y }}
          >
            {burst.particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  x: "-50%",
                  y: "-50%",
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos(p.angle) * p.distance,
                  y: Math.sin(p.angle) * p.distance,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
