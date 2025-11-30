import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowUpRight } from 'lucide-react';

const ModernFolder = () => (
    <svg viewBox="0 0 100 85" className="w-full h-full drop-shadow-2xl overflow-visible">
        <defs>
            {/* Pure Glass Gradient */}
            <linearGradient id="glassSurface" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.05)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
            </linearGradient>

            {/* Orange Hover Gradient */}
            <linearGradient id="orangeHoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(249, 115, 22, 0.6)" /> {/* Orange-500 */}
                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.4)" /> {/* Amber-400 */}
            </linearGradient>

            {/* Glass Edge/Rim */}
            <linearGradient id="glassEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
            </linearGradient>

            {/* Glossy Sheen */}
            <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.1)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
            </linearGradient>
        </defs>

        {/* Back Plate (Darkened Glass) */}
        <path
            d="M10 20 C10 14.477 14.477 10 20 10 L40 10 C42 10 44 12 45 14 L50 20 L90 20 C95.523 20 100 24.477 100 30 L100 75 C100 80.523 95.523 85 90 85 L10 85 C4.477 85 0 80.523 0 75 L0 30 C0 24.477 4.477 20 10 20 Z"
            fill="rgba(255, 255, 255, 0.05)"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
        />

        {/* Paper Insert (Clean White) */}
        <g className="transition-transform duration-500 origin-bottom group-hover:-translate-y-5 group-hover:scale-y-105">
            <rect x="15" y="25" width="70" height="55" rx="2" fill="white" opacity="0.9" />
            {/* Minimal Text Lines */}
            <rect x="22" y="35" width="30" height="2" rx="1" fill="#d1d5db" />
            <rect x="22" y="42" width="56" height="2" rx="1" fill="#d1d5db" />
            <rect x="22" y="49" width="40" height="2" rx="1" fill="#d1d5db" />
        </g>

        {/* Front Plate (Pure Glass) */}
        <g className="transition-all duration-500 origin-bottom group-hover:[transform:rotateX(-20deg)_scaleY(0.95)]" style={{ transformStyle: 'preserve-3d' }}>
            {/* Glass Body (Base) */}
            <path
                d="M0 35 C0 29.477 4.477 25 10 25 L90 25 C95.523 25 100 29.477 100 35 L100 75 C100 80.523 95.523 85 90 85 L10 85 C4.477 85 0 80.523 0 75 L0 35 Z"
                fill="url(#glassSurface)"
            />

            {/* Orange Hover Overlay */}
            <path
                d="M0 35 C0 29.477 4.477 25 10 25 L90 25 C95.523 25 100 29.477 100 35 L100 75 C100 80.523 95.523 85 90 85 L10 85 C4.477 85 0 80.523 0 75 L0 35 Z"
                fill="url(#orangeHoverGradient)"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Glossy Sheen Overlay */}
            <path
                d="M0 35 C0 29.477 4.477 25 10 25 L90 25 C95.523 25 100 29.477 100 35 L100 75 C100 80.523 95.523 85 90 85 L10 85 C4.477 85 0 80.523 0 75 L0 35 Z"
                fill="url(#glassSheen)"
                style={{ mixBlendMode: 'overlay' }}
            />

            {/* Sharp Glass Rim */}
            <path
                d="M1 36 C1 31.029 5.029 26 10 26 L90 26 C94.971 26 99 30.029 99 35 L99 75 C99 79.971 94.971 84 90 84 L10 84 C5.029 84 1 79.971 1 75 L1 36 Z"
                fill="none"
                stroke="url(#glassEdge)"
                strokeWidth="1.5"
                className="group-hover:stroke-orange-300/50 transition-colors duration-500"
            />

            {/* Reflection Line */}
            <path
                d="M10 36 L90 36"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1"
                strokeLinecap="round"
            />
        </g>
    </svg>
);

const FolderSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

    const folders = [
        { title: "My UGC Content.", link: "#" },
        { title: "Ads Which i created.", link: "#" },
        { title: "Client Work.", link: "#" },
        { title: "Event Videos", link: "#" }
    ];

    return (
        <section
            id="folder-section"
            ref={sectionRef}
            className="relative py-32 bg-black overflow-hidden"
        >
            {/* Background Ambient Glow - Kept very subtle and neutral */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className={`max-w-7xl mx-auto transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Folders Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                        {folders.map((folder, index) => (
                            <a
                                key={index}
                                href={folder.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center gap-8 cursor-pointer perspective-[1000px]"
                            >
                                {/* Folder Icon Container */}
                                <div className="relative w-44 h-36 transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-110">
                                    {/* Subtle Glass Shadow/Glow - Turns Orange on Hover */}
                                    <div className="absolute inset-4 bg-white/10 blur-3xl rounded-full opacity-0 group-hover:bg-orange-500/30 group-hover:opacity-60 transition-all duration-500"></div>

                                    <ModernFolder />
                                </div>

                                <div className="space-y-2 text-center">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors drop-shadow-lg">
                                        {folder.title}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 group-hover:text-orange-300 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                        <span className="uppercase tracking-wider font-medium">Open</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Text Content */}
                    <div className="relative">
                        {/* Decorative Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

                        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    Opening up <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">more...</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                                    I'm not trying to brag, but honestly, it happens a lot. When I write a script, I kinda know when it's going to click. I think I've just picked up the pulse of content over time. Maybe it's because I watch so much stuff. Even when I'm watching a movie, I don't just watch it for timepass. I keep noticing how it's shot, how the story is told, what makes it work. It's just become a habit now.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    Some Truths <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">About me.</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                                    I've been working with a big institute for the past year, and the experience has been huge for me. In an institute, it's never just one client. You deal with multiple faculties, students, and their different styles. Handling all of that taught me how to manage people, understand what they need, and create content that actually works for everyone there.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FolderSection;
