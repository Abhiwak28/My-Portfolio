import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ASSETS } from '../constants/assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const workVideos = [
  {
    id: 1,
    title: 'Project Showcase 1',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.brandStory,
    description: 'Featured work from the portfolio',
  },
  {
    id: 2,
    title: 'Project Showcase 2',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.productLaunch,
    description: 'Creative visual storytelling',
  },
  {
    id: 3,
    title: 'Project Showcase 3',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.documentary,
    description: 'Impactful digital content',
  },
  {
    id: 4,
    title: 'Project Showcase 4',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project4,
    description: 'Creative visual storytelling',
  },
  {
    id: 5,
    title: 'Project Showcase 5',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project5,
    description: 'Featured work from the portfolio',
  },
  {
    id: 6,
    title: 'Project Showcase 6',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project6,
    description: 'High-impact product showcase',
  },
  {
    id: 7,
    title: 'Project Showcase 7',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project7,
    description: 'Compelling narrative content',
  },
  {
    id: 8,
    title: 'Project Showcase 8',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project8,
    description: 'Creative visual storytelling',
  },
  {
    id: 9,
    title: 'Project Showcase 9',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project9,
    description: 'Featured work from the portfolio',
  },
];

const MyWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="my-work"
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              My Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase creativity and impact
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper !pb-12"
          >
            {[...workVideos, ...workVideos, ...workVideos].map((video, index) => (
              <SwiperSlide
                key={`${video.id}-${index}`}
                className="!w-[300px] sm:!w-[350px] md:!w-[400px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-gray-900"
              >
                {({ isActive }) => (
                  <div
                    className={`relative w-full h-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-100'
                      }`}
                  >
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                      <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs text-orange-300 mb-2">
                        {video.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section >
  );
};

export default MyWork;
