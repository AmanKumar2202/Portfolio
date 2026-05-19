import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    // Compute position on the viewport plane
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uScroll;

  // Simplex 2D noise helper functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  
  // Classic Perlin Noise 2D
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);

    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // FBM (Fractal Brownian Motion) Layering
  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 5; ++i) {
      v += a * snoise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv * 3.0; // Scale uv for noise dimensions
    
    // FBM Domain Warping for viscous nebula drift
    vec2 q = vec2(0.0);
    q.x = fbm(uv + 0.1 * uTime);
    q.y = fbm(uv + vec2(1.0));

    vec2 r = vec2(0.0);
    r.x = fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
    r.y = fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);

    float f = fbm(uv + r);

    // Defined palette
    vec3 cNavy = vec3(0.02, 0.01, 0.08);
    vec3 cViolet = vec3(0.4, 0.1, 0.9);
    vec3 cAmber = vec3(0.9, 0.4, 0.05);

    // Smoothly mix colors using the smoothed scroll progress (0.0 -> 1.0)
    vec3 colorBlend = mix(cNavy, cViolet, smoothstep(0.0, 0.5, uScroll));
    colorBlend = mix(colorBlend, cAmber, smoothstep(0.5, 1.0, uScroll));

    // Composite final color with the fractal noise
    vec3 finalColor = colorBlend * (f * 1.5 + 0.3) + (q.x * 0.2 * colorBlend);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

interface GalaxyBackgroundProps {
  scrollProgress: MotionValue<number>;
}

export default function GalaxyBackground({
  scrollProgress,
}: GalaxyBackgroundProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      // Push time continuously for the nebula drift
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      // Get the spring-smoothed scroll value directly on the GPU every frame
      materialRef.current.uniforms.uScroll.value = scrollProgress.get();
    }
  });

  return (
    <group>
      {/* Background Shader Plane */}
      <mesh>
        {/* Stretch exactly to cover the viewport camera bounds */}
        <planeGeometry args={[viewport.width, viewport.height]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uScroll: { value: 0 },
          }}
          depthWrite={false}
        />
      </mesh>

      {/* Stars Layering over the shader plane */}
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
    </group>
  );
}
