import React from "react";
import travely from "../assets/travely.JPEG";
import neighbourly from "../assets/neighbourly.jpeg";
import helpdesk from "../assets/helpdesk.JPEG";
import helthmart from "../assets/helthmart.JPEG";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Travely - Travel and Tourism Web App (MERN stack)",
    description:
      "I developed user registration, login, and profile management, along with admin features like user oversight and role management, all secured with JWT authentication, for our travel project.",
    img: travely,
    link: "https://github.com/IsuruX98/Travely",
    lang: "MERN stack, Tailwind CSS, VsCode, Postman",
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
  return (
    <div className="py-20 bg-gray-900">
      <div className="text-center text-[46px] font-extrabold mb-20 text-[#004AAD]">
        Projects
      </div>
      <div className="flex flex-wrap justify-evenly">
        {cardData.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="w-80 p-8 m-4 bg-white rounded-lg shadow-md"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-700 mb-4">{card.description}</p>
            <p className="text-gray-500 mt-5">{card.lang}</p>
            <div className="py-5">
              <Link
                to={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white font-bold bg-[#004AAD] text-center hover:bg-blue-500 cursor-pointer rounded-md"
              >
                View Project
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
