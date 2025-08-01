import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Garden Management",
    description:
      "A web app to manage garden tips, plant care, and seasonal tasks. Built with React, Node.js, and MongoDB.",
    image: "/path/to/image.jpg", // replace with your image
    tech: ["React", "Tailwind", "MongoDB"],
    link: "https://your-live-demo.com",
    github: "https://github.com/yourname/garden-project",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-[#0f0f23] via-[#0a0a23] to-[#0f0f23] py-20 px-6 min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          My Projects
        </h2>
        <div >
            <ProjectCard />
         
        </div>
      </div>
    </section>
  );
};

export default Projects;
