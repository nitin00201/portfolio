import React from 'react';
import { GithubIcon, Star, Rocket } from 'lucide-react';

const projects = [
  {
    title: "Zscrum - Project Management",
    description: "A comprehensive project management tool built with Next.js",
    tech: ["Next.js", "Clerk", "PostgreSQL", "Shadcn UI"],
    github: "https://github.com/nitin00201/SprintFlow",
    demo: "https://sprint-flow.vercel.app/"
  },
  {
    title: "Task tracker - A task management app",
    description: "Full-stack task management app built with React.js and Spring Boot",
    tech: ["React.js", "Tailwind CSS", "Spring Boot", "Material UI"],
    github: "https://github.com/nitin00201/taskManager",
    demo: "https://task-tracker-demo.com" // Replace with actual demo URL if available
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/nitin00201/portfolio",
    demo: "https://portfolio-sage-one-22.vercel.app/"
  }
];

const ProjectsSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="h-full p-8 rounded-2xl backdrop-blur-lg border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-700 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 flex items-center gap-1 hover:bg-blue-500/30 transition-colors">
                      <Star className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/80 text-gray-300 hover:bg-gray-700 transition-all duration-300 group/btn backdrop-blur-sm"
                  >
                    <GithubIcon className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300 group/btn"
                  >
                    <Rocket className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>

                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tl-2xl -z-10" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-br-2xl -z-10" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
