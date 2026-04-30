import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const logos = [
  { name: 'Nahata Professional Academy', src: '/images/npa-logo.png' },
  { name: 'Digital Motion Academy', src: '/images/dma-logo.png' },
  { name: 'Skills Elephant', src: '/images/skills-elephant-logo.png' },
  { name: 'Community', src: '/images/community-logo.png' },
  { name: 'Akshobh Veda', src: '/images/akshobh-veda-logo.png' },
];

const TrustedBy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className={`text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] font-semibold transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Trusted by innovative institutes
        </h3>
      </div>
      
      <div className={`relative flex overflow-x-hidden transition-all duration-1000 delay-300 ease-out ${hasIntersected ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-marquee whitespace-nowrap flex items-center py-4">
          {/* We duplicate the logos array multiple times to create a seamless infinite scroll */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-8 md:mx-16 flex items-center justify-center group w-32 md:w-48 h-20">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default TrustedBy;
