import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

// The rotating and floating geometric shape
function AnimatedShape() {
  const meshRef = useRef<Mesh>(null);

  // useFrame runs on every frame (typically 60fps)
  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#0ea5e9" // Cyan-blue matching your portfolio theme
          emissive="#0284c7"
          wireframe
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]} // Performance optimization: cap pixel ratio at 2x
      gl={{ antialias: true, alpha: true }} // alpha: true allows your CSS gradients to show through
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <AnimatedShape />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}
