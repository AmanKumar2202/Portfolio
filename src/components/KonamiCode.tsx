import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiCode() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    let inputSequence: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isUnlocked) return;

      inputSequence = [...inputSequence, e.key].slice(-KONAMI_SEQUENCE.length);

      if (inputSequence.join(",") === KONAMI_SEQUENCE.join(",")) {
        setIsUnlocked(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isUnlocked]);

  return (
    <AnimatePresence>
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10001] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full max-w-lg p-8 md:p-12 rounded-3xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center"
          >
            <button
              onClick={() => setIsUnlocked(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <Sparkles className="w-12 h-12 text-yellow-400 mb-6" />
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
              Achievement Unlocked!
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              You found the Konami Code. Fun Fact: I built this entire portfolio
              meticulously from scratch without using any generic UI component
              libraries.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
