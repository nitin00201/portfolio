import React from 'react';

const Skills = ()=> {
  const skills = ["JavaScript", "React", "Next.js", "Spring Boot", "Tailwind CSS", "Git", "MySQL"];

  return (
    <section className="container mx-auto p-10 md:p-20">
      <h2 className="text-3xl font-semibold text-center">Skills</h2>
      <div className="mt-6 flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <span key={index} className="m-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
