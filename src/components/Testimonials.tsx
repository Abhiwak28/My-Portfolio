import { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { X, FolderOpen } from 'lucide-react';

const MEDIA_ITEMS = [
  {
    id: 1,
    src: '/images/whatsapp-review-1-v3.png',
    quote: 'Nobody can make out that it was all done on a green screen. Your skills are really good.',
    author: 'Deepak Mulchandani Sir'
  },
  {
    id: 2,
    src: '/images/whatsapp-review-2-v3.png',
    quote: 'Bht shandaar post bhai ❤️',
    author: 'Rohit Khandelwal Sir'
  },
  {
    id: 3,
    src: '/images/whatsapp-review-3-v3.png',
    quote: 'Ab aayega maja bhidu! Agli kab record karna hai dhasoon idea aaya hai.',
    author: 'CA Aseem Trivedi Sir'
  },
  {
    id: 4,
    src: '/images/whatsapp-review-4-v3.png',
    quote: 'We gained 3000 followers organically in last 9 days! Sir strategy wins over just shooting.',
    author: 'Nahata Content Hub'
  },
  {
    id: 5,
    src: '/images/whatsapp-review-5-v3.png',
    quote: 'Jabardast viral ho gayi he! We gained good no of followers because of this reel.',
    author: 'Nahata Content Hub'
  },
  {
    id: 6,
    src: '/images/whatsapp-review-6-v3.png',
    quote: 'Bhai kal ka rakh lo to better hoga. And thanks for Excellent work done by you for CA foundation exam reel.',
    author: 'CA Foundation Client'
  },
  {
    id: 7,
    src: '/images/whatsapp-review-7-v3.png',
    quote: 'Excellent 🙏',
    author: 'Saurabh Sir'
  },
  {
    id: 8,
    src: '/images/whatsapp-review-8-v3.png',
    quote: 'very good output abhiwak such a nice song such angles... a simple thing turned out to be so beautiful',
    author: 'Music Video Client'
  },
  {
    id: 9,
    src: '/images/whatsapp-review-9-v3.png',
    quote: 'Perfect bhai ..thank you so much 😊',
    author: 'Happy Client'
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Link to Google Drive
  const driveLink = "#";

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-12 blur-sm scale-95'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent capitalize">
              Happy Clients
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Real WhatsApp conversations and feedback from the creators and brands I've worked with.
          </p>

        </div>

        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ease-out ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 items-center">
            {MEDIA_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="relative cursor-pointer hover:scale-[1.05] transition-transform duration-300 drop-shadow-xl flex justify-center w-full"
                onClick={() => setExpandedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={`Review from ${item.author}`}
                  className="w-full h-auto object-contain rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=400';
                  }}
                />
              </div>
            ))}
          </div>

          {/* "& more.." Text */}
          <div className="mt-10 flex items-center justify-center">
            <span className="text-2xl md:text-4xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent italic tracking-tight drop-shadow-md">
              &amp; more...
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox for Images */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setExpandedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setExpandedImage(null);
            }}
          >
            <X size={24} />
          </button>
          <img
            src={expandedImage}
            alt="Expanded Proof"
            className="max-w-full max-h-[90vh] object-contain rounded-lg border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=800';
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Testimonials;
