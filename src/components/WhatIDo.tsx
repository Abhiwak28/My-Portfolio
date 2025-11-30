import { useRef, useState, useEffect } from 'react';
import {
  Video,
  Users,
  FileText,
  Megaphone,
  TrendingUp,
  Globe,
  Film,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Video,
    title: 'Content Creation',
    description: 'Engaging videos that resonate with your audience',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Personal Branding',
    description: 'Build your unique identity and presence',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: FileText,
    title: 'Script Writing',
    description: 'Compelling narratives that drive engagement',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Megaphone,
    title: 'Ad Creation',
    description: 'Powerful ads that convert viewers to customers',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: TrendingUp,
    title: 'Content Strategy',
    description: 'Data-driven approach to content success',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing solutions',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'High-quality editing for stunning visuals',
    gradient: 'from-rose-500 to-orange-500',
  },
];

const workImages = [
  '/images/DSC01134.JPG',
  '/images/DSC01134.JPG', // Duplicated for now since we only have 1 image
  '/images/DSC01134.JPG',
];

const WhatIDo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % workImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % workImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + workImages.length) % workImages.length);
  };

  return (
    <section
      id="what-i-do"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-black via-violet-950/10 to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive content solutions tailored to your brand's needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all duration-500"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-20 -mt-20"></div>

                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-current/20`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`relative rounded-2xl overflow-hidden border border-white/10 transition-all duration-1000 h-full min-h-[500px] ${hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="relative h-full">
              {workImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Work ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                {workImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                      ? 'bg-orange-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500/50 transition-colors duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-500/50 transition-colors duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-16 left-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-2">My Work Gallery</h3>
                <p className="text-gray-300 text-sm">
                  Explore creative projects and content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
