import React from "react";
import img from "../assets/image.PNG";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import cv from "../assets/isurumadusankaresume.pdf";
import { saveAs } from "file-saver";

const Home = () => {
  const handleDownload = () => {
    saveAs(cv, "isurumadusanka.pdf");
  };

  return (
      <div className="flex flex-col"> {/* Apply h-screen class here */}
        <div id="home" className="sm:grid xl:px-32 px-10  lg:grid-cols-2 gap-6 items-center mt-[-84px] lg:pt-0 pt-16">
          {/* Content for small screens */}
          <div className="flex flex-col justify-center gap-12">
            <div>
              <h1 className="text-5xl font-bold pt-12">
                Isuru <br />
                <span className="font-bold">Madusanka</span>
                <br />
              </h1>
            </div>
            <div>
              <p className="text-black">
                As a BSc (Hons) Software Engineering student at the Sri Lanka Institute
                of Information Technology, I possess coding skills in Java, Kotlin, and
                Javascript, along with familiarity in Springboot, MERN stack, and CSS
                frameworks like Bootstrap5 and Tailwind. I am eager to secure an internship
                as a software engineer to contribute to meaningful projects and learn from
                a dynamic team, utilizing my knowledge and passion for software development.
              </p>
            </div>
            <div>
              <button
                  className="lg:mt-4 py-2 px-6 rounded-full flex items-center justify-center gap-2 bg-transparent border-2 border-black text-black hover:bg-[#1A1A1A] hover:text-white transition duration-300"
                  onClick={handleDownload}
              >
                Download CV
              </button>
            </div>



          </div>
          {/* Image for large screens */}
          <div className="flex justify-center">
            <img
                src={img}
                alt="Your Alt Text"
                className="lg:h-screen h-auto pt-8"
            />
          </div>
        </div>
        <div id="Education">
          <Education />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Projects">
          <Projects />
        </div>
      </div>
  );
};

export default Home;
