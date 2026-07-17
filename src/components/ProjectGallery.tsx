import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  color: string;
}

const PROJECTS: ProjectType[] = [
  {
    id: "auto-code",
    title: "Auto-Code",
    description:
      "An AI-powered, multi-language online IDE delivering exceptional performance with real-time collaboration capabilities. Built from the ground up to handle intense computational loads.",
    color: "#0ea5e9", // Sky Blue
  },
  {
    id: "whispr-ai",
    title: "WhisprAI",
    description:
      "A WhatsApp-inspired chat application integrated with an AI bot that mimics human conversational style. Features real-time messaging and dynamic personality-based chat modes.",
    color: "#10b981", // Emerald
  },
  {
    id: "smart-stream",
    title: "SmartStream",
    description:
      "A Netflix-inspired streaming platform featuring an AI-powered semantic search engine that understands natural language queries for hyper-personalized media discovery.",
    color: "#f97316", // Orange
  },
];

export default function ProjectGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find((p) => p.id === selectedId);

  return (
    <div
      className="relative w-full py-32 overflow-hidden bg-slate-950"
      ref={containerRef}
    >
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.1}
        className="flex gap-8 px-6 md:px-12 w-max cursor-grab active:cursor-grabbing"
      >
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedId(project.id)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
