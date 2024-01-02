import React, { useRef, useState } from 'react';
import travely from "../assets/travely.JPEG";
import neighbourly from "../assets/neighbourly.jpeg";
import helpdesk from "../assets/helpdesk.JPEG";
import helthmart from "../assets/helthmart.JPEG";
import eyezenweb from "../assets/eyezenweb.jpg";
import eyezenmobile from "../assets/eyezenmobile.jpg";
import goticket from "../assets/goticket.jpg";
import kandy from "../assets/kandy.jpeg";
import ProjectCard from "./ProjectCard";

const cardData = [
  {
    title: "EyeZen - Revolutionizing Eye Care with Technology (MERN stack)",
    description:
        "eye care application designed to empower users with comprehensive information and resources for preserving and enhancing their eye health. EyeZen is a solution for all things related to eye health.",
    img: eyezenweb,
    link: "https://github.com/IsuruX98/EyeZen-FE",
    lang: "MERN stack, Tailwind CSS, VsCode, Postman",
  },
  {
    title: "EyeZen - Mobile Project (React Native, Nodejs, Expressjs and MongoDB)",
    description:
        "mobile app designed to enhance your visual experience! Our React native application combines cutting-edge technology with expert knowledge in eye care. EyeZen is your go-to solution for all things related to eye health",
    img: eyezenmobile,
    link: "https://github.com/IsuruX98/EyeZen-Mobile",
    lang: "React Native, Nodejs, Expressjs, MongoDB, VsCode, Postman",
  },
  {
    title: "Travely - Travel and Tourism Web App (MERN stack)",
    description:
        "I developed user registration, login, and profile management, along with admin features like user oversight and role management, all secured with JWT authentication, for our travel project.",
    img: travely,
    link: "https://github.com/IsuruX98/Travely",
    lang: "MERN stack, Tailwind CSS, VsCode, Postman",
  },
  {
    title: "GoTicket - Mobile Project (React Native, Springboot and MySQL)",
    description:
        "a cutting-edge mobile app designed to enhance bus ticketing systems with a Digital QR ticket system and a Ticket scanner for the inspector to generate tickets and check tickets",
    img: goticket,
    link: "https://github.com/IsuruX98/GoTicket-Mobile",
    lang: "React Native, Springboot, MySQL, VsCode, Postman",
  },
  {
    title: "Kandy Cookery - Restaurant Website Frontend (React, TailwindCSS)",
    description:
        "responsive and visually appealing frontend application created for a restaurant website. It is built using React and Tailwind CSS to provide an interactive and user-friendly experience for restaurant visitors.",
    img: kandy,
    link: "https://github.com/IsuruX98/Kandy-Cookery-FE",
    lang: "React, tailwind",
  },
  {
    title:
      "Neighbourly - App for solution ideas to Economic crisis (Android - Kotlin)",
    description:
      "I contributed by developing user registration, login, andpersonalized home page features for a project tackling rural poverty in Sri Lanka. The platform facilitates fund donations and maintains donation records for testing",
    img: neighbourly,
    link: "https://github.com/IsuruX98/MAD_Project_Neighbourly",
    lang: "Android - Kotlin, Firebase, Android Studio",
  },
  {
    title: "Help Desk - Java Servlet project (Java)",
    description:
      "I managed users and designed UI with UI Kit CSS in a Java Servlet project. I implemented registration, login, and profile features, enhancing my Java web development skills and creating appealing web applications.",
    img: helpdesk,
    link: "https://github.com/IsuruX98/Java-Project-Help-Desk",
    lang: "Java Servlet, UI Kit CSS, MySQL, eclipse, IntelliJ IDEA",
  },
  {
    title:
      "HealthMart - Online Pharmacy management system (HTML / CSS,Javascript, PHP, Sql)",
    description:
      "The project's goal was a responsive online pharmacy site for web development learning. It had medication shopping, cart, admin/user controls, and CRUD operations, teaching HTML, CSS, JavaScript, PHP, and SQL practically.",
    img: helthmart,
    link: "https://github.com/IsuruX98/HealthMart",
    lang: "HTML / CSS,Javascript, PHP, Sql, XAMPP, VsCode",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
      <div className="lg:pb-24 py-6 overflow-hidden relative bg-gray-100">
        <div className="flex flex-col justify-center gap-5">
          <div className="xl:px-32 px-10">
            <h1 className="text-[16px] mb-4">PROJECTS</h1>
            <h1 className="text-2xl lg:text-4xl mb-4">Best Projects</h1>
          </div>
          <div
              ref={containerRef}
              className="flex gap-2 sm:gap-6 md:px-8 px-3 xl:px-28 cursor-grab relative overflow-x-auto"
              style={{
                flex: '0 0 auto',
                whiteSpace: 'normal',
                overflowX: 'hidden',
                overflowY: 'hidden',
                userSelect: isDragging ? 'none' : 'auto',
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
          >
            {cardData.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Projects;
