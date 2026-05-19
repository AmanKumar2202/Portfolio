import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

interface SkillNode {
  id: number;
  name: string;
  x: number;
  y: number;
  z: number;
}

const SKILLS = [
  "React",
  "Node.js",
  "MongoDB",
  "TypeScript",
  "WebGL",
  "Docker",
  "Python",
  "Next.js",
  "GraphQL",
  "Tailwind CSS",
  "Three.js",
  "Framer Motion",
  "AWS",
  "PostgreSQL",
  "Redis",
  "Git",
  "Figma",
  "Redux",
  "Jest",
  "Cypress",
];

// Exact spring config as requested for premium, weighty physics
const SPRING_CONFIG = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1.2,
};

export default function ConstellationSkills() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Pre-calculate positions using the spherical projection formula
  const { nodes, lines } = useMemo(() => {
    const width = 800;
    const height = 800;
    const cx = width / 2;
    const cy = height / 2;
    const r = 280;

    const generatedNodes: SkillNode[] = [];
    const numNodes = SKILLS.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numNodes; i++) {
      // Distribute nodes evenly across the sphere using Fibonacci spiral
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numNodes);

      // Spherical to Cartesian mapping
      const x = cx + r * Math.cos(theta) * Math.sin(phi);
      const y = cy + r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      generatedNodes.push({ id: i, name: SKILLS[i], x, y, z });
    }

    const generatedLines: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      key: string;
      opacity: number;
    }[] = [];
    const maxConnectionDistance = 250;

    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        const dx = generatedNodes[i].x - generatedNodes[j].x;
        const dy = generatedNodes[i].y - generatedNodes[j].y;
        const dz = generatedNodes[i].z - generatedNodes[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // Connect nodes that are spatially close
        if (dist < maxConnectionDistance) {
          generatedLines.push({
            x1: generatedNodes[i].x,
            y1: generatedNodes[i].y,
            x2: generatedNodes[j].x,
            y2: generatedNodes[j].y,
            key: `${i}-${j}`,
            // Closer connections are thicker/more opaque
            opacity: Math.max(0.1, 1 - dist / maxConnectionDistance) * 0.5,
          });
        }
      }
    }

    return { nodes: generatedNodes, lines: generatedLines };
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: SPRING_CONFIG },
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Infinitely rotating outer SVG group */}
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
        className="max-w-[800px] max-h-[800px] overflow-visible"
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      >
        <motion.g
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Constellation Connecting Lines */}
          {lines.map((line) => (
            <motion.line
              key={line.key}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(56, 189, 248, 1)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: line.opacity }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}

          {/* Skill Nodes */}
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.id;

            // Calculate fake depth based on Z axis
            const zScale = (node.z + 300) / 600;
            const baseRadius = 3 + zScale * 4;

            return (
              <motion.g
                key={node.id}
                variants={nodeVariants}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
                style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
              >
                {/* Interactive scale transition for the core dot */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={baseRadius}
                  fill={
                    isHovered
                      ? "#38bdf8"
                      : `rgba(255, 255, 255, ${0.4 + zScale * 0.6})`
                  }
                  animate={{ scale: isHovered ? 1.8 : 1 }}
                  transition={SPRING_CONFIG}
                />

                {/* Visible Skill Label */}
                <motion.text
                  x={node.x + 15}
                  y={node.y + 5}
                  fill="#94a3b8"
                  fontSize="14"
                  fontWeight="600"
                  textAnchor="start"
                  animate={{
                    fill: isHovered ? "#ffffff" : "#94a3b8",
                    scale: isHovered ? 1.15 : 1,
                  }}
                  transition={SPRING_CONFIG}
                  pointerEvents="none"
                  style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.8))" }}
                >
                  {node.name}
                </motion.text>
              </motion.g>
            );
          })}
        </motion.g>
      </motion.svg>
    </div>
  );
}
