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
  SiPostman,
  SiWebstorm,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  return (
      <div className="lg:pb-16 py-6 overflow-hidden relative bg-white">
        <div className="flex flex-col justify-center gap-5">
          <div className="xl:px-32 px-10">
            <h1 className="text-[16px] mb-4 uppercase">Skills</h1>
            <h1 className="text-2xl lg:text-4xl mb-4">Languages</h1>
            <div className="flex flex-wrap lg:justify-start justify-center lg:gap-12 gap-3 mt-3 py-8">
              <FaReact className="text-5xl" />
              <FaJava className="text-5xl" />
              <SiJavascript className="text-5xl" />
              <SiKotlin className="text-5xl" />
              <FaNodeJs className="text-5xl" />
              <SiMongodb className="text-5xl" />
              <SiSpringboot className="text-5xl" />
              <SiPhp className="text-5xl" />
              <SiPython className="text-5xl" />
              <SiMysql className="text-5xl" />
              <SiTailwindcss className="text-5xl" />
              <SiBootstrap className="text-5xl" />
              <SiHtml5 className="text-5xl" />
              <FaCss3Alt className="text-5xl" />
            </div>
          </div>
          <div className="xl:px-32 px-10">
            <h1 className="text-2xl lg:text-4xl mb-4">Environments</h1>
            <div className="flex flex-wrap lg:justify-start justify-center mt-3 lg:gap-12 gap-3 py-8">
              <TbBrandVscode className="text-5xl" />
              <SiIntellijidea className="text-5xl" />
              <SiWebstorm className="text-5xl" />
              <SiAndroidstudio className="text-5xl" />
              <SiPostman className="text-5xl" />
              <SiFigma className="text-5xl" />
              <SiCanva className="text-5xl" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Skills;
