import { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MoveRight, MoveDown } from 'lucide-react';

const startImages = [
  '/images/npa-stats.png',
  '/images/dma-stats.png',
  '/images/skills-elephant-stats.png',
];

const endImages = [
  '/images/npa-stats-after.png',
  '/images/dma-stats-after.png',
  '/images/skills-elephant-stats-after.png',
];

const FollowerGrowth = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % startImages.length);
    }, 4000); // Slightly slower so they can read both sides
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h3 className={`text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] font-semibold transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            The Growth Journey
          </h3>
          <h2 className={`mt-4 text-3xl md:text-5xl font-bold transition-all duration-1000 delay-200 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Impact</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real results. Here is how I took pages from scratch to massive reach.
          </p>
        </div>

        <div className={`relative max-w-5xl mx-auto transition-all duration-1500 delay-500 ease-out ${hasIntersected ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 bg-gray-900/30 rounded-3xl border border-white/10 p-6 md:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-orange-500/20 rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>

            {/* Before Image */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-sm md:max-w-md">
              <span className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-white/10 shadow-lg backdrop-blur-md">
                Starting Point
              </span>
              <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 bg-gray-950 flex items-center justify-center hover:scale-105">
                <img 
                  key={`start-${activeIndex}`}
                  src={startImages[activeIndex]} 
                  alt="Starting Point stats" 
                  className="w-full h-full object-cover object-center animate-fade-in-up"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
              </div>
            </div>

            {/* Arrow */}
            <div className="relative z-10 flex items-center justify-center text-orange-500 py-4 lg:py-0">
              <div className="hidden lg:flex flex-col items-center gap-2">
                <span className="text-sm font-bold text-orange-400 uppercase tracking-widest whitespace-nowrap animate-pulse">
                  Massive Growth
                </span>
                <MoveRight size={48} className="text-orange-500" strokeWidth={1.5} />
              </div>
              <div className="lg:hidden flex flex-col items-center gap-2 my-4">
                <span className="text-sm font-bold text-orange-400 uppercase tracking-widest whitespace-nowrap animate-pulse">
                  Massive Growth
                </span>
                <MoveDown size={40} className="text-orange-500 animate-bounce" strokeWidth={1.5} />
              </div>
            </div>

            {/* After Image */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-sm md:max-w-md">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 border border-orange-400/50 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                Current Followers
              </span>
              <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border-2 border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-500 bg-gray-950 flex items-center justify-center hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]">
                <img 
                  key={`end-${activeIndex}`}
                  src={endImages[activeIndex]} 
                  alt="Current Followers stats" 
                  className="w-full h-full object-cover object-center animate-fade-in-up"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowerGrowth;
