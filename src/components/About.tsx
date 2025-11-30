import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Sparkles, Award, Users, TrendingUp, Video } from 'lucide-react';

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

    const stats = [
        {
            icon: <Video className="w-6 h-6 text-orange-400" />,
            value: '8+ Years',
            label: 'Content Creation Experience',
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
            value: '100K+',
            label: 'Top-performing Reel Reach',
        },
        {
            icon: <Users className="w-6 h-6 text-yellow-400" />,
            value: '40+',
            label: 'Shoots Directed & Managed',
        },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-12 md:py-24 bg-black overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-40 left-[-100px] w-96 h-96 bg-orange-600 rounded-full filter blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-40 right-[-100px] w-96 h-96 bg-amber-600 rounded-full filter blur-[150px] animate-pulse animation-delay-1000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ease-out ${hasIntersected ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-12 blur-sm scale-95'
                            }`}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full border border-orange-500/30 mb-6">
                            <Sparkles className="w-4 h-4 text-orange-400" />
                            <span className="text-sm text-orange-300">The Story Behind CreativeJury</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h2>
                    </div>

                    {/* Original About Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        {/* Left Column - Content */}
                        <div
                            className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${hasIntersected ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-12 blur-sm'
                                }`}
                        >
                            <div className="relative">
                                <h3 className="text-3xl font-bold text-white mb-2">Abhiwak Tiwari</h3>
                                <p className="text-orange-400 font-medium mb-6">Founder, CreativeJury</p>
                                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-amber-500 rounded-full opacity-50"></div>
                            </div>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-justify">
                                <p>
                                    <span className="text-white font-semibold">Namaste, I'm Abhiwak Tiwari 🙏</span>
                                    <br />
                                    I didn't start CreativeJury to just make content. I started it because I saw too many businesses struggling with content that looked good but didn't perform. As someone who grew up analyzing films frame-by-frame and obsessing over why certain moments hit differently, I knew there was a better way.
                                </p>
                                <p>
                                    I create high-performance short-form content that doesn't just look good — it works. Over the years, I've developed a strong understanding of what makes content click. Whenever I write a script or build a concept, I have a sharp sense of whether it will perform. This comes from studying content deeply — not casually consuming it.
                                </p>
                                <p>
                                    Even when I'm watching films or scrolling online, I focus on why a moment works: the framing, pacing, storytelling, and emotional beats. This habit has helped me build a strong creative instinct and deliver consistently high-retention content for my clients.
                                </p>
                                <p>
                                    For the past year, I've been working with a leading educational institute, handling content across multiple faculties and departments. This taught me how to work with different personalities, manage expectations, and deliver content that aligns with each individual's style — while still maintaining high performance.
                                </p>
                                <div className="p-6 bg-gradient-to-r from-orange-900/20 to-amber-900/20 rounded-2xl border border-orange-500/20">
                                    <p className="text-orange-200 italic">
                                        "If you're looking for someone who understands content at a deeper level and can turn ideas into impactful videos, I'm here to help."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Stats & Visuals */}
                        <div
                            className={`space-y-8 transition-all duration-1000 delay-400 ease-out ${hasIntersected ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-12 blur-sm'
                                }`}
                        >
                            <div className="grid grid-cols-3 gap-2 md:gap-6">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="group p-2 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                                    >
                                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                                            <div className="p-2 md:p-3 bg-white/5 rounded-xl group-hover:bg-orange-500/20 transition-colors duration-300">
                                                {stat.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-sm md:text-3xl font-bold text-white mb-0.5 md:mb-1">{stat.value}</h4>
                                                <p className="text-gray-400 text-[10px] md:text-sm leading-tight">{stat.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Image/Element */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                                <img
                                    src="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Content Creation"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 scale-100 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
