import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Youtube, Target, TrendingUp, Sparkles } from 'lucide-react';

const WhyHireMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section id="whats-special" ref={sectionRef} className="py-20 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-red-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* Left Side - YouTube Proof */}
          <div className={`w-full lg:w-5/12 transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-[2.5rem] border border-white/10 shadow-2xl relative group hover:shadow-[0_0_50px_rgba(220,38,38,0.15)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-red-600/20 rounded-[2.5rem] blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="bg-gray-950/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.3rem] relative z-10 flex flex-col items-center text-center border border-white/5">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-[20px] opacity-30"></div>
                  <img 
                    src="/images/profile-dp.jpg" 
                    alt="Abhiwak Tiwari"
                    className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-red-500/30 shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-black rounded-full p-1.5 border border-white/10 shadow-lg">
                    <img src="/images/youtube-play.png" alt="YouTube" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                  </div>
                </div>
                <h4 className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3">Built from Scratch</h4>
                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 tracking-tighter drop-shadow-lg">
                  100K<span className="text-red-500">+</span>
                </div>
                <p className="text-lg md:text-xl text-white font-semibold mb-8 uppercase tracking-widest">Subscribers</p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  I don't just preach growth. I practice it. I've successfully built and scaled my own channel to over 1 Lakh subscribers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - The Pitch */}
          <div className={`w-full lg:w-7/12 transition-all duration-1000 delay-300 ease-out ${hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-orange-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base flex items-center gap-3">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              The Value Proposition
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Why You Should <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Hire Me?</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                By hiring me, you aren't just getting another Social Media Manager. You are getting a <strong className="text-white font-semibold">Proper Creative Director</strong> who brings actual, measurable results through content.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                  <Target className="text-orange-400 mb-4" size={32} />
                  <h4 className="text-white font-bold text-lg md:text-xl mb-3">I Know Content Nerves</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">I have deep knowledge about what will absolutely work and what will flop. No guesswork, just precision.</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                  <TrendingUp className="text-orange-400 mb-4" size={32} />
                  <h4 className="text-white font-bold text-lg md:text-xl mb-3">Results-Driven</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">I focus on creating high-impact content that generates attention and turns that attention into community.</p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 p-6 rounded-r-2xl shadow-[inset_0_0_20px_rgba(249,115,22,0.05)]">
                <div className="flex items-start gap-4">
                  <Sparkles className="text-orange-400 shrink-0 mt-1" size={24} />
                  <p className="text-white font-medium text-lg md:text-xl leading-snug">
                    "Not just a social media manager, but a proper <span className="text-orange-400">package of everything</span> you need to dominate your space."
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
