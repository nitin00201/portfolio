import React, { useEffect, useState, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Coffee,
  Music,
  BookOpen,
  Camera,
  Gamepad2,
  Mountain,
  GraduationCap,
  Award,
  Heart,
  Cpu
} from 'lucide-react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const techStack = {
    frontend: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
    ],
    backend: [
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' }
    ]
  };

  const interests = [
    { icon: <Music className="w-8 h-8" />, name: 'Music', color: 'text-pink-400', bgColor: 'from-pink-500/20 to-rose-500/20' },
    { icon: <BookOpen className="w-8 h-8" />, name: 'Reading', color: 'text-emerald-400', bgColor: 'from-emerald-500/20 to-teal-500/20' },
    { icon: <Camera className="w-8 h-8" />, name: 'Photography', color: 'text-blue-400', bgColor: 'from-blue-500/20 to-sky-500/20' },
    { icon: <Gamepad2 className="w-8 h-8" />, name: 'Gaming', color: 'text-purple-400', bgColor: 'from-purple-500/20 to-violet-500/20' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-indigo-950 via-violet-900 to-fuchsia-900 w-full mx-auto relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-0 right-1/4 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bottom-1/3 left-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute w-96 h-96 top-1/2 right-0 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1500" />
        
        {/* Animated code particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-gray-500/20 text-4xl font-mono opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-code ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['{ }', '< >', '( )', '[]', '//', '**', ';;', '==', '&&'][Math.floor(Math.random() * 9)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 w-full relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-flow">
            About Me
          </h2>
          
          <div className="flex flex-col items-center justify-between gap-12">
            {/* Main Content Section */}
            <div className="w-full space-y-8 max-w-5xl mx-auto">
              {/* Profile Card */}
              <div 
                className={`p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-indigo-500/30 backdrop-blur-md shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>
                    {/* <div className="relative">
                      <img 
                        src="https://t4.ftcdn.net/jpg/00/94/88/19/240_F_94881945_nhV1LG78QOf0FR6SEbmEuiuzvQQi3c7h.jpg" 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full object-cover border-2 border-indigo-500/30"
                      />
                    </div> */}
                  </div>
                  
                  <div className="space-y-3 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center md:justify-start gap-3 text-white">
                      <Code2 className="w-8 h-8 text-blue-400 animate-pulse" />
                      Full Stack Developer
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      I'm a passionate developer with expertise in building modern web applications.
                      I specialize in Spring Boot for backend development and React for frontend interfaces,
                      creating seamless and responsive user experiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Grid */}
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '400ms' }}
              >
                {/* Frontend */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 backdrop-blur-md hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
                    <Layout className="w-6 h-6 text-blue-400" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-400 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-in-out group-hover:after:scale-x-100 after:origin-bottom-left">
                      Frontend Technologies
                    </span>
                  </h4>
                  <div className="space-y-4">
                    {techStack.frontend.map((tech, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transform hover:-translate-x-1 transition-all duration-300"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 p-2 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                          <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                        </div>
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 backdrop-blur-md hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
                    <Server className="w-6 h-6 text-purple-400" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-purple-400 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-in-out group-hover:after:scale-x-100 after:origin-bottom-left">
                      Backend Technologies
                    </span>
                  </h4>
                  <div className="space-y-4">
                    {techStack.backend.map((tech, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 transform hover:-translate-x-1 transition-all duration-300"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 p-2 animate-float" style={{ animationDelay: `${index * 0.5 + 1}s` }}>
                          <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                        </div>
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

             

              {/* Interests */}
              <div 
                className={`p-6 rounded-xl  bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/30 backdrop-blur-md transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '800ms' }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white text-center flex items-center justify-center gap-3">
                  <Award className="w-6 h-6 text-pink-400" />
                  Interests & Hobbies
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {interests.map((interest, index) => (
                    <div 
                      key={index} 
                      className={`flex flex-col justify-center items-center gap-3 p-4 rounded-lg bg-gradient-to-br ${interest.bgColor} border border-gray-700/50 hover:border-gray-500/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`${interest.color} group-hover:animate-bounce-gentle transition-all duration-300`}>
                        {interest.icon}
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div 
                className={`p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/30 backdrop-blur-md transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '1000ms' }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white text-center flex items-center justify-center gap-3">
                  <Cpu className="w-6 h-6 text-amber-400" />
                  Skills Proficiency
                </h4>
                
                <div className="space-y-4">
                  {[
                    { name: 'Frontend Development', percentage: 90, color: 'from-blue-400 to-blue-600' },
                    { name: 'Backend Development', percentage: 85, color: 'from-purple-400 to-purple-600' },
                    { name: 'UI/UX Design', percentage: 80, color: 'from-pink-400 to-pink-600' },
                    { name: 'Database Management', percentage: 75, color: 'from-emerald-400 to-emerald-600' },
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full progress-animation`} 
                          style={{ 
                            width: `${skill.percentage}%`,
                            animationDelay: `${index * 0.2 + 1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        @keyframes float-code {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-flow {
          background-size: 300% 300%;
          animation: gradient-flow 5s ease infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .progress-animation {
          animation: progress-grow 1.5s ease-out forwards;
          transform-origin: left;
          transform: scaleX(0);
        }
        
        @keyframes progress-grow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;