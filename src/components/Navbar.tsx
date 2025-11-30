import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);

      const sections = ['home', 'what-i-do', 'my-work', 'about'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'My Work', 'About'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg shadow-orange-500/10'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              AT
            </div>
            <Sparkles className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link, index) => {
                const linkId = link.toLowerCase().replace(' ', '-');
                const isActive = activeLink === linkId;
                return (
                  <a
                    key={index}
                    href={`#${linkId}`}
                    className={`text-sm transition-colors duration-300 relative group ${isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                    ></span>
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/90 backdrop-blur-lg rounded-2xl border border-white/10 animate-fade-in-up space-y-2">
            {navLinks.map((link, index) => {
              const linkId = link.toLowerCase().replace(' ', '-');
              const isActive = activeLink === linkId;
              return (
                <a
                  key={index}
                  href={`#${linkId}`}
                  className={`block py-3 px-4 rounded-lg mx-2 transition-all duration-300 ${isActive
                    ? 'text-white bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-orange-500/10'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              );
            })}
            <a
              href="#contact"
              className="block mx-2 mt-4 px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg text-white text-center font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
