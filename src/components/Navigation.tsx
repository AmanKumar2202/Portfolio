import { Link, useLocation } from 'react-router-dom';
import { Github, Mail, Phone } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Aman Kumar
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 ${
                isHome
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </Link>

            <a
              href="https://github.com/AmanKumar2202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="mailto:amankumar220203@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="tel:+918081338665"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
