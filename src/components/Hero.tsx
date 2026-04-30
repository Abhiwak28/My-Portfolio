import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants/assets';
import StatCounter from './StatCounter';
import GlitchText from './GlitchText';

const Hero = () => {
  const greetings = ['Namaste', 'Hello', 'Bonjour', 'Hola', 'Ciao'];
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src={ASSETS.videos.heroBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 h-12 md:h-20">
            {greetings.map((greeting, index) => (
              <div
                key={greeting}
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${index === currentGreeting
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
                  }`}
              >
                <GlitchText
                  text={greeting}
                  className="text-5xl md:text-7xl text-gray-400"
                />
              </div>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl mt-2 lg:text-8xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up animation-delay-200">
            Abhiwak Tiwari
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            I Craft Real Organic Content Which Brings Revenue and Attention
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-base text-gray-400 mb-8 md:mb-12 animate-fade-in-up animation-delay-400">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-500/20">
              Building Creativejury!
            </span>
            <span className="hidden md:inline text-orange-400">•</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-500/20">
              Content Strategist
            </span>
            <span className="hidden md:inline text-orange-400">•</span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-500/20">
              Creative Director
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-8 mb-12 animate-fade-in-up animation-delay-600">
            <StatCounter
              end={9}
              prefix=""
              label="of Experience"
              suffix=" Years"
              gradientFrom="orange-500"
              gradientTo="amber-400"
            />
            <StatCounter
              end={2}
              label="High-Converting Assets"
              suffix="K+"
              gradientFrom="amber-500"
              gradientTo="orange-400"
            />
            <StatCounter
              end={1.0}
              decimals={1}
              label="Views in 2025"
              suffix="Cr+"
              gradientFrom="orange-600"
              gradientTo="amber-400"
            />
          </div>

          <div className="flex flex-row gap-3 md:gap-4 justify-center w-full md:w-auto animate-fade-in-up animation-delay-800">
            <a
              href="#my-work"
              className="group flex-1 md:flex-none px-2 py-2.5 md:px-8 md:py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full text-white text-xs sm:text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap"
            >
              View My Work
              <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex-1 md:flex-none px-2 py-2.5 md:px-8 md:py-4 bg-transparent border-2 border-orange-500 rounded-full text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center whitespace-nowrap"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-orange-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
