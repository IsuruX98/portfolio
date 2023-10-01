import React from "react";
import img from "../assets/image.png";
import Eduction from "../components/Eduction";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import cv from "../assets/isurumadusankaresume.pdf";
import { saveAs } from "file-saver";

const Home = () => {
  const handleDownload = () => {
    saveAs(cv, "isurumadusanka.pdf");
  };
  return (
    <>
      <div
        id="home"
        className="grid lg:grid-cols-2 py-10 px-12 lg:px-36 gap-10 bg-gray-950"
      >
        <div className="flex  items-center h-full">
          <div>
            <h2 className="text-[56px] text-white font-extrabold">Isuru</h2>
            <span className="text-[46px] font-extrabold text-[#004AAD]">
              Madusanka
            </span>
            <h2 className="pt-8 text-white">
              As a BSc (Hons) Software Engineering student at the Sri Lanka
              Institute of Information Technology, I possess coding skills in
              Java, Kotlin, and Javascript, along with familiarity in
              Springboot, MERN stack, and CSS frameworks like Bootstrap5 and
              Tailwind. I am eager to secure an internship as a software
              engineer to contribute to meaningful projects and learn from a
              dynamic team, utilizing my knowledge and passion for software
              development.
            </h2>
            <div className="pt-10">
              <button
                onClick={handleDownload}
                className="bg-[#004AAD] text-white font-bold px-6 py-3 rounded-md mr-4 hover:bg-blue-800"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>

        <div className="lg:py-20 lg:pl-36 p-5 mb-10 lg:mb-0">
          <img
            className="rounded-3xl  h-full w-full object-cover"
            src={img}
            alt=""
          />
        </div>
      </div>
      <div id="education">
        <Eduction />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
};

export default Home;
