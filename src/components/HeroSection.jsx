import React from 'react';
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
  Star
} from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/nitin00201", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/nitin-kabi-980532247/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "kabinitin2002@gmail.com", label: "Email" }
  ];

  return (
    <section id='home' className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-12 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-700 backdrop-blur-sm mb-8 animate-fadeIn">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-7xl font-bold animate-fadeInUp">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Nitin
                </span>
              </h1>
              <div className="flex items-center gap-3 justify-center lg:justify-start animate-fadeInUp delay-200">
                <Terminal className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl lg:text-2xl text-gray-300">
                  Full Stack Developer
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-400 max-w-xl animate-fadeInUp delay-300">
              Specializing in building exceptional digital experiences with Spring Boot & React. 
              Turning ideas into elegant, scalable solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start animate-fadeInUp delay-400">
              <a 
                href="#contact" 
                className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="group px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold flex items-center gap-2 hover:scale-105 transform transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                View Projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#" 
                className="group px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold flex items-center gap-2 hover:scale-105 transform transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                Resume
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4 animate-fadeInUp delay-500">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative animate-fadeIn delay-300">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700" />
            
            {/* Tech Stack Floating Elements */}
            <div className="absolute top-0 left-0 p-3 rounded-lg bg-gray-800/90 backdrop-blur-sm border border-gray-700 animate-float">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <div className="absolute bottom-20 left-0 p-3 rounded-lg bg-gray-800/90 backdrop-blur-sm border border-gray-700 animate-float delay-300">
              <Rocket className="w-6 h-6 text-purple-400" />
            </div>
            <div className="absolute top-20 right-0 p-3 rounded-lg bg-gray-800/90 backdrop-blur-sm border border-gray-700 animate-float delay-500">
              <Star className="w-6 h-6 text-pink-400" />
            </div>

            {/* Main Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 animate-tilt"></div>
              <div className="relative">
                <img 
                  src="https://t4.ftcdn.net/jpg/02/64/20/25/240_F_264202539_j2iL5jDhKbA1fRLg2FRviTiHYXXXkfVLF.jpg" 
                  alt="Hero" 
                  className="rounded-full w-full max-w-lg mx-auto transform group-hover:scale-105 transition duration-500 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add these custom animations to your global CSS or Tailwind config
const customStyles = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes tilt {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-tilt {
  animation: tilt 10s ease-in-out infinite;
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

export default HeroSection;