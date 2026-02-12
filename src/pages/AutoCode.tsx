import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Zap,
  TrendingUp,
  Cloud,
  ExternalLink,
} from "lucide-react";

export default function AutoCode() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Performance",
      description:
        "40% faster page transitions and 30% lower TTI compared to traditional MVC-based web apps",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-Time Architecture",
      description:
        "50% reduction in data-fetch latency with Convex backend, eliminating client-side state management complexity",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Serverless Deployment",
      description:
        "Sub-second cold starts and 90+ Lighthouse scores with Vercel + Tailwind CSS on Google Cloud Platform",
    },
  ];

  const technologies = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Docker",
    "GCP (Cloud Run)",
    "TailwindCSS",
    "Clerk",
    "Convex",
    "Monaco Editor",
  ];

  const achievements = [
    "Engineered an AI-powered, multi-language online IDE",
    "Replaced conventional REST-based MVC architecture with real-time Convex backend",
    "Achieved 90+ Lighthouse scores with optimal performance metrics",
    "Containerized application using Docker for consistent, portable environments",
    "Deployed on Google Cloud Platform leveraging Cloud Run for scalable execution",
    "Implemented live theming and webhook integrations",
    "Built role-based execution dashboards under scalable serverless model",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-6">
            Featured Project
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Auto-Code
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed">
            An AI-powered, multi-language online IDE delivering exceptional
            performance with real-time collaboration capabilities and modern
            serverless architecture.
          </p>

          <a
            href="https://auto-code-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-12"
          >
            <span>Visit Live Project</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Key Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Technologies Used
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-lg font-medium hover:scale-110 transition-transform duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 p-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Page Transitions</span>
                  <span className="text-2xl font-bold">40% Faster</span>
                </div>
                <div className="w-full h-2 bg-blue-400 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-white rounded-full"></div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-blue-100">Data-Fetch Latency</span>
                  <span className="text-2xl font-bold">50% Reduction</span>
                </div>
                <div className="w-full h-2 bg-blue-400 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-white rounded-full"></div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-blue-100">Lighthouse Score</span>
                  <span className="text-2xl font-bold">90+</span>
                </div>
                <div className="w-full h-2 bg-blue-400 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Auto-Code represents a significant leap forward in online
              development environments. By leveraging cutting-edge technologies
              like Next.js and TypeScript, the platform delivers an exceptional
              user experience with blazing-fast performance metrics.
            </p>
            <p>
              The architecture shift from traditional REST-based MVC to a
              real-time Convex backend has resulted in dramatic improvements in
              data synchronization and state management. This allows multiple
              developers to collaborate seamlessly in real-time, seeing changes
              instantly without manual refreshes.
            </p>
            <p>
              Deployment on Google Cloud Platform using Cloud Run ensures
              automatic scaling based on demand, while Docker containerization
              guarantees consistent behavior across all environments. The
              platform achieves impressive Lighthouse scores thanks to careful
              optimization with Vercel and Tailwind CSS.
            </p>
            <p>
              With features like live theming, webhook integrations, and
              role-based execution dashboards, Auto-Code provides a
              professional-grade development environment suitable for teams of
              any size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
