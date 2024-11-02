import React from 'react';
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
  Mountain
} from 'lucide-react';

const AboutMe = () => {
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
    { icon: <Music className="w-8 h-8" />, name: 'Music' },
    { icon: <BookOpen className="w-8 h-8" />, name: 'Reading' },
    { icon: <Camera className="w-8 h-8" />, name: 'Photography' },
    { icon: <Gamepad2 className="w-8 h-8" />, name: 'Gaming' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full mx-auto">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          {/* <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative">
              <img 
                src="https://t4.ftcdn.net/jpg/00/94/88/19/240_F_94881945_nhV1LG78QOf0FR6SEbmEuiuzvQQi3c7h.jpg" 
                alt="About" 
                className="rounded-lg shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div> */}

          {/* Content Section */}
          <div className="lg:w-9/12 mx-auto space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 text-white">
                <Code2 className="w-8 h-8 text-blue-400" />
                Full Stack Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate developer with expertise in building modern web applications.
                I specialize in Spring Boot for backend development and React for frontend interfaces.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-gray-700 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                  <Layout className="w-5 h-5 text-blue-400" />
                  Frontend
                </h4>
                <div className="space-y-4">
                  {techStack.frontend.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                      <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-gray-700 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                  <Server className="w-5 h-5 text-purple-400" />
                  Backend
                </h4>
                <div className="space-y-4">
                  {techStack.backend.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                      <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-gray-700 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4 text-white text-center">Interests</h4>
              <div className="flex justify-center md:grid-cols-4 gap-10  ">
                {interests.map((interest, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer"
                  >
                    <div className="text-pink-400">
                      {interest.icon}
                    </div>
                    <span className="text-sm text-gray-300">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;