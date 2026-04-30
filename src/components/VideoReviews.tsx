import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Play } from 'lucide-react';

const VIDEO_REVIEWS = [
  {
    id: 3,
    thumbnail: '/images/video-review-aseem.jpg',
    link: 'https://drive.google.com/file/d/1d4Enu5dp7XFPQAAyRd2LIzfktmpdycll/view?usp=drive_link',
    alt: 'CA Aseem Trivedi Review'
  },
  {
    id: 2,
    thumbnail: '/images/video-review-poonam.jpg',
    link: 'https://drive.google.com/file/d/1TjgJZy3cTY0Q0NehXK-GIwoMRCPMWL77/view?usp=drive_link',
    alt: 'CA Poonam Makhija Review'
  },
  {
    id: 4,
    thumbnail: '/images/video-review-nikhil.jpg',
    link: 'https://drive.google.com/file/d/1XSk7YEAyEqKCPvx95iOyLq1mWjzIGu3-/view?usp=drive_link',
    alt: 'CA Nikhil Gokhru Review'
  },
  {
    id: 5,
    thumbnail: '/images/video-review-harsh.jpg',
    link: 'https://drive.google.com/file/d/1k57gseFAGeUs873RRHslmJT3YbALC2G_/view?usp=drive_link',
    alt: 'CA Harsh Somani Review'
  },
  {
    id: 1,
    thumbnail: '/images/video-review-sunil.jpg',
    link: 'https://drive.google.com/file/d/1pt3KKj2rf00HN-W2oEQG7rRvVY7T9Qw5/view?usp=drive_link',
    alt: 'Dr. Sunil Khatri Review'
  }
];

const VideoReviews = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-orange-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Client Voices
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Testimonials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {VIDEO_REVIEWS.map((review, index) => (
            <a
              key={review.id}
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-full aspect-[9/16] rounded-2xl overflow-hidden block transition-all duration-1000 ease-out ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Cover Image */}
              <img
                src={review.thumbnail}
                alt={review.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                {/* Play Button */}
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md transform scale-50 group-hover:scale-100 transition-transform duration-500 border border-white/30 shadow-2xl">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Always-visible Play Icon (Bottom Right) */}
              <div className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full backdrop-blur-md group-hover:opacity-0 transition-opacity duration-300">
                <Play className="w-4 h-4 text-orange-400" fill="currentColor" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
