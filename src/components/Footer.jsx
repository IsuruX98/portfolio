import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:isurusanka98@gmail.com";
  };

  return (
    <footer className="bg-gray-950 text-white py-6">
      <div>
        <div className="flex md:flex-row flex-col md:justify-between items-center w-full py-4 px-20">
          <div className="mb-4 md:mb-0">
            <h3 className="text-gray-300 text-sm">
              <p>&copy; 2023 Isuru Madusanka. All rights reserved.</p>
            </h3>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-300 hover:text-gray-200">
              <ScrollLink to="home" spy={true} smooth={true} duration={500}>
                Home
              </ScrollLink>
            </button>

            <Link
              to="#"
              className="text-gray-300 hover:text-gray-200"
              onClick={handleContactClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
