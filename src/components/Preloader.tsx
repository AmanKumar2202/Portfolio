import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

const PHRASES = [
  "Plotting star coordinates...",
  "Calibrating nebulae...",
  "Initializing warp drive...",
  "Launching..."
];

export default function Preloader() {
  // useProgress automatically tracks the loading state of any <Canvas> elements
  const { progress, active } = useProgress();
  const [isLoading, setIsLoading] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When progress hits 100% and it's no longer actively loading
    if (progress === 100 && !active) {
      // Add a slight 800ms delay to ensure smooth transition and avoid flashing
      const timeout = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, active]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          <div className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            {Math.round(progress)}%
          </div>
          <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-400 to-emerald-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
          
          <div className="mt-8 h-6 overflow-hidden relative w-full flex justify-center text-slate-400 font-medium tracking-wide">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >{PHRASES[phraseIndex]}</motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
