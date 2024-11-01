import React, { useState, useEffect } from 'react';
import { ChevronUp, Mail, GithubIcon, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Zscrum - Project Management",
      description: "A comprehensive project management tool built with Next. js ",
      tech: ["Next. js", "Clerk", "PostgreSQL","Shadcn UI"],
      github: "https://github.com/nitin00201/SprintFlow",
      demo: "https://sprint-flow.vercel.app/"
    },
    {
      title: "Task tracker - A task management app",
      description: "Full-stack task management app built with react js and Spring Boot",
      tech: ["React js", "Tailwind CSS", "Spring Boot", "Material UI"],
      github: "https://github.com/nitin00201/taskManager",
      demo: "https://github.com/nitin00201/taskManager"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://portfolio-demo.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-blue-600">Nitin</a>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-600">Nitin</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Full Stack Developer specializing in Spring Boot & React
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Me
                </a>
                <a href="#projects" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src="/api/placeholder/500/500" alt="Hero" className="rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="/api/placeholder/400/400" alt="About" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Full Stack Developer</h3>
              <p className="text-gray-600 mb-6">
                I'm a passionate developer with expertise in building modern web applications.
                I specialize in Spring Boot for backend development and React for frontend interfaces.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="text-gray-600">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="text-gray-600">
                    <li>Spring Boot</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={`/api/placeholder/400/250`} alt={project.title} className="w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                      <GithubIcon size={20} className="mr-1" /> Code
                    </a>
                    <a href={project.demo} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                      <ExternalLink size={20} className="mr-1" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <a href="mailto:kabinitin2002@gmail.com" className="flex items-center justify-center bg-gray-50 px-6 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                <Mail size={24} className="text-blue-600 mr-2" />
                <span>kabinitin2002@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/nitin-kabi-980532247" className="flex items-center justify-center bg-gray-50 px-6 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                <Linkedin size={24} className="text-blue-600 mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <textarea placeholder="Message" rows="6" className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Nitin</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/nitin00201" className="hover:text-blue-400 transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="https://linkedin.com/in/nitin-kabi-980532247" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:kabinitin2002@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            © 2024 Nitin. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;