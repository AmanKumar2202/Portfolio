import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageSquare,
  Sparkles,
  Lock,
  Zap,
  ExternalLink,
} from "lucide-react";

export default function WhisprAI() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Real-Time Messaging",
      description:
        "Instant message delivery with WebSocket technology for seamless communication",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Bot",
      description:
        "Intelligent bot that mimics human conversational style with smart reply suggestions",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure Authentication",
      description:
        "MongoDB-powered secure authentication with real-time data synchronization",
    },
  ];

  const technologies = [
    "React",
    "MongoDB",
    "Node.js",
    "OpenAI GPT",
    "Tailwind CSS",
    "WebSockets",
  ];

  const capabilities = [
    "Real-time messaging with instant delivery",
    "Smart reply suggestions powered by AI",
    "Personality-based chat modes for varied interactions",
    "Human-like conversational AI bot",
    "Secure user authentication and data protection",
    "Real-time updates using MongoDB",
    "Intuitive WhatsApp-inspired interface",
  ];

  const chatModes = [
    { name: "Professional", color: "from-blue-500 to-cyan-500" },
    { name: "Casual", color: "from-emerald-500 to-teal-500" },
    { name: "Creative", color: "from-orange-500 to-amber-500" },
    { name: "Technical", color: "from-violet-500 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 group transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-medium mb-6">
            AI Chat Application
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            WhisprAI
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed">
            A WhatsApp-inspired chat application integrated with an AI bot that
            mimics human conversational style, featuring real-time messaging and
            personality-based chat modes.
          </p>

          <a
            href="https://whisprai-nine.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-12"
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
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white mb-6">
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
              Key Features
            </h2>
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{capability}</p>
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
              Technology Stack
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-lg font-medium hover:scale-110 transition-transform duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Personality Modes
            </h2>
            <div className="space-y-4">
              {chatModes.map((mode, index) => (
                <div
                  key={mode.name}
                  className={`p-6 bg-gradient-to-r ${mode.color} rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold mb-2">{mode.name} Mode</h3>
                  <p className="text-white/90">
                    AI adapts its communication style to match{" "}
                    {mode.name.toLowerCase()} contexts
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              WhisprAI revolutionizes chat applications by seamlessly
              integrating artificial intelligence with familiar messaging
              interfaces. Built with React and Node.js, the platform delivers
              real-time communication with the added intelligence of OpenAI GPT.
            </p>
            <p>
              The AI bot doesn't just respond to messages—it understands
              context, maintains conversational flow, and adapts its personality
              based on the selected mode. Whether you need professional
              assistance, casual conversation, creative brainstorming, or
              technical support, WhisprAI adjusts accordingly.
            </p>
            <p>
              Smart reply suggestions analyze the conversation context and offer
              relevant responses, making communication faster and more
              efficient. The MongoDB backend ensures secure data storage with
              real-time synchronization across all connected clients.
            </p>
            <p>
              The WhatsApp-inspired interface makes the application instantly
              familiar to users, reducing the learning curve while providing
              advanced AI capabilities that go beyond traditional messaging
              applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl text-white text-center">
            <div className="text-4xl font-bold mb-2">Real-Time</div>
            <div className="text-emerald-100">Instant message delivery</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl text-white text-center">
            <div className="text-4xl font-bold mb-2">AI-Powered</div>
            <div className="text-teal-100">Smart reply suggestions</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl text-white text-center">
            <div className="text-4xl font-bold mb-2">Secure</div>
            <div className="text-cyan-100">MongoDB authentication</div>
          </div>
        </div>
      </div>
    </div>
  );
}
