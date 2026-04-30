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
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551171/video_11_rvjdeb.mp4',
    description: 'Featured work from the portfolio',
  },
  {
    id: 2,
    title: 'Project Showcase 2',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551166/video_10_pnpv9d.mp4',
    description: 'Creative visual storytelling',
  },
  {
    id: 3,
    title: 'Project Showcase 3',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551153/video_18_yuq3em.mov',
    description: 'Impactful digital content',
  },
  {
    id: 4,
    title: 'Project Showcase 4',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551131/video_14_rlabwj.mp4',
    description: 'Creative visual storytelling',
  },
  {
    id: 5,
    title: 'Project Showcase 5',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551066/video_19_ljcl8d.mp4',
    description: 'Featured work from the portfolio',
  },
  {
    id: 6,
    title: 'Project Showcase 6',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551030/video_8_pqs4kz.mp4',
    description: 'High-impact product showcase',
  },
  {
    id: 7,
    title: 'Project Showcase 7',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551001/video_2_pwdhev.mp4',
    description: 'Compelling narrative content',
  },
  {
    id: 8,
    title: 'Project Showcase 8',
    category: 'Highlight',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://res.cloudinary.com/duv7rnryk/video/upload/v1777551036/video_9_uav9aq.mp4',
    description: 'Creative visual storytelling',
  },
];

const VideoPlayer = ({ videoUrl, isActive, shouldLoad }: { videoUrl: string, isActive: boolean, shouldLoad: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Optimize video and poster URLs for faster loading
  const optimizedVideoUrl = videoUrl.includes('cloudinary.com') 
    ? videoUrl.replace('/upload/', '/upload/f_auto,q_auto/')
    : videoUrl;

  const posterUrl = videoUrl.includes('cloudinary.com') 
    ? videoUrl.replace('/upload/', '/upload/f_auto,q_auto/').replace(/\.(mp4|mov)$/i, '.jpg')
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
      <source src={optimizedVideoUrl} type={optimizedVideoUrl.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
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
              delay: 5000,
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
