import { useEffect, useRef, useState } from "react";
import { Github, Mail, Phone, Linkedin, ArrowUp } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Auto-Code", href: "/projects/auto-code" },
    { label: "WhisprAI", href: "/projects/whispr-ai" },
    { label: "SmartStream", href: "/projects/smart-stream" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/AmanKumar2202",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:amankumar220203@gmail.com",
      label: "Email",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+918081338665",
      label: "Phone",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  // Dynamically measure the footer height to create the curtain reveal scroll area
  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Invisible spacer that allows the main content to scroll past, revealing the fixed footer behind it */}
      <div
        style={{ height: footerHeight }}
        className="w-full relative pointer-events-none"
      />

      {/* The actual footer sits fixed at the back (z-0) */}
      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 w-full bg-slate-950 text-gray-100 z-0 overflow-hidden border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none mb-8 text-white">
              Let's build <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                together.
              </span>
            </h2>
            <MagneticWrapper className="inline-block" intensity={0.2}>
              <a
                href="mailto:amankumar220203@gmail.com"
                className="text-2xl md:text-4xl font-mono text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-4 group"
              >
                <span className="text-white opacity-50 group-hover:opacity-100 transition-opacity">
                  &gt;
                </span>
                amankumar220203@gmail.com
                <span className="w-4 h-8 bg-white animate-pulse inline-block opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </MagneticWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-t border-white/5 pt-12">
            <div className="col-span-1">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
                Navigation
              </h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label} className="w-fit">
                    <MagneticWrapper intensity={0.2}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-300 text-lg font-medium block"
                      >
                        {link.label}
                      </a>
                    </MagneticWrapper>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
                Socials
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <MagneticWrapper key={link.label} intensity={0.4}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="w-14 h-14 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                      title={link.label}
                    >
                      <span className="text-slate-400 group-hover:text-white group-hover:scale-110 transition-all">
                        {link.icon}
                      </span>
                    </a>
                  </MagneticWrapper>
                ))}
              </div>
            </div>

            <div className="col-span-1 flex flex-col items-start md:items-end justify-between">
              <MagneticWrapper intensity={0.5}>
                <button
                  onClick={scrollToTop}
                  className="group w-14 h-14 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                  title="Back to top"
                >
                  <ArrowUp className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:-translate-y-1 transition-all" />
                </button>
              </MagneticWrapper>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 font-medium border-t border-white/5 pt-8">
            <p>© {currentYear} Aman Kumar. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Crafted with passion using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
