import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Building, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';

const TimelineComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const allTimelineData = [
    {
      type: 'experience',
      year: '2024',
      title: 'Software Developer Trainee',
      subtitle: 'Hyscaler',
      description: 'Full Stack Developer specializing in modern web technologies and cloud solutions.',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      type: 'education',
      year: '2024',
      title: 'Master in Computer Application',
      subtitle: 'Veer Surendra Sai University of Technology, Burla',
      description: 'Specialized in Web applications development with focus on frontend frameworks and backend systems.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      type: 'education',
      year: '2022',
      title: "Bachelor of Science",
      subtitle: 'Utkal University',
      description: 'Chemistry major with electives in computational methods and data analysis.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'green',
      gradient: 'from-green-500 to-emerald-400'
    }
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? allTimelineData.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === allTimelineData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate timeline every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const getItemColor = (item, isActive) => {
    if (item.type === 'experience') {
      return isActive ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-blue-600/40';
    } else if (item.color === 'purple') {
      return isActive ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'bg-purple-600/40';
    } else {
      return isActive ? 'bg-gradient-to-r from-green-600 to-emerald-500' : 'bg-green-600/40';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          My Journey
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800/80 p-3 rounded-full text-white hover:bg-gray-700 transition-all z-10 backdrop-blur-sm border border-gray-700 shadow-lg hover:scale-110"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800/80 p-3 rounded-full text-white hover:bg-gray-700 transition-all z-10 backdrop-blur-sm border border-gray-700 shadow-lg hover:scale-110"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Timeline Track */}
          <div className="relative h-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full mb-16 mx-20 overflow-hidden">
            <div className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 rounded-full"
                style={{ width: `${((activeIndex + 1) / allTimelineData.length) * 100}%` }}>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-8">
              {allTimelineData.map((item, index) => (
                <div
                  key={index}
                  className={`w-5 h-5 rounded-full transition-all duration-500 cursor-pointer border-2 z-10
                    ${index === activeIndex ? 'scale-150 shadow-lg shadow-white/20' : 'scale-100'}
                    ${index <= activeIndex ? getItemColor(item, index === activeIndex) : 'bg-gray-600 border-gray-500'}`}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setActiveIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  aria-label={`Timeline point ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Timeline Cards Container */}
          <div className="relative overflow-hidden mx-8 h-96">
            <div 
              className="flex absolute w-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {allTimelineData.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-8"
                >
                  <div 
                    className={`p-8 rounded-2xl h-80
                      bg-gradient-to-br from-gray-800/90 to-gray-900/90
                      backdrop-blur-xl
                      border border-${item.color}-500/30
                      shadow-lg shadow-${item.color}-500/10
                      transform transition-all duration-500 
                      hover:scale-105 hover:shadow-xl hover:shadow-${item.color}-500/20
                      flex flex-col`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg shadow-${item.color}-500/20`}>
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700">
                        <Calendar className="w-5 h-5 text-gray-300" />
                        <span className="text-lg font-semibold text-white">{item.year}</span>
                      </div>
                    </div>

                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-200 mb-4 bg-gray-800/50 px-4 py-2 rounded-lg backdrop-blur-sm self-start">
                      {item.type === 'experience' ? (
                        <Building className="w-5 h-5" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                      <span className="font-medium">{item.subtitle}</span>
                    </div>
                    
                    <p className="text-gray-300 bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm flex-grow border border-gray-700/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {allTimelineData.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`h-3 rounded-full transition-all duration-500
                ${index === activeIndex 
                  ? `w-12 ${getItemColor(item, true)}` 
                  : 'w-3 bg-gray-600 hover:bg-gray-500'}`}
              aria-label={`Go to timeline item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;