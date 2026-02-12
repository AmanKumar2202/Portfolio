import { Github, Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Auto-Code', href: '/projects/auto-code' },
    { label: 'WhisprAI', href: '/projects/whispr-ai' },
    { label: 'SmartStream', href: '/projects/smart-stream' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/AmanKumar2202', label: 'GitHub' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:amankumar220203@gmail.com', label: 'Email' },
    { icon: <Phone className="w-5 h-5" />, href: 'tel:+918081338665', label: 'Phone' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Docker',
    'MongoDB',
    'OpenAI API'
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Aman Kumar
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full-stack developer crafting AI-driven applications with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  title={link.label}
                >
                  <span className="group-hover:text-white">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:amankumar220203@gmail.com"
                className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-center text-sm"
              >
                Send Email
              </a>
              <a
                href="tel:+918081338665"
                className="block w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 text-center text-sm"
              >
                Call Me
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aman Kumar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Crafted with passion using React, TypeScript & Tailwind CSS
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
            title="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-600/10 to-transparent blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-cyan-600/10 to-transparent blur-3xl -z-10 pointer-events-none"></div>
    </footer>
  );
}
