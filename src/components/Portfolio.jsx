import React, { useState, useEffect } from 'react';
import {  } from 'lucide-react';
import { 
   
  Twitter, ChevronUp, Mail, GithubIcon, Linkedin, ExternalLink, Menu, X,
  UserCircle, 
  FolderGit2, 
  MessageCircle,
  Shield,
  FileText,
  FileDown,
  Eye,
  Code2,
  MapPin,
  Phone
} from 'lucide-react';
import ResumeDownload from './ResumeDownload';
import TimelineComponent from './TimelineComponent';
import AboutMe from './AboutMe';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import ContactSection from './ContactSection';
import Footer from './Footer';

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

  const timelineData = [
    
    {
      year: '2022',
      school: 'Utkal University',
      course: 'Bachelor of Science',
    },
    {
      year: '2024',
      school: 'VSSUT, Burla',
      course: 'Master of Computer Application',
    },
  ];
  const experienceData = [
    {
      year: "may'2024 - Present",
      jobTitle: 'Software Developer Apparentice',
      company: 'Hyscaler',
      description: 'working as a full stack developer',
    },
        
  ];
  

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
      tech: ["React", "Tailwind CSS",],
      github: "https://github.com/nitin00201/portfolio",
      demo: "https://portfolio-sage-one-22.vercel.app/"
    },
    {
      title: "Video conference Website",
      description: "video calling website built with Nextjs, stream and Tailwind CSS",
      tech: ["Next js", "Tailwind CSS","stream"],
      github: "https://github.com/nitin00201/zoom-clone",
      demo: "https://zoom-clone-sage-two.vercel.app/"
    }
  ];

  return (
    <div className=" bg-gray-50">
      {/* Navigation */}
   <Navbar/>

      {/* Hero Section */}
      <HeroSection/>
      {/* <section id="home" className="pt-20  flex items-center">
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
              <img src="https://t4.ftcdn.net/jpg/02/64/20/25/240_F_264202539_j2iL5jDhKbA1fRLg2FRviTiHYXXkfVLF.jpg" alt="Hero" className="rounded-full mx-auto" width={500} />
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <AboutMe/>
      {/* <section id="about" className="py-20 bg-white">

        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-start gap-4">
            <div className="md:w-1/2">
              <img src="https://t4.ftcdn.net/jpg/00/94/88/19/240_F_94881945_nhV1LG78QOf0FR6SEbmEuiuzvQQi3c7h.jpg" alt="About" className="rounded-lg shadow-lg" wi />
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
                    <li>Docker</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="flex flex-col items-center py-10 bg-white ">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-black">Experience Timeline</h2>
      <div className="w-full max-w-md lg:max-w-3xl space-y-8 px-4">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start p-6 rounded-lg bg-gray-100 shadow-lg transition-transform transform ${
              index % 2 === 0 ? 'md:translate-x-4' : 'md:-translate-x-4'
            } hover:scale-105 hover:shadow-2xl animate-slideIn`}
          >
            <div className="text-blue-500 font-semibold text-xl md:text-2xl mb-2 md:mb-0 md:mr-6">
              {item.year}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold">{item.jobTitle}</h3>
              <p className="text-gray-700 font-medium">{item.company}</p>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>     */}
    <TimelineComponent/>

      {/* <div className="flex flex-col items-center py-10 bg-white ">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-black">Education Timeline</h2>
      <div className="w-full max-w-md lg:max-w-3xl space-y-8 px-4">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start p-4 rounded-lg bg-gray-100 shadow-lg transition-transform transform ${
              index % 2 === 0 ? 'md:translate-x-4' : 'md:-translate-x-4'
            } hover:scale-105 hover:shadow-2xl animate-slideIn`}
          >
            <div className="text-blue-500 font-semibold text-xl md:text-2xl mb-2 md:mb-0 md:mr-6">
              {item.year}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold">{item.school}</h3>
              <p className="text-gray-600">{item.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div> */}

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* <img src={`/api/placeholder/400/250`} alt={project.title} className="w-full" /> */}
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
      <ContactSection/>
      <ResumeDownload/>

      {/* Footer */}
      <Footer/>

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