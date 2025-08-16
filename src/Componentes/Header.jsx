import React, { useEffect, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { motion } from "motion/react"
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import logo from '../assets/logo.png'
import logo1 from '../assets/hero.png'
import { Typewriter } from "react-simple-typewriter";
import { Element, Link } from "react-scroll";
import { NavLink } from "react-router";
import { div } from "motion/react-client";

const Header = () => {

  const [isAnimation, setIsAnimation] = useState(false)

  useEffect (() => {
    const handleResize = () => {
      setIsAnimation(window.innerWidth < 760)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  },[])

  return (
   <section>
    <Element name="home">
     <div
      id="home"
      className="flex flex-col md:flex-row pb-80 md:pb-20 xl:pb-40 justify-around px-3 md:px-20 rounded-2xl text-white py-28"
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
          <NavLink target="blank" to='https://drive.google.com/file/d/1oZIJX053qRdcPAqoYT5_T5vFqpJTzd1X/view?usp=sharing' className="hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 px-6 py-3 rounded-xl font-semibold cursor-pointer transition-colors duration-300 border border-purple-500">
            Resume
          </NavLink>
          <Link to='project' smooth={true} duration={1000} offset={-300} className="border border-purple-500 px-6 py-3 cursor-pointer font-semibold rounded-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-colors duration-300">
            Projects
          </Link>
        </div>
      </div>
        <motion.div
            animate= {isAnimation ? {} : {y: [10, -10, 10],}}
            transition={{duration: 2, repeat: Infinity}}
        className="relative flex items-center justify-center text-white">
          {/* Orbiting Circle */}
          <div className="absolute top-20 md:top-0 w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full border border-purple-600 animated">
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
          <div className="relative z-10 w-48 h-48 rounded-full top-35 md:top-3 xl:top-14 overflow-hidden border-4 border-purple-500 shadow-lg">
            <img
              src={logo1}
              alt="Sazzad"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </motion.div>
      </div>
   </Element>
   </section>
  );
};

export default Header;
