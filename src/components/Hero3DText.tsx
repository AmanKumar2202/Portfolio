import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, MeshTransmissionMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Using a reliable standard Three.js JSON font for Text3D
const FONT_URL =
  "https://unpkg.com/three@0.160.0/examples/fonts/helvetiker_bold.typeface.json";

interface LetterConfig {
  char: string;
  pos: THREE.Vector3;
}

// Pre-calculated target positions to beautifully center the name
const AMAN: LetterConfig[] = [
  { char: "A", pos: new THREE.Vector3(-3.2, 0.8, 0) },
  { char: "m", pos: new THREE.Vector3(-1.4, 0.8, 0) },
  { char: "a", pos: new THREE.Vector3(0.8, 0.8, 0) },
  { char: "n", pos: new THREE.Vector3(2.4, 0.8, 0) },
];

const KUMAR: LetterConfig[] = [
  { char: "K", pos: new THREE.Vector3(-3.8, -1.2, 0) },
  { char: "u", pos: new THREE.Vector3(-1.8, -1.2, 0) },
  { char: "m", pos: new THREE.Vector3(-0.2, -1.2, 0) },
  { char: "a", pos: new THREE.Vector3(1.8, -1.2, 0) },
  { char: "r", pos: new THREE.Vector3(3.4, -1.2, 0) },
];

function AnimatedLetter({
  char,
  targetPosition,
}: {
  char: string;
  targetPosition: THREE.Vector3;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Calculate the exploded starting position for the initial load
  const initialPosition = useMemo(() => {
    return new THREE.Vector3(
      targetPosition.x + (Math.random() - 0.5) * 20,
      targetPosition.y + (Math.random() - 0.5) * 20,
      targetPosition.z + (Math.random() - 0.5) * 20,
    );
  }, [targetPosition]);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.copy(initialPosition);
      // Add chaotic random rotation on start
      meshRef.current.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );
    }
  }, [initialPosition]);

  useFrame((state) => {
    if (!meshRef.current) return;

    // 1. Calculate precise world position of the mouse on the Z=0 plane
    const vec = new THREE.Vector3(state.pointer.x, state.pointer.y, 0.5);
    vec.unproject(state.camera);
    const dir = vec.sub(state.camera.position).normalize();
    const distance = -state.camera.position.z / dir.z;
    const mouse3D = state.camera.position
      .clone()
      .add(dir.multiplyScalar(distance));

    // 2. Physics Attraction Field Math
    const INFLUENCE_RADIUS = 4.0;
    const currentPos = meshRef.current.position;
    const dist = mouse3D.distanceTo(currentPos);

    const attraction = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
    const mouseDir = mouse3D.clone().sub(targetPosition).normalize();

    // We use .clone() on targetPosition so we don't permanently mutate the resting coordinates
    const target = targetPosition
      .clone()
      .add(mouseDir.multiplyScalar(attraction * 0.4));

    // Smoothly lerp towards target
    currentPos.lerp(target, 0.08);

    // 3. Smoothly spin back to center alignment
    meshRef.current.quaternion.slerp(new THREE.Quaternion().identity(), 0.05);
  });

  return (
    <Text3D
      ref={meshRef}
      font={FONT_URL}
      size={1.6}
      height={0.4}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.03}
      bevelSize={0.02}
      bevelSegments={5}
    >
      {char}
      <MeshTransmissionMaterial
        backside
        thickness={0.8}
        roughness={0}
        transmission={0.95}
        ior={1.5}
        chromaticAberration={0.12}
        clearcoat={1}
        color="#a78bfa"
        resolution={256}
        samples={4}
        transmissionSampler={false}
      />
    </Text3D>
  );
}

export default function Hero3DText() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.05;
      sphereRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group>
      {AMAN.map((item, i) => (
        <AnimatedLetter
          key={`aman-${i}`}
          char={item.char}
          targetPosition={item.pos}
        />
      ))}
      {KUMAR.map((item, i) => (
        <AnimatedLetter
          key={`kumar-${i}`}
          char={item.char}
          targetPosition={item.pos}
        />
      ))}

      {/* Abstract rotating glass nebula behind the text */}
      <Sphere ref={sphereRef} args={[8, 64, 64]} position={[0, 0, -4]}>
        <meshPhysicalMaterial
          transparent
          opacity={0.1}
          wireframe
          color="#a78bfa"
          roughness={0.5}
        />
      </Sphere>
    </group>
  );
}
