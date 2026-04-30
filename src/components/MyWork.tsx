import { useRef, useEffect } from 'react';
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
  {
    id: 10,
    title: 'Project Showcase 10',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project10,
    description: 'Impactful digital content',
  },
  {
    id: 11,
    title: 'Project Showcase 11',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project11,
    description: 'Creative visual storytelling',
  },
  {
    id: 12,
    title: 'Project Showcase 12',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project12,
    description: 'High-impact product showcase',
  },
  {
    id: 13,
    title: 'Project Showcase 13',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project13,
    description: 'Compelling narrative content',
  },
  {
    id: 14,
    title: 'Project Showcase 14',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project14,
    description: 'Creative visual storytelling',
  },
  {
    id: 15,
    title: 'Project Showcase 15',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project15,
    description: 'Featured work from the portfolio',
  },
  {
    id: 16,
    title: 'Project Showcase 16',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project16,
    description: 'Impactful digital content',
  },
  {
    id: 17,
    title: 'Project Showcase 17',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project17,
    description: 'Creative visual storytelling',
  },
  {
    id: 18,
    title: 'Project Showcase 18',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project18,
    description: 'Featured work from the portfolio',
  },
  {
    id: 19,
    title: 'Project Showcase 19',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project19,
    description: 'High-impact product showcase',
  },
  {
    id: 20,
    title: 'Project Showcase 20',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: ASSETS.videos.work.project20,
    description: 'Impactful digital content',
  },
];

const VideoPlayer = ({ videoUrl, isActive, shouldLoad }: { videoUrl: string, isActive: boolean, shouldLoad: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-generate Cloudinary poster by replacing video extension with .jpg
  const posterUrl = videoUrl.includes('cloudinary.com') 
    ? videoUrl.replace(/\.(mp4|mov)$/i, '.jpg')
    : undefined;

  // Play or pause the video based on whether the slide is active
  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive, shouldLoad]);

  if (!shouldLoad) {
    return <img src={posterUrl} className="w-full h-full object-cover" alt="Thumbnail" />;
  }

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      muted
      loop
      playsInline
      preload="auto"
      poster={posterUrl}
    >
      <source src={videoUrl} type={videoUrl.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
    </video>
  );
};

const MyWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="my-work"
      ref={sectionRef}
      className="relative py-12 md:py-24 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-12 blur-sm scale-95'
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
          className={`transition-all duration-1000 delay-300 ease-out ${hasIntersected ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-12 blur-sm scale-95'
            }`}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 4000,
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
            {workVideos.map((video) => (
              <SwiperSlide
                key={video.id}
                className="!w-[300px] sm:!w-[350px] md:!w-[400px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-gray-900"
              >
                {({ isActive, isNext, isPrev }) => (
                  <div className={`relative w-full h-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                    <VideoPlayer 
                      videoUrl={video.videoUrl} 
                      isActive={isActive} 
                      shouldLoad={isActive || isNext || isPrev} 
                    />
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
