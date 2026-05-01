import { useRef } from 'react';
import {
  Video,
  Users,
  FileText,
  Megaphone,
  TrendingUp,
  Globe,
  Film,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Video,
    title: 'Content Creation',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Personal Branding',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: FileText,
    title: 'Script Writing',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Megaphone,
    title: 'Ad Creation',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: TrendingUp,
    title: 'Content Strategy',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Film,
    title: 'Video Editing',
    gradient: 'from-rose-500 to-orange-500',
  },
];

const WhatIDo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="what-i-do"
      ref={sectionRef}
      className="relative py-12 md:py-20 bg-black overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-10 transition-all duration-1000 ease-out ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] font-semibold mb-3">
            The Arsenal
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-white">
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Do</span>
            </span>
          </h2>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`${
                    hasIntersected ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                  } transition-all duration-700 ease-out`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="group flex items-center gap-2 md:gap-4 bg-white/10 md:bg-white/5 border border-white/10 px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-full md:backdrop-blur-md hover:bg-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-default">
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="text-gray-200 font-semibold text-xs sm:text-sm md:text-base group-hover:text-white transition-colors whitespace-nowrap">
                      {service.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
