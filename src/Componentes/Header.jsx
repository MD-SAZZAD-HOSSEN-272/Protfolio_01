import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { motion } from "motion/react"
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import heroImage from "../assets/hero.png";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";

const Header = () => {
  return (
   <Element name="home">
     <div
      id="home"
      className="flex flex-col md:flex-row justify-around items-center px-6 md:px-20 rounded-2xl bg-gradient-to-b from-[#0f0f23] to-[#1f1f5a] text-white py-28"
    >
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
          Hello,
          <br /> I Am <span className="text-purple-400">Md. Sazzad Hossen</span>
        </h1>
        <h4 className="text-lg md:text-xl text-gray-300">
            I am a
          <Typewriter
            words={[' Web Developer', ' web designer']}
            loop= {0}
            cursor
          ></Typewriter>
        </h4>
        <div className="flex justify-center md:justify-start gap-6">
          <button className="hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 px-6 py-3 rounded-xl font-semibold cursor-pointer transition-colors duration-300 border border-purple-500">
            Resume
          </button>
          <button className="border border-purple-500 px-6 py-3 cursor-pointer font-semibold rounded-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-colors duration-300">
            Projects
          </button>
        </div>
      </div>
        <motion.div
            animate= {{y: [10, -10, 10],}}
            transition={{duration: 2, repeat: Infinity}}
        className="relative flex items-center justify-center text-white">
          {/* Orbiting Circle */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-600 animated">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <FaReact size={24} className="text-cyan-400" />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <FaHtml5 size={24} className="text-orange-500" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <SiTypescript size={24} className="text-yellow-400" />
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <FaCss3Alt size={24} className="text-blue-500" />
            </div>
            <div className="absolute top-10 left-10">
              <FaNodeJs size={20} className="text-green-500" />
            </div>
            <div className="absolute bottom-10 right-10">
              <SiTailwindcss size={20} className="text-sky-400" />
            </div>
            <div className="absolute top-10 right-12">
              <SiMongodb size={20} className="text-green-400" />
            </div>
            <div className="absolute bottom-10 left-12">
              <SiJavascript size={20} className="text-yellow-300" />
            </div>
          </div>

          {/* Centered User Image */}
          <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
            <img
              src={heroImage}
              alt="Sazzad"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </motion.div>
      </div>
   </Element>
  );
};

export default Header;
