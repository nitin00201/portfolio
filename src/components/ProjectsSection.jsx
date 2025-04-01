import React, { useState } from 'react';
import { Github, ExternalLink, Code, Layers, Monitor, ChevronRight, Search, X } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProject, setModalProject] = useState(null);
  
  const projects = [
    {
      title: "Zscrum - Project Management",
      description: "A comprehensive project management tool built with Next.js that helps teams track sprints and manage tasks efficiently.",
      tech: ["Next.js", "Clerk", "PostgreSQL", "Shadcn UI"],
      github: "https://github.com/nitin00201/SprintFlow",
      demo: "https://sprint-flow.vercel.app/",
      category: "Full Stack",
      color: "blue"
    },
    {
      title: "Task tracker - A task management app",
      description: "Full-stack task management app built with React.js and Spring Boot for tracking daily tasks and enhancing productivity.",
      tech: ["React.js", "Tailwind CSS", "Spring Boot", "Material UI"],
      github: "https://github.com/nitin00201/taskManager",
      demo: "https://github.com/nitin00201/taskManager",
      category: "Full Stack",
      color: "green"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS showcasing skills and projects with a modern interface.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/nitin00201/portfolio",
      demo: "https://portfolio-sage-one-22.vercel.app/",
      category: "Frontend",
      color: "purple"
    },
    {
      title: "Video conference Website",
      description: "Real-time video calling platform built with Next.js and Stream API, enabling seamless virtual meetings and collaboration.",
      tech: ["Next.js", "Tailwind CSS", "Stream"],
      github: "https://github.com/nitin00201/zoom-clone",
      demo: "https://zoom-clone-sage-two.vercel.app/",
      category: "Real-time",
      color: "pink"
    },
    {
      title: "Collaborative notes Website",
      description: "Multi-user collaborative notes platform using Next.js and Liveblocks for real-time document editing and sharing.",
      tech: ["Next.js", "Tailwind CSS", "Liveblocks"],
      github: "https://github.com/nitin00201/notes",
      demo: "https://notes-tau-lemon.vercel.app/",
      category: "Real-time",
      color: "cyan"
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getProjectCardColor = (color) => {
    const colors = {
      blue: "from-blue-500 to-indigo-600",
      green: "from-emerald-500 to-green-600",
      purple: "from-purple-500 to-violet-600",
      pink: "from-pink-500 to-rose-600",
      cyan: "from-cyan-500 to-blue-600"
    };
    return colors[color] || "from-gray-700 to-gray-800";
  };

  const getProjectBadgeColor = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      purple: "bg-purple-100 text-purple-700",
      pink: "bg-pink-100 text-pink-700",
      cyan: "bg-cyan-100 text-cyan-700"
    };
    return colors[color] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">My Projects</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg">Explore my latest work and projects spanning from full-stack applications to interactive frontend experiences.</p>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-purple-500/20'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800/80 text-white rounded-full py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Projects Grid with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700/50 group hover:scale-105 hover:border-purple-500/50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`h-3 w-full bg-gradient-to-r ${getProjectCardColor(project.color)}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getProjectBadgeColor(project.color)}`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Code size={12} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-300 hover:text-white transition-colors bg-gray-700/50 p-2 rounded-full hover:bg-gray-700"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-300 hover:text-white transition-colors bg-gray-700/50 p-2 rounded-full hover:bg-gray-700"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <button 
                    onClick={() => setModalProject(project)}
                    className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    <span>Details</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 text-center">
            <p className="text-gray-300 text-lg">No projects found matching your search criteria.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveFilter('All');}}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setModalProject(null)}>
          <div 
            className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 w-full bg-gradient-to-r ${getProjectCardColor(modalProject.color)}`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {modalProject.title}
                </h3>
                <button 
                  onClick={() => setModalProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center justify-center">
                  <Layers className="text-blue-400 mb-2" size={24} />
                  <span className="text-gray-400 text-sm">Category</span>
                  <span className="text-white font-medium">{modalProject.category}</span>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center justify-center">
                  <Code className="text-purple-400 mb-2" size={24} />
                  <span className="text-gray-400 text-sm">Tech Stack</span>
                  <span className="text-white font-medium">{modalProject.tech.length} Technologies</span>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center justify-center">
                  <Monitor className="text-green-400 mb-2" size={24} />
                  <span className="text-gray-400 text-sm">Demo</span>
                  <a href={modalProject.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">View Live</a>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">About this project</h4>
                <p className="text-gray-300">{modalProject.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {modalProject.tech.map((tech, i) => (
                    <span key={i} className={`${getProjectBadgeColor(modalProject.color)} px-3 py-1 rounded-full text-sm font-medium`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={modalProject.github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-lg text-white hover:from-gray-700 hover:to-gray-600 transition-colors"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                <a 
                  href={modalProject.demo}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg text-white hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;