import React from "react";
import { FaReact, FaJava, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiSpringboot,
  SiPhp,
  SiPython,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiAndroidstudio,
  SiIntellijidea,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

const Skills = () => {
  return (
    <div>
      <div className="py-20 bg-gray-950">
        <div className="text-white">
          <div className="text-center mb-5">
            <p className="text-center text-[46px] text-[#004AAD] font-extrabold mb-20">
              Languages
            </p>
            <div className="flex flex-wrap justify-center lg:gap-12 gap-3 mt-3">
              <FaReact className="text-5xl" />
              <FaJava className="text-5xl" />
              <SiJavascript className="text-5xl" />
              <SiKotlin className="text-5xl" />
              <FaNodeJs className="text-5xl" />
              <SiMongodb className="text-5xl" />
              <SiSpringboot className="text-5xl" />
            </div>
            <div className="flex flex-wrap justify-center mt-6 lg:gap-12 gap-3">
              <SiPhp className="text-5xl" />
              <SiPython className="text-5xl" />
              <SiMysql className="text-5xl" />
              <SiTailwindcss className="text-5xl" />
              <SiBootstrap className="text-5xl" />
              <SiHtml5 className="text-5xl" />
              <FaCss3Alt className="text-5xl" />
            </div>
            <p className="text-center text-[#004AAD] text-[46px] pt-20 font-extrabold mb-20 ">
              Environments
            </p>
            <div className="flex flex-wrap justify-center mt-3 lg:gap-12 gap-3">
              <BsCodeSlash className="text-5xl" />
              <SiAndroidstudio className="text-5xl" />
              <SiIntellijidea className="text-5xl" />
              <SiFigma className="text-5xl" />
              <SiCanva className="text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
