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

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      <CustomCursor />
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
