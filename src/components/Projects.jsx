import React from 'react';

const Projects=()=> {
  const projects = [
    { title: "Project One", description: "An amazing project that I worked on.", link: "#" },
    { title: "Project Two", description: "Another cool project that I contributed to.", link: "#" },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto p-10">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-500 hover:text-blue-700">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
