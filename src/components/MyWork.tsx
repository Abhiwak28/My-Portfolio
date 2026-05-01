import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Play } from 'lucide-react';
import { optimizeCloudinaryUrl, getCloudinaryVideoPoster } from '../lib/cloudinary';

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
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551171/video_11_rvjdeb.mp4',
    description: 'Featured work from the portfolio',
  },
  {
    id: 2,
    title: 'Project Showcase 2',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551166/video_10_pnpv9d.mp4',
    description: 'Creative visual storytelling',
  },
  {
    id: 3,
    title: 'Project Showcase 3',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551153/video_18_yuq3em.mov',
    description: 'Impactful digital content',
  },
  {
    id: 4,
    title: 'Project Showcase 4',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551131/video_14_rlabwj.mp4',
    description: 'Creative visual storytelling',
  },
  {
    id: 5,
    title: 'Project Showcase 5',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551066/video_19_ljcl8d.mp4',
    description: 'Featured work from the portfolio',
  },
  {
    id: 6,
    title: 'Project Showcase 6',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551030/video_8_pqs4kz.mp4',
    description: 'High-impact product showcase',
  },
  {
    id: 7,
    title: 'Project Showcase 7',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551001/video_2_pwdhev.mp4',
    description: 'Compelling narrative content',
  },
  {
    id: 8,
    title: 'Project Showcase 8',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551036/video_9_uav9aq.mp4',
    description: 'Creative visual storytelling',
  },
];

const VideoPlayer = ({ videoUrl, isActive, shouldLoad }: { videoUrl: string, isActive: boolean, shouldLoad: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use even lower resolution and bitrate for faster loading
  // Use even lower resolution and bitrate for mobile/laptop performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const optimizedVideoUrl = optimizeCloudinaryUrl(videoUrl, { width: isMobile ? 360 : 480 });
  const posterUrl = getCloudinaryVideoPoster(videoUrl);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isActive, shouldLoad]);

  if (!shouldLoad) {
    return (
      <div className="w-full h-full relative bg-gray-900">
        <img src={posterUrl} className="w-full h-full object-cover opacity-50" alt="Thumbnail" loading="lazy" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Play className="w-10 h-10 text-white/20" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group bg-black">
      <video
        ref={videoRef}
        src={optimizedVideoUrl}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        muted
        loop
        playsInline
        preload={isActive ? "auto" : "metadata"}
        poster={posterUrl}
        onLoadedData={() => setIsLoaded(true)}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
          <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin mb-2"></div>
          <img src={posterUrl} className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" alt="" />
        </div>
      )}

      {isActive && !isPlaying && isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer" onClick={() => videoRef.current?.play()}>
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  );
};

const MyWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          className={`text-center mb-10 md:mb-16 transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-12 blur-sm scale-95'
            }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              My Work
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            A collection of projects that showcase creativity and impact
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ease-out ${hasIntersected ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-12 blur-sm scale-95'
            }`}
        >
          <Swiper
            effect={isMobile ? 'slide' : 'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            speed={isMobile ? 600 : 1000}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper !pb-12"
          >
            {workVideos.map((video) => (
              <SwiperSlide
                key={video.id}
                className="!w-[260px] sm:!w-[320px] md:!w-[380px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl"
              >
                {({ isActive, isNext, isPrev }) => (
                  <div className={`relative w-full h-full transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90'}`}>
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

