import { Link, useLocation } from "react-router-dom";
import { Github, Mail, Phone } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";
import { motion } from "framer-motion";

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <MagneticWrapper intensity={0.2}>
            <Link
              to="/"
              className="text-2xl font-black bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent transition-transform duration-300"
            >
              Aman Kumar
            </Link>
          </MagneticWrapper>

          {/* Nav Links & Socials */}
          <div className="flex items-center gap-6 md:gap-8">
            <MagneticWrapper intensity={0.2}>
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-300 ${
                  isHome ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                Home
              </Link>
            </MagneticWrapper>

            <div className="hidden sm:flex items-center gap-6 border-l border-white/10 pl-6">
              <MagneticWrapper intensity={0.3}>
                <a
                  href="https://github.com/AmanKumar2202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10"
                >
                  <Github className="w-5 h-5" />
                </a>
              </MagneticWrapper>

              <MagneticWrapper intensity={0.3}>
                <a
                  href="mailto:amankumar220203@gmail.com"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </MagneticWrapper>

              <MagneticWrapper intensity={0.3}>
                <a
                  href="tel:+918081338665"
                  className="text-neutral-400 hover:text-white transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </MagneticWrapper>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
