import { useRef } from 'react';
import { TrendingUp, Users, Target, Zap, Smartphone, GraduationCap, Youtube, ShoppingBag } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const caseStudies = [
  {
    id: 1,
    title: 'Small Brand Viral Growth',
    category: 'Social Media',
    icon: Smartphone,
    gradient: 'from-orange-500 to-amber-500',
    challenge: 'The brand had good products but very low reach. Reels were not engaging and the storytelling wasn’t strong enough.',
    solution: 'I rewrote the concept, fixed the hook, improved the pacing and edited it in a high-retention style.',
    results: [
      { label: 'Reel Views', value: '5L+', icon: Zap },
      { label: 'Reach', value: 'High', icon: TrendingUp },
      { label: '50K+ Reels', value: 'Multiple', icon: Users },
    ],
    image: 'https://images.pexels.com/photos/5053743/pexels-photo-5053743.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Educational Client Launch',
    category: 'EdTech / Coaching',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500',
    challenge: 'No clear identity, no content plan and inconsistent posting. The content wasn’t relatable for students.',
    solution: 'I created new scripts, shot faculty-led reels and added humour and relatable elements to make the content share-worthy.',
    results: [
      { label: '3-Day Views', value: '1L+', icon: Zap },
      { label: 'Top Reel', value: '6L+', icon: TrendingUp },
      { label: 'Growth', value: 'Organic', icon: Target },
    ],
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'YouTube Nostalgia Growth',
    category: 'YouTube Growth',
    icon: Youtube,
    gradient: 'from-red-500 to-orange-600',
    challenge: 'No mic, no studio, noisy environment and no fixed niche. Only consistency and passion.',
    solution: 'I focused on the nostalgia niche (Pokémon), made story-driven videos and uploaded consistently despite limitations.',
    results: [
      { label: 'Subscribers', value: '100K', icon: Users },
      { label: 'Timeframe', value: '3 Months', icon: TrendingUp },
      { label: 'Award', value: 'Silver Play', icon: Award },
    ],
    image: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'T-Shirt Microbrand Launch',
    category: 'Branding and Sales',
    icon: ShoppingBag,
    gradient: 'from-pink-500 to-rose-500',
    challenge: 'Launching a clothing line with no ads, no website and no team.',
    solution: 'I created relatable designs, shot simple but aesthetic content and used Instagram storytelling with a limited-drop strategy.',
    results: [
      { label: 'Sold (1 Week)', value: '100', icon: ShoppingBag },
      { label: 'Buzz', value: 'Local', icon: Zap },
      { label: 'Customers', value: 'Repeat', icon: Users },
    ],
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

import { Award } from 'lucide-react';

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-zinc-900/10 to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from real projects
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div
                key={study.id}
                className={`group relative flex flex-col bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Image Section - Reduced Height */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div className="inline-block px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white border border-white/10">
                      {study.category}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Challenge
                      </h4>
                      <p className="text-gray-300 text-sm line-clamp-3">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Solution
                      </h4>
                      <p className="text-gray-300 text-sm line-clamp-3">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-3 gap-2">
                      {study.results.map((result, idx) => {
                        const ResultIcon = result.icon;
                        return (
                          <div
                            key={idx}
                            className="p-2 bg-white/5 rounded-lg border border-white/5 text-center"
                          >
                            <ResultIcon className="w-4 h-4 text-orange-400 mx-auto mb-1" />
                            <p className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                              {result.value}
                            </p>
                            <p className="text-[10px] text-gray-400 uppercase tracking-tight">{result.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
