import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Building, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';

const TimelineComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const allTimelineData = [
    {
      type: 'experience',
      year: '2024',
      title: 'software Developer Trainee',
      subtitle: 'Hyscaler',
      description: 'Full Stack Developer',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'blue'
    },
    {
      type: 'education',
      year: '2024',
      title: 'Master in computer application',
      subtitle: 'Veer Surendra Sai University of Technology, Burla',
      description: 'Specialized in Web applications development ',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'purple'
    },
    {
      type: 'education',
      year: '2022',
      title: "Bachelor of Science",
      subtitle: 'Utkal University',
      description: 'Chemistry',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'purple'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? allTimelineData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === allTimelineData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Career Timeline
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Timeline Track */}
          <div className="relative h-1 bg-gray-700 rounded-full mb-12 mx-16">
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-8">
              {allTimelineData.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer
                    ${index === activeIndex ? 'scale-150' : 'scale-100'}
                    ${index <= activeIndex ? 'bg-blue-500' : 'bg-gray-600'}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Timeline Cards Container */}
          <div className="relative overflow-hidden mx-16">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {allTimelineData.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div 
                    className={`p-6 rounded-xl bg-gradient-to-br 
                      ${item.type === 'experience' 
                        ? 'from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20' 
                        : 'from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20'
                      }
                      border border-gray-700 backdrop-blur-sm
                      transform transition-all duration-300 hover:scale-105
                      animate-fadeIn`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${item.type === 'experience' ? 'bg-blue-500/20' : 'bg-purple-500/20'}`}>
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-lg font-semibold text-gray-300">{item.year}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300 mb-3">
                      {item.type === 'experience' ? (
                        <Building className="w-5 h-5" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                      <span className="font-medium">{item.subtitle}</span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {allTimelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${index === activeIndex 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;