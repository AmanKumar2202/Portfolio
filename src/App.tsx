import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AutoCode from "./pages/AutoCode";
import WhisprAI from "./pages/WhisprAI";
import SmartStream from "./pages/SmartStream";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        {/* THE CURTAIN (Main Content) 
            Explicitly uses bg-slate-950 and z-10 to act as a solid curtain over the fixed footer.
        */}
        <main className="flex-grow relative z-10 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          {/* Subtle Top Spotlight Glow (Optional, keeps the premium lighting) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[120px] pointer-events-none z-0" />

          {/* Page Routes */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/auto-code" element={<AutoCode />} />
              <Route path="/projects/whispr-ai" element={<WhisprAI />} />
              <Route path="/projects/smart-stream" element={<SmartStream />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
