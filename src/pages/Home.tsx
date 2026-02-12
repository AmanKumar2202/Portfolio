import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Cloud, Cpu, ExternalLink, Sparkles } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Firebase'] },
    { category: 'AI/ML', items: ['OpenAI GPT', 'NLP', 'Smart Search'] },
    { category: 'Database', items: ['MongoDB', 'Firebase'] },
    { category: 'DevOps', items: ['Docker', 'GCP', 'CI/CD'] },
    { category: 'Other', items: ['WebSockets', 'SaaS', 'JWT/OAuth'] },
  ];

  const projects = [
    {
      id: 'auto-code',
      title: 'Auto-Code',
      description: 'AI-powered multi-language online IDE with real-time collaboration',
      tech: ['Next.js', 'TypeScript', 'Docker', 'GCP', 'Convex'],
      highlights: ['40% faster page transitions', 'Real-time backend', '90+ Lighthouse score'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'whispr-ai',
      title: 'WhisprAI',
      description: 'WhatsApp-inspired chat app with AI bot integration',
      tech: ['React', 'MongoDB', 'Node.js', 'OpenAI GPT'],
      highlights: ['Real-time messaging', 'Smart reply suggestions', 'Personality-based modes'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'smart-stream',
      title: 'SmartStream',
      description: 'Netflix clone with AI-powered smart search',
      tech: ['React.js', 'Node.js', 'OpenAI NLP', 'TMDB API'],
      highlights: ['Natural language queries', 'AI recommendations', 'Dynamic search'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-6 flex items-center gap-3 animate-slide-in-down">
              <Sparkles className="w-6 h-6 text-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Welcome to my portfolio</span>
            </div>

            <div className="relative mb-8">
              <div className="absolute -left-6 -top-6 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-shimmer"></div>
              <div className="absolute -right-12 top-12 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-shimmer" style={{ animationDelay: '1s' }}></div>

              <h1 className="relative text-6xl md:text-8xl font-black mb-3 tracking-tight animate-slide-in-up">
                <span className="block text-gray-900 mb-2">Aman Kumar</span>
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000">
                  Full-Stack Developer
                </span>
              </h1>
            </div>

            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-full mb-8" style={{ animation: 'slideInUp 0.8s ease-out 0.2s both' }}></div>
            <p className="text-2xl text-gray-700 mb-4 max-w-3xl">
              Building AI-driven applications from architecture to deployment
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed">
              Versatile full-stack developer with experience in the complete project lifecycle,
              from architecting AI-driven applications with Next.js and Node.js to containerizing
              with Docker and deploying on scalable cloud platforms like GCP.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:amankumar220203@gmail.com"
                className="px-8 py-4 bg-white text-gray-800 rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className={`p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.category === 'Frontend' && <Code2 className="w-6 h-6 text-blue-600" />}
                  {skill.category === 'Backend' && <Database className="w-6 h-6 text-emerald-600" />}
                  {skill.category === 'AI/ML' && <Cpu className="w-6 h-6 text-purple-600" />}
                  {skill.category === 'Database' && <Database className="w-6 h-6 text-orange-600" />}
                  {skill.category === 'DevOps' && <Cloud className="w-6 h-6 text-cyan-600" />}
                  {skill.category === 'Other' && <Code2 className="w-6 h-6 text-teal-600" />}
                  <h3 className="text-xl font-bold text-gray-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className={`group block transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                    <Code2 className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
