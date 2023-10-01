import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleContactClick = () => {
    window.location.href = "mailto:isurusanka98@gmail.com";
  };

  return (
    <nav className="flex justify-between w-full py-4 bg-gray-900 md:px-36 px-12 sticky top-0 z-[999]">
      <div className="flex items-center">
        <h3 className="text-2xl font-extrabold text-white">
          <ScrollLink to="home" spy={true} smooth={true} duration={500}>
            Portfolio
          </ScrollLink>
        </h3>
      </div>
      <div className="items-center hidden space-x-12 md:flex text-white">
        <ScrollLink to="education" spy={true} smooth={true} duration={500}>
          Education
        </ScrollLink>
        <ScrollLink to="skills" spy={true} smooth={true} duration={500}>
          Skills
        </ScrollLink>
        <ScrollLink to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </ScrollLink>
      </div>
      <div className="items-center space-x-3 hidden md:flex">
        <>
          <button
            onClick={handleContactClick}
            className="px-4 py-2 text-white font-bold bg-[#004AAD] text-center hover:bg-blue-500 cursor-pointer rounded-md"
          >
            Contact
          </button>
        </>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} style={{ color: "white" }} />
        ) : (
          <AiOutlineMenu size={20} style={{ color: "white" }} />
        )}
      </div>

      <div
        className={
          !nav
            ? "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray bg-gray-800 ease-in-out duration-500 md:hidden"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray bg-gray-800 ease-in-out duration-500 md:hidden"
        }
      >
        <h1 className="text-2xl font-bold text-white m-8">Portfolio</h1>
        <ul className="p-4 mt-20 text-white">
          <li className="p-4 border-b border-gray-600">
            <ScrollLink
              to="home"
              onClick={() => {
                setNav(false);
              }}
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>

          <li className="p-4 border-b border-gray-600">
            <ScrollLink
              to="projects"
              onClick={() => {
                setNav(false);
              }}
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <button onClick={handleContactClick}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
