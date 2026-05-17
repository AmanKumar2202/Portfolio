import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
  HTMLMotionProps,
} from "framer-motion";

interface HolographicCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export default function HolographicCard({
  children,
  className = "",
  ...props
}: HolographicCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for the 3D tilt effect [-1, 1]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Motion values for the spotlight tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth tilt snapping
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-1, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [-1, 1], [-7, 7]), springConfig);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Calculate mouse position relative to the center of the card for the tilt
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));

    // Calculate mouse position relative to the top-left for the spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Snap back to original flat position
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-colors duration-300 hover:border-white/20 ${className}`}
      {...props}
    >
      {/* The Holographic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              rgba(217, 70, 239, 0.15) 40%,
              rgba(139, 92, 246, 0.15) 60%,
              transparent 80%
            )
          `,
        }}
      />

      {/* Content wrapper with translateZ for depth */}
      <div
        className="relative h-full w-full z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
