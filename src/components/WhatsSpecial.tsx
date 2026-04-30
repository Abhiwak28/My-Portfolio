import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { TrendingDown, Crosshair, ZapOff } from 'lucide-react';

const BELIEFS = [
  {
    title: 'Boosting Inorganically',
    description: "I don't believe in buying fake views or pushing inorganic growth. Real communities are built organically and authentically.",
    icon: TrendingDown,
  },
  {
    title: 'Content Without Strategy',
    description: "I don't believe in shooting blindly. Every piece of content must be backed by a clear, data-driven strategy and purpose.",
    icon: Crosshair,
  },
  {
    title: 'Mindless Viral Trends',
    description: "I don't believe in jumping on trends just for views, until and unless they actually tell your brand's unique story.",
    icon: ZapOff,
  }
];

const WhatsSpecial = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-red-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            What's Special?
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Don't Believe In</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            My approach is different because of what I refuse to do. Here are the core principles I stand against.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BELIEFS.map((belief, index) => (
            <div 
              key={index}
              className={`bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/10 hover:border-red-500/30 transition-all duration-700 ease-out group ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-red-500/10">
                <belief.icon className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{belief.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsSpecial;
