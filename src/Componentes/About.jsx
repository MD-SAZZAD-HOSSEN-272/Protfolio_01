import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { motion } from "motion/react"

import lottie1 from '../assets/Lotties/lottie2.json';
import Lottie from "lottie-react";
import { Element, Link } from "react-scroll";


const About = () => {
  return (
    <Element name="about">
      <div id="about" className="rounded-2xl  text-white shadow-pink-500 py-20 px-10">
      <h1 className="text-4xl text-center font-bold text-purple-400">About Me</h1>
      <p className="text-xl text-center font-bold">
        Building Scalable and interactive web solution
      </p>
      <div className="mt-10 grid grid-cols-1 text-center md:text-left md:grid-cols-2 justify-between items-center">
        <div className="space-y-3">
          <p className=" font-semibold">
            Motivated frontend Developer skilled in HTML, CSS3, javaScript,
            React.js and Tailwind css focusing on responsive pixel perfect
            design from figma, Eager to learn CMS platforms like wordpress
            thrive in fast-paced collaborative environments.
          </p>
          <h1 className="text-3xl font-bold text-purple-400">My Goals:</h1>
          <p>
            My goal to become a skilled a full-stack Developer and build
            impactful digital solutions that solve real-world problems.
          </p>
          <div  className="grid grid-cols-3 md:grid-cols-6 gap-5  mt-10">
            <motion.div animate={{y: [0, -20, 0]}} transition={{duration: 3, repeat: Infinity}}>
              <FaReact  className=" border border-purple-400 rounded text-6xl p-3 text-white" />
            </motion.div>
            <motion.div animate={{y: [0, -20, 0]}} transition={{duration: 3, delay: 0.2, repeat: Infinity}}>
              <RiTailwindCssFill className=" border border-purple-400 rounded text-6xl p-3 text-white" />
            </motion.div>
            <motion.div animate={{y: [0, -20, 0]}} transition={{duration: 3, delay: 0.4, repeat: Infinity}}>
              <SiMongodb className=" border border-purple-400 rounded text-6xl p-3 text-white" />
            </motion.div>
            <motion.div animate={{y: [0, -20, 0]}} transition={{duration: 3, delay: 0.6, repeat: Infinity}}>
              <IoLogoNodejs className=" border border-purple-400 rounded text-6xl p-3 text-white" />
            </motion.div>
            <motion.div animate={{y: [0, -20, 0]}} transition={{duration: 3, delay: 0.8, repeat: Infinity}}>
              <IoLogoFirebase className=" border border-purple-400 rounded text-6xl p-3 text-white" />
            </motion.div>
            <motion.div animate={{y: [0, -20, 0]}} transition={{duration: 3, delay: 0.9, repeat: Infinity}}>
              <SiNextdotjs className=" border border-purple-400 rounded text-6xl p-3 text-white" />
            </motion.div>
          </div>
          <div className="flex gap-3 mt-5">
            <Link to='contact' smooth={true} duration={1000} offset={-100}
              class="relative cursor-pointer inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Hire Me
              </span>
            </Link>
            <Link to='skill' smooth={true} duration={1000} offset={-100}
              class="relative cursor-pointer inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                My Skill
              </span>
            </Link>
          </div>
        </div>
        <div>

          <Lottie animationData={lottie1} loop= {true}></Lottie>
          
          {/* <img
            className="w-96 mx-auto rounded-2xl"
            src="https://img.freepik.com/free-vector/desktop-computer-vconcept-illustration_114360-12153.jpg?uid=R198821472&ga=GA1.1.1540942795.1731320437&semt=ais_hybrid&w=740"
            alt=""
          /> */}
        </div>
      </div>
    </div>
    </Element>
  );
};

export default About;
