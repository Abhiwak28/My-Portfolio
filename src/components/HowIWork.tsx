import { useRef, useState } from 'react';
import { Play, Lightbulb, Target, Rocket, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


const insights = [
  {
    icon: Lightbulb,
    title: 'Research & Discovery',
    description: 'Deep dive into your brand, audience, and market trends',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Craft a tailored content strategy aligned with your goals',
  },
  {
    icon: Rocket,
    title: 'Creative Execution',
    description: 'Produce high-quality content that captivates and converts',
  },
  {
    icon: CheckCircle,
    title: 'Optimize & Scale',
    description: 'Analyze performance and continuously improve results',
  },
];

const HowIWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <section
      id="how-i-work"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-violet-950/10 to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-[150px]"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              How I Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven process that delivers results every time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div
            className={`space-y-6 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                My Insights & Process
              </h3>
              <p className="text-gray-400 text-lg">
                Every great piece of content starts with understanding. Here's how I transform ideas into impactful stories.
              </p>
            </div>

            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{insight.title}</h4>
                      <p className="text-gray-400 text-sm">{insight.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/10 rounded-2xl transition-all duration-500"></div>
                </div>
              );
            })}
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
              <div className="relative aspect-[9/16] md:aspect-video bg-black">
                {!isPlaying ? (
                  <>
                    <img
                      src="https://img.youtube.com/vi/75KmGp-Uhc0/maxresdefault.jpg"
                      alt="Process insights"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-2xl shadow-orange-500/50"
                    >
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Behind The Scenes
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Watch how I bring creative visions to life
                      </p>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/75KmGp-Uhc0?autoplay=1&rel=0"
                    title="Behind The Scenes"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
