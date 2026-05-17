import { Suspense, lazy } from "react";

// Dynamically import the 3D scene so it gets bundled separately by Vite
const Scene = lazy(() => import("./Hero3DScene"));

export default function Hero3D() {
  return (
    <div className="w-full h-80 md:h-[500px] relative z-10 cursor-grab active:cursor-grabbing">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            {/* A subtle loading spinner that matches your theme */}
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        }
      >
        <Scene />
      </Suspense>
    </div>
  );
}
