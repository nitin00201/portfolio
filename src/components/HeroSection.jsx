import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  Terminal,
  Rocket,
  Star,
  Cpu,
  Database,
  Layout
} from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/nitin00201", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/nitin-kabi-980532247/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "kabinitin2002@gmail.com", label: "Email" }
  ];

  const techIcons = [
    { icon: <Code className="w-6 h-6" />, color: "text-blue-400", label: "Frontend" },
    { icon: <Database className="w-6 h-6" />, color: "text-emerald-400", label: "Backend" },
    { icon: <Layout className="w-6 h-6" />, color: "text-yellow-400", label: "UI/UX" },
    { icon: <Cpu className="w-6 h-6" />, color: "text-pink-400", label: "Systems" },
    { icon: <Rocket className="w-6 h-6" />, color: "text-purple-400", label: "DevOps" },
    { icon: <Star className="w-6 h-6" />, color: "text-orange-400", label: "Innovation" }
  ];

  return (
    <section id='home' className="min-h-screen bg-gradient-to-br from-indigo-950 via-violet-900 to-fuchsia-900 pt-12 overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-0 left-1/4 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 bottom-1/4 right-0 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute w-96 h-96 top-1/3 right-1/4 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-96 h-96 bottom-0 left-0 bg-emerald-500/30 rounded-full blur-3xl animate-pulse delay-1500" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
          {/* Content Section */}
          <div className={`lg:w-1/2 text-center lg:text-left space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-indigo-400/30 backdrop-blur-md mb-8 animate-bounce-slow">
              <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
              <span className="text-gray-200 font-medium">Welcome to my portfolio</span>
            </div>

            {/* Main Heading with enhanced gradient and animation */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold animate-gradient-text">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 to-yellow-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-flow">
                  Nitin
                </span>
              </h1>
              <div className="flex items-center gap-3 justify-center lg:justify-start transition-all duration-700 delay-300">
                <Terminal className="w-6 h-6 text-fuchsia-400 animate-pulse" />
                <h2 className="text-xl lg:text-2xl text-gray-200 font-medium">
                  Full Stack Developer
                </h2>
              </div>
            </div>

            {/* Description with better contrast */}
            <p className="text-lg lg:text-xl text-gray-200 max-w-xl transition-all duration-700 delay-400">
              Specializing in building exceptional digital experiences with Spring Boot & React. 
              Turning ideas into elegant, scalable solutions with a focus on performance and user experience.
            </p>

            {/* Modern CTA Buttons with enhanced hover effects */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start transition-all duration-700 delay-500">
              <a 
                href="#contact" 
                className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transform transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-fuchsia-500/40"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  Contact Me
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="group px-6 py-3 rounded-full bg-gray-800/50 backdrop-blur-md text-white font-semibold flex items-center gap-2 hover:scale-105 transform transition-all duration-300 border border-indigo-400/30 hover:border-indigo-400/60 hover:bg-gray-800/70"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  View Projects
                </span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#" 
                className="group px-6 py-3 rounded-full bg-gray-800/50 backdrop-blur-md text-white font-semibold flex items-center gap-2 hover:scale-105 transform transition-all duration-300 border border-indigo-400/30 hover:border-indigo-400/60 hover:bg-gray-800/70"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  Resume
                </span>
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Animated Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4 transition-all duration-700 delay-600">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group p-3 rounded-full bg-gray-800/60 backdrop-blur-md text-gray-300 hover:text-white hover:bg-indigo-800/60 transition-all duration-300 border border-gray-700 hover:border-indigo-400/60 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <div className="transform transition-transform duration-300 group-hover:rotate-12">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Image Section with enhanced effects */}
          <div className={`lg:w-1/2 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Floating Tech Icons */}
            {techIcons.map((tech, index) => (
              <div 
                key={index}
                className="absolute p-3 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-indigo-400/30 animate-float-random"
                style={{
                  top: `${10 + (index * 15) % 80}%`,
                  left: index % 2 === 0 ? '5%' : '85%',
                  animationDelay: `${index * 0.5}s`,
                  zIndex: 10
                }}
              >
                <div className={`${tech.color} transition-transform hover:scale-110 hover:rotate-12`}>
                  {tech.icon}
                </div>
              </div>
            ))}

            {/* Main Image with enhanced gradient border effect */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>
              <div className="relative p-1">
                <div className="rounded-full overflow-hidden">
                  <img 
                    src="https://t4.ftcdn.net/jpg/02/64/20/25/240_F_264202539_j2iL5jDhKbA1fRLg2FRviTiHYXXXkfVLF.jpg" 
                    alt="Hero" 
                    className="rounded-full w-full max-w-lg mx-auto transform group-hover:scale-105 transition duration-500 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-0 transition duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        @keyframes float-random {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(10px); }
          75% { transform: translateY(-10px) translateX(-5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
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
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-float-random {
          animation: float-random 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-gradient-text {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;