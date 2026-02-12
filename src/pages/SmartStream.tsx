import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Brain, Film, Star, ExternalLink } from 'lucide-react';

export default function SmartStream() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Search',
      description: 'Natural language understanding for intuitive content discovery',
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Smart Recommendations',
      description: 'Contextual suggestions based on complex user preferences and moods',
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: 'TMDB Integration',
      description: 'Comprehensive movie and TV show database with rich metadata',
    },
  ];

  const technologies = [
    'React.js',
    'JavaScript',
    'Node.js',
    'OpenAI NLP',
    'Tailwind CSS',
    'TMDB API',
  ];

  const capabilities = [
    'Natural language query understanding',
    'Context-aware content recommendations',
    'Dynamic search with contextual filters',
    'Mood-based content suggestions',
    'Genre and theme analysis',
    'Runtime and rating-based filtering',
    'Netflix-inspired responsive interface',
  ];

  const searchExamples = [
    {
      query: 'Show me something thrilling but short',
      result: 'AI understands length and intensity preferences',
    },
    {
      query: 'Comedy with a twist ending',
      result: 'Analyzes genre and plot characteristics',
    },
    {
      query: 'Feel-good movie for family night',
      result: 'Considers mood and audience suitability',
    },
    {
      query: 'Mind-bending sci-fi like Inception',
      result: 'Finds similar themes and complexity',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 group transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-medium mb-6">
            AI-Enhanced Streaming
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            SmartStream
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-4xl leading-relaxed">
            A Netflix clone enhanced with AI-based smart search that understands user intent via
            natural language queries, making content discovery intuitive and personalized.
          </p>

          <a
            href="https://mern-netflix-clone-puce.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-12"
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
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Smart Search Examples</h2>
            <div className="space-y-4">
              {searchExamples.map((example, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Search className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-900 font-medium italic">"{example.query}"</p>
                  </div>
                  <p className="text-gray-600 pl-8">{example.result}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Star className="w-6 h-6" />
                AI Intelligence
              </h3>
              <p className="text-white/90 leading-relaxed">
                The OpenAI-powered search engine understands context, mood, preferences, and even
                abstract concepts like "thrilling but short" or "comedy with a twist ending" to
                deliver highly relevant recommendations.
              </p>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Capabilities</h2>
            <div className="space-y-4 mb-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">{capability}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Technology Stack</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-lg font-medium hover:scale-110 transition-transform duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              SmartStream reimagines the streaming experience by combining the familiar Netflix
              interface with cutting-edge AI technology. The platform goes beyond traditional
              keyword search to understand the nuanced preferences and moods of users.
            </p>
            <p>
              Powered by OpenAI's natural language processing, the search engine interprets complex
              queries like "show me something thrilling but short" or "comedy with a twist ending."
              It analyzes multiple dimensions including genre, runtime, mood, themes, and plot
              characteristics to deliver precisely what users are looking for.
            </p>
            <p>
              The TMDB API integration provides access to a comprehensive database of movies and TV
              shows with rich metadata, enabling the AI to make informed recommendations. Dynamic
              filters adjust based on search context, creating a personalized browsing experience
              for each user.
            </p>
            <p>
              Built with React.js and Node.js, SmartStream combines modern web technologies with AI
              capabilities to create a streaming platform that truly understands its users. The
              result is a content discovery experience that feels natural and intuitive, saving
              users time and helping them find exactly what they want to watch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300">
            <Brain className="w-12 h-12 mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">Natural Language</div>
            <div className="text-orange-100">Understands complex queries</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300">
            <Search className="w-12 h-12 mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">Smart Filters</div>
            <div className="text-red-100">Context-aware results</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300">
            <Film className="w-12 h-12 mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">Rich Content</div>
            <div className="text-pink-100">TMDB integration</div>
          </div>
        </div>
      </div>
    </div>
  );
}
