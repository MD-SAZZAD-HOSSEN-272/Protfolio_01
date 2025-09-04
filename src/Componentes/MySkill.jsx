import React from "react";
import Marquee from "react-fast-marquee";
// import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaGithub,
  FaNode,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Element } from "react-scroll";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNode  className="text-teal-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-teal-400" /> },
  { name: "Firebase", icon: <IoLogoFirebase className="text-teal-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
  },
  {name: "Next.js", icon: <SiNextdotjs className="text-teal-400"/>}
];

const FrontendSkills = () => {
  return (
    <Element name="skill">
      <section id="skills" className="rounded-2xl z-10 text-white py-12 px-4">
      <div className=" text-center">
        <h2 className="text-4xl font-bold mb-8 text-purple-400">My Skills</h2>
        <p className="mb-10 text-lg text-gray-300">
          These are the tools and technologies I use to build interactive, fast,
          and modern web applications.
        </p>
        <div>
          <Marquee className="w-full h-40" play= {true} pauseOnHover= {true}>
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="border border-purple-400 mr-16 w-40 h-full p-6 rounded-xl flex flex-col items-center  transition-all duration-300 ease-in-out shadow-xl hover:bg-transparent cursor-pointer hover:shadow-purple-700/40"

                
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <span className="text-base mt-1">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default FrontendSkills;
