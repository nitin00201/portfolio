import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { ChevronUp } from 'lucide-react';

const Navbar = lazy(() => import('./Navbar'));
const HeroSection = lazy(() => import('./HeroSection'));
const AboutMe = lazy(() => import('./AboutMe'));
const TimelineComponent = lazy(() => import('./TimelineComponent'));
const ProjectsSection = lazy(() => import('./ProjectsSection'));
const ResumeDownload = lazy(() => import('./ResumeDownload'));
const ContactSection = lazy(() => import('./ContactSection'));

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-gray-50">
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <TimelineComponent />
        <ProjectsSection />
        <ResumeDownload />
        <ContactSection />
      </Suspense>

      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
