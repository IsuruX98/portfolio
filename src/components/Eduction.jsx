import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineData = [
  {
    date: "2021 - Present",
    title:
      "Bsc.Special (Hons) Information Technology Specialization - Software Engineering (3.5 CGPA)",
    description:
      "Currently reading for my Bachelors' Degree in Software Engineering at SriLanka Institute of Information Technology (SLIIT)",
  },
  {
    date: "2017 - 2018",
    title: "Pearson Diploma in Information Technology",
    description: "Completed in ESOFT, Galle",
  },
  {
    date: "2017 - 2018",
    title: "Pearson Diploma in English",
    description: "Completed in ESOFT, Galle",
  },
  {
    date: "2017",
    title: "Advanced Level (Index No -5854890) 2017 - Commerce Stream",
    description:
      "Passed with 2 C (Accounting, Business studies) and 1 S (Economics) Passes, Mahinda College, Galle",
  },
  {
    date: "2014",
    title: "G.C.E (O/L) Examination in 2014 (Index No – 41275888)",
    description: "Passed with 7A’s, 1B, 1C",
  },
];

const Eduction = () => {
  return (
    <div>
      <div className="py-20 bg-gray-900 px-8">
        <div className="text-center text-[46px] font-extrabold mb-20 text-white">
          Education
        </div>
        <VerticalTimeline className="mt-10">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              dateClassName="text-white"
              iconStyle={{ background: "#004AAD", color: "#fff" }}
              icon={<i className="fas fa-graduation-cap"></i>}
            >
              <h3 className="vertical-timeline-element-title text-[#004AAD] font-bold text-xl">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Eduction;
