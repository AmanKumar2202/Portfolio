import { useRef, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticWrapperProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

export default function MagneticWrapper({
  children,
  intensity = 0.5,
  className = "",
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch devices to disable magnetic physics for better mobile scrolling
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  // Motion values for X and Y translation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apply a spring physics configuration for that snappy, premium feel
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isTouchDevice) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    // Calculate distance from center of the element
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX * intensity);
    y.set(middleY * intensity);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    // Snap back to original position
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
