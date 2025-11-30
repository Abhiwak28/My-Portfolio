import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants/assets';
import StatCounter from './StatCounter';

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

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 h-12">
            {greetings.map((greeting, index) => (
              <p
                key={greeting}
                className={`text-xl md:text-7xl text-gray-400 mb-4 transition-all duration-500 absolute left-1/2 -translate-x-1/2 ${index === currentGreeting
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
                  }`}
              >
                {greeting}
              </p>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl mt-12 lg:text-8xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
            Abhiwak Tiwari
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            I craft real, story-driven content people watch, remember, and share
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base text-gray-400 mb-12 animate-fade-in-up animation-delay-400">
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-500/20">
              Building Creativejury!
            </span>
            <span className="hidden md:inline text-orange-400">•</span>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-500/20">
              Content Strategist
            </span>
            <span className="hidden md:inline text-orange-400">•</span>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-500/20">
              Content Creator
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up animation-delay-600">
            <StatCounter
              end={100000}
              label="YouTube Subscribers"
              suffix="+"
              gradientFrom="orange-500"
              gradientTo="amber-400"
            />
            <StatCounter
              end={800}
              label="Videos Created"
              suffix="+"
              gradientFrom="amber-500"
              gradientTo="orange-400"
            />
            <StatCounter
              end={10000000}
              label="Views in 2024"
              suffix="+"
              gradientFrom="orange-600"
              gradientTo="amber-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <a
              href="#my-work"
              className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-orange-500 rounded-full text-white font-semibold hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-orange-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
