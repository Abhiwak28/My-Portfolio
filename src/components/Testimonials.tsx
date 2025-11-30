import { useRef, useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Founder, EduTech Startup',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Working with Abhiwak transformed our Instagram presence. His content strategy drove 180% more engagement and helped us reach 100K followers in just 3 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'CEO, D2C Fashion Brand',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The UGC campaign created by Abhiwak reduced our CPA by 40% while tripling our conversion rates. His understanding of consumer psychology is exceptional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ananya Kapoor',
    role: 'Marketing Head, Tech Company',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Abhiwak creates content that resonates. His storytelling approach helped us connect with our audience authentically and drive real business results.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Founder, FinTech Startup',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Professional, creative, and results-driven. Abhiwak delivered beyond expectations and helped us build a strong brand presence on social media.',
    rating: 3,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className={`relative transition-all duration-1000 ${hasIntersected ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          >
            <div className="relative min-h-[400px] bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
              <div className="absolute top-8 left-8 text-orange-500/20">
                <Quote className="w-20 h-20" />
              </div>

              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-center transition-all duration-700 ${index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : index < activeIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                    }`}
                >
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                      {testimonial.content}
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/50">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-amber-500/5 to-orange-500/0 pointer-events-none"></div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${index === activeIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-amber-500'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 transition-all duration-1000 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative p-4 bg-gradient-to-br from-white/5 to-transparent rounded-xl border transition-all duration-300 hover:scale-105 ${index === activeIndex
                  ? 'border-orange-500 shadow-lg shadow-orange-500/50'
                  : 'border-white/10 hover:border-white/30'
                  }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-gray-400 line-clamp-1">{testimonial.role}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
