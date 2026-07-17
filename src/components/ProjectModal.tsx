import { motion } from "framer-motion";
import { X } from "lucide-react";
import { ProjectType } from "./ProjectGallery";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectType;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 pointer-events-auto">
      {/* Background Scrim - Fades in independently */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
      />

      {/* Morphing Layout Container - Morphs from the Card bounds */}
      <motion.div
        layoutId={`project-${project.id}`}
        className="relative w-full max-w-6xl h-[85vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Inner Content - Fades in ONLY after layout morph completes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="p-10 md:p-16 flex flex-col justify-center w-full h-full"
        >
          <h2
            className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter"
            style={{ color: project.color }}
          >
            {project.title}
          </h2>
          <p className="text-xl md:text-3xl text-slate-400 mb-12 max-w-3xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors">
              Explore Case Study
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
