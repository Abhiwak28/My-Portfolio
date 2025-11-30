import { Instagram, Linkedin, Youtube, Heart, Shirt } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 md:py-12 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-t from-orange-900/40 to-amber-900/40 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <a
                    href="#contact"
                    className="block w-full text-center mb-12 md:mb-20 group"
                >
                    <h2 className="text-[12vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-500 scale-100 group-hover:scale-105 transform origin-center">
                        LET'S CREATE
                    </h2>
                </a>

                <div className="flex flex-col items-center justify-center gap-8">

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.instagram.com/heyabhiwak?igsh=aTQzZWJ5NG43YThh&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-pink-500/50 hover:scale-110 transition-all duration-300"
                        >
                            <Instagram className="w-6 h-6 text-gray-400 group-hover:text-pink-500 transition-colors" />
                        </a>
                        <a
                            href="https://youtube.com/@pokechatterat?si=obl_DGc83dw1USIA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-red-500/50 hover:scale-110 transition-all duration-300"
                        >
                            <Youtube className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhiwaktiwari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
                        >
                            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </a>
                        <a
                            href="https://www.instagram.com/bleedyoursport?igsh=MWlmNWI2emw0aHNkeA%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-orange-500/50 hover:scale-110 transition-all duration-300"
                        >
                            <Shirt className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    {/* Credits */}
                    <div className="text-center space-y-2">
                        <p className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by school friend <strong>Chirag Patil</strong>
                        </p>
                    </div>

                    <div className="text-xs text-gray-600 mt-4">
                        © {new Date().getFullYear()} All rights reserved.
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
