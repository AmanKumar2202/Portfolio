import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";

// Helper component to render each individual comet tail segment with its own staggered physics
function TailSegment({
  index,
  mouseX,
  mouseY,
}: {
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const x = useSpring(mouseX, {
    stiffness: 300 - index * 25,
    damping: 30 + index * 2,
  });
  const y = useSpring(mouseY, {
    stiffness: 300 - index * 25,
    damping: 30 + index * 2,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
      style={{
        x,
        y,
        width: 12 - index,
        height: 12 - index,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        opacity: 0.8 - index * 0.1,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: "difference",
      }}
    />
  );
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for direct, un-delayed tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for the outer ring's delayed tracking
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Completely bypass cursor logic on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, [role='button']")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, [role='button']")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none z-[9999]">
      {/* The Comet Tail Array */}
      {Array.from({ length: 8 }).map((_, i) => (
        <TailSegment
          key={`tail-${i}`}
          index={i}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}

      {/* The Main Interactive Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-white rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
