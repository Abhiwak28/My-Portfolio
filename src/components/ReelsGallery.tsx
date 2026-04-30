import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Play } from 'lucide-react';

const REELS = [
  {
    id: 1,
    title: 'IPL Auction Reaction',
    views: '651K+',
    thumbnail: '/images/reel1.jpg',
    link: 'https://www.instagram.com/reel/DSaCUXdCMzp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 2,
    title: 'Business Law Exam',
    views: '259K+',
    thumbnail: '/images/reel2.jpg',
    link: 'https://www.instagram.com/reel/DR9lCyiiLAg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 3,
    title: 'CA Foundation Update',
    views: '215K+',
    thumbnail: '/images/reel3.jpg',
    link: 'https://www.instagram.com/reel/DC6wiqrynlq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 4,
    title: 'CA Foundation Strategy',
    views: '248K+',
    thumbnail: '/images/reel4.jpg',
    link: 'https://www.instagram.com/reel/DBx1bolyBgo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 5,
    title: 'Happy Wali Diwali',
    views: '391K+',
    thumbnail: '/images/reel5.jpg',
    link: 'https://www.instagram.com/reel/DTNkWWvCCQg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 6,
    title: 'Consistent 50K+ Hits',
    views: '50K+',
    thumbnail: '/images/reel6.jpg',
    link: 'https://www.instagram.com/reel/DTF3F1-Eskf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 7,
    title: 'New Reel 7',
    views: '10K+',
    thumbnail: '/images/reel7.jpg',
    link: 'https://www.instagram.com/reel/DTQHn8tCAN9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    id: 8,
    title: 'New Reel 8',
    views: '10K+',
    thumbnail: '/images/reel8.jpg',
    link: '#',
  },
];

const ReelsGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="reels-gallery"
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-[150px] -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {REELS.map((reel, index) => (
            <a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-[9/16] rounded-2xl overflow-hidden block transition-all duration-1000 ease-out ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Cover Image */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md transform scale-50 group-hover:scale-100 transition-transform duration-500 border border-white/30">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Bottom Gradient for visual depth */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsGallery;
