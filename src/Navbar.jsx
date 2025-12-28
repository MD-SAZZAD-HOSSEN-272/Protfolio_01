import React, { useState } from "react";
import logoImage from "./assets/logo.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className=" py-1 top-0 mx-auto left-0 rounded-2xl right-0 fixed bg-[#0f0f23]/80 backdrop-blur-md shadow-md z-50 text-white">
      <div className="max-w-7xl flex justify-between items-center mx-auto py-3">
        <Link to="home" smooth={true} duration={1000} offset={-200}>
          <img
            className="w-16 h-16 cursor-pointer rounded-full"
            src={logoImage}
            alt=""
          />
        </Link>
        <div className="items-center gap-8 hidden lg:flex">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            offset={-200}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400 transition"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            offset={-100}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400 transition"
          >
            About
          </Link>
          <Link
            to="skill"
            smooth={true}
            duration={1000}
            offset={-100}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400 transition"
          >
            Skill
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={1000}
            offset={-300}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400 transition"
          >
            Project
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-100}
            spy={true}
            activeClass="text-purple-400"
            className="cursor-pointer hover:text-purple-400 transition"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-5 justify-center ">
          <div className="relative lg:hidden">
            <CiMenuBurger onClick={() => setMenu(!menu)} className="" />
            <div
              className={`flex absolute ${
                menu
                  ? "-left-20 transition-all duration-500"
                  : "left-50 transition-all duration-500"
              } mt-10 transition-all duration-300 bg-[#0f0f23]/90 backdrop-blur z-50 p-5 rounded-xl flex-col items-center gap-8`}
            >
              <Link
                to="home"
                smooth={true}
                duration={1000}
                offset={-200}
                spy={true}
                activeClass="text-purple-400"
                className="cursor-pointer hover:text-purple-400 transition"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                offset={-100}
                spy={true}
                activeClass="text-purple-400"
                className="cursor-pointer hover:text-purple-400 transition"
              >
                About
              </Link>
              <Link
                to="skill"
                smooth={true}
                duration={1000}
                offset={-100}
                spy={true}
                activeClass="text-purple-400"
                className="cursor-pointer hover:text-purple-400 transition"
              >
                Skill
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={1000}
                offset={-300}
                spy={true}
                activeClass="text-purple-400"
                className="cursor-pointer hover:text-purple-400 transition"
              >
                Project
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                offset={-100}
                spy={true}
                activeClass="text-purple-400"
                className="cursor-pointer hover:text-purple-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>
          <a
            download='Sazzad_Hossen_Front_end_Resume.pdf' href='/Sazzad_Hossen_Front_end_Resume.pdf'
            className="cursor-pointer border p-3 rounded-xl hover:border-purple-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
