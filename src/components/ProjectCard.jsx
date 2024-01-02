import React from "react";

const ProjectCard = ({ project, index }) => {
    return (
        <div
            key={index}
            className="relative m-5 overflow-hidden w-80 cursor-pointer transition-transform transform hover:scale-105 flex flex-col"
            style={{
                flex: '0 0 auto',
                minWidth: '100px',
                marginRight: '20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for visual appeal
            }}
        >
            <img
                src={project.img}
                alt={`project-${index}`}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Set a fixed height for the image
                className="rounded-t-lg"
            />
            <div className="px-4 pt-4 py-6 bg-white rounded-b-lg flex flex-col justify-between" style={{ height: '100%' }}>
                {/* Set height to 100% for inner content */}
                <div>
                    <h2 className="text-xl font-bold mb-6">{project.title}</h2>
                    <p className="text-gray-700">{project.description}</p>
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 rounded-full flex items-center justify-center gap-2 bg-transparent border-2 border-black text-black hover:bg-[#1A1A1A] hover:text-white transition duration-300"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;