import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FollowerGrowth from './components/FollowerGrowth';
import WhyHireMe from './components/WhyHireMe';
import WhatsSpecial from './components/WhatsSpecial';
import WhatIDo from './components/WhatIDo';
import MyWork from './components/MyWork';
import ReelsGallery from './components/ReelsGallery';
import Testimonials from './components/Testimonials';
import VideoReviews from './components/VideoReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';


import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay animate-noise"></div>

      <ScrollProgress />
      <Navbar />
      <Hero />
      <WhatIDo />
      <MyWork />
      <ReelsGallery />
      <FollowerGrowth />
      <WhyHireMe />
      <WhatsSpecial />
      <Testimonials />
      <VideoReviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
