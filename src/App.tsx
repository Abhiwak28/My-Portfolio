import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import MyWork from './components/MyWork';
import HowIWork from './components/HowIWork';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FolderSection from './components/FolderSection';
import CustomCursor from './components/CustomCursor';

import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-none relative">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay animate-noise"></div>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <WhatIDo />
      <MyWork />
      <FolderSection />
      <HowIWork />
      <CaseStudies />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
