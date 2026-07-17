import { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RenderTexture,
  PerspectiveCamera,
  Box,
  Torus,
  Sphere,
  Cone,
} from "@react-three/drei";
import * as THREE from "three";
import { ProjectType } from "./ProjectGallery";

// --- MINI 3D SCENES ---
const AutoCodeScene = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    ref.current!.rotation.x += delta;
    ref.current!.rotation.y += delta;
  });
  return (
    <Box ref={ref} args={[2, 2, 2]}>
      <meshStandardMaterial color="#0ea5e9" wireframe />
    </Box>
  );
};

const WhisprAIScene = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    ref.current!.rotation.y += delta * 0.5;
  });
  return (
    <group ref={ref}>
      <Torus args={[1.2, 0.2, 16, 32]} rotation={[1, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Torus>
      <Sphere args={[0.6, 32, 32]}>
        <meshStandardMaterial color="#2dd4bf" />
      </Sphere>
    </group>
  );
};

const SmartStreamScene = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    ref.current!.rotation.y += delta;
  });
  return (
    <Cone ref={ref} args={[1.5, 2.5, 32]} rotation={[0, 0, -Math.PI / 2]}>
      <meshStandardMaterial color="#f97316" />
    </Cone>
  );
};

// --- RENDER TEXTURE WRAPPER ---
function InnerShape({ id }: { id: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3.2, 3.2, 3.2]} />
      <meshBasicMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          {/* Internal background for the RenderTexture FBO */}
          <color attach="background" args={["#0f172a"]} />
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          {id === "auto-code" && <AutoCodeScene />}
          {id === "whispr-ai" && <WhisprAIScene />}
          {id === "smart-stream" && <SmartStreamScene />}
        </RenderTexture>
      </meshBasicMaterial>
    </mesh>
  );
}

export default function ProjectCard({
  project,
  onClick,
}: {
  project: ProjectType;
  onClick: () => void;
}) {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      whileDrag={{ scale: 0.97, rotate: -1 }}
      whileHover={{ scale: 1.03, rotateY: 8 }}
      style={{ transformPerspective: 1200 }}
      onClick={onClick}
      className="w-[320px] md:w-[420px] h-[450px] md:h-[550px] flex-shrink-0 cursor-pointer rounded-3xl overflow-hidden bg-slate-900 border border-white/5 relative group"
    >
      {/* Ensure Canvas safely unmounts during the layout transition to prevent stretching WebGL contexts */}
      <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5] }}
          dpr={[1, 1.5]}
          gl={{ antialias: false }}
        >
          <InnerShape id={project.id} />
        </Canvas>
      </div>

      {/* Typography Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
          {project.title}
        </h3>
        <div
          className="w-16 h-1 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ backgroundColor: project.color }}
        />
      </div>
    </motion.div>
  );
}
