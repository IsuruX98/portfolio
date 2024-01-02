import React, {useEffect, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-scroll";

const Navbar = () => {
    // State variables for managing the component's behavior
    const [isAtTop, setIsAtTop] = useState(true);
    const [visible, setVisible] = useState(true);
    const [nav, setNav] = useState(false);

    // Effect to handle scrolling behavior and update state accordingly
    useEffect(() => {
        // Variable to keep track of the previous scroll position
        let prevScrollPosition = window.pageYOffset;

        // Effect to handle scroll events
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;

            // Check if the user is at the top of the page
            if (currentPosition === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }

            // Adjust visibility and navigation state based on scroll direction
            if (currentPosition > prevScrollPosition) {
                // Scrolling down
                setVisible(true);
                setNav(false);
            } else if (currentPosition < prevScrollPosition) {
                // Scrolling up
                setVisible(false);
                setNav(false);
            }

            // Update previous scroll position
            prevScrollPosition = currentPosition;
        };

        // Add scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);// Run effect only on mount and unmount

    // Toggle navigation state when the menu icon is clicked
    const handleNav = () => {
        setNav(!nav);
    };

    const handleContactClick = () => {
        window.location.href = "mailto:isurusanka98@gmail.com";
    };

    // Render the navigation bar with conditional styles based on scroll position
    return (
        <nav
            className={`flex justify-between w-full py-4 lg:px-32 px-12 sticky top-0 z-[999] ${
                isAtTop || visible
                    ? "top-[-100%] bg-transparent transition ease-in-out duration-500"
                    : "bg-white transition ease-in-out duration-500"
            }`}
        >

            <div className="cursor-pointer lg:hidden">
                {/* Conditional rendering of menu icon based on scroll position */}
                {isAtTop ?
                    <h1 className="text-2xl font-bold">PORTFOLIO</h1> :
                    <h1 className="text-2xl font-bold">PORTFOLIO</h1>}
            </div>

            {/* Navigation links */}
            <div
                className={`items-center hidden space-x-12 lg:flex ${
                    isAtTop ? "text-black" : "text-black"
                }`}
            >
                <div
                    className={`flex items-center ${isAtTop ? "text-white" : "text-black"}`}
                >
                    <h3
                        className={`font-extrabold ${isAtTop ? "text-white" : "text-black"}`}
                    >
                        <Link to="home" spy={true} smooth={true} duration={500}>
                            <div className="cursor-pointer">
                                {isAtTop ?
                                    <h1 className="text-2xl">PORTFOLIO</h1> :
                                    <h1 className="text-2xl">PORTFOLIO</h1>}

                            </div>
                        </Link>
                    </h3>
                </div>
                <Link to="Education" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-lg hover:font-bold">
                        Education
                    </div>
                </Link>
                <Link to="Skills" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-lg hover:font-bold">
                        Skills
                    </div>
                </Link>
                <Link to="Projects" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-lg hover:font-bold">
                        Projects
                    </div>
                </Link>

            </div>
            <div className={`items-center hidden space-x-12 lg:flex ${
                isAtTop ? "text-white" : "text-black"
            }`}>
                <button
                    className={`flex items-center justify-center gap-2 px-8 py-2 my-1 bg-transparent border-2 border-black text-black rounded-full hover:bg-[#1A1A1A] hover:text-white transition duration-300`}
                onClick={handleContactClick}
                >
                    Contact
                </button>

            </div>

            <div
                onClick={handleNav}
                className={`flex items-center justify-center lg:hidden ${isAtTop ? "text-black" : "text-black"}`}
            >
                <div className="">{nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}</div>

            </div>

            {/* Mobile Navigation links with smooth scrolling */}
            <div
                className={
                    !nav
                        ? "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray bg-white ease-in-out duration-500 lg:hidden"
                        : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray ease-in-out bg-white duration-500 lg:hidden"
                }
            >
                <h1 className="font-bold m-8 text-black">
                    <Link
                        to="home"
                        onClick={() => {
                            setNav(false);
                        }}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <h1 className="text-2xl font-bold">PORTFOLIO</h1>
                    </Link>
                </h1>
                <ul className="p-4 mt-20 text-black">
                    <li className="p-4 border-b border-gray-600 hover:text-lg hover:font-bold">
                        <Link
                            to="Education"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">Education</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-lg hover:font-bold">
                        <Link
                            to="Skills"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">Skills</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-lg hover:font-bold">
                        <Link
                            to="Projects"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">Projects</div>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
