import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ConstellationSkills from "./ConstellationSkills";

const SPRING_CONFIG = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1.2,
};

export default function StickyScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth continuous interpolations based on the scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const titleWords = "My Constellation".split(" ");

  return (
    <section ref={sectionRef} className="relative w-full h-[200vh]">
      {/* Sticky Container grabbing full viewport height */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Staggered Typography Entrance */}
        <div className="absolute top-24 z-20 flex gap-4 text-5xl md:text-7xl font-black text-white tracking-tighter pointer-events-none">
          {titleWords.map((word, i) => (
            <div key={i} style={{ overflow: "hidden" }} className="py-2">
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-400"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  ...SPRING_CONFIG,
                  delay: i * 0.04,
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* The 3D Scaled & Opacity Driven Constellation */}
        <motion.div
          style={{ scale, opacity }}
          className="w-full h-full max-w-5xl max-h-[60rem] flex items-center justify-center relative z-10"
        >
          <ConstellationSkills />
        </motion.div>

        {/* Decorative background glows matching the sticky scroll sequence */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            style={{ opacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px] mix-blend-screen"
          />
        </div>
      </div>
    </section>
  );
}
