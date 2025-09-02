import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import defaultProfile from "../assets/profile_img.webp";
import { useNavigate } from "react-router-dom";
import Skills from "../utils/skills.js";
import {
  IoMdStar,
  IoMdStarOutline,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
} from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

import Projects from "../utils/projects.js";
import FullScreen_profile from "./fullScreen_profile.jsx";

const Landing_page = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [skills, setSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const [projects, setProject] = useState([]);

  const titles = ["Web Developer", "Web Designer", "Computer Engineer"];

  useEffect(() => {
    setTitle(titles[0]);
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % titles.length;
          setTitle(titles[newIndex]);
          return newIndex;
        });
        setIsFlipping(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { rotateX: 90, y: 20, opacity: 0 },
    center: { rotateX: 0, y: 0, opacity: 1 },
    exit: { rotateX: -90, y: -20, opacity: 0 },
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setProject(Projects());
  }, [Projects]);

  useEffect(() => {
    if (Skills) {
      setSkills(Skills);
    }
    console.log(skills);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredSkill(id);
    // console.log("Mouse Enter:", id);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
    // console.log("Mouse Left")
  };

  const fullScreen_profile = () => {
    setFullScreen(!fullScreen);
  };

  const navigate = useNavigate();

  return (
    <div className=" h-full min-h-screen w-full min-w-screen bg-[#080808] flex items-center justify-center text-white font-roboto">
      {fullScreen && (
        <FullScreen_profile onClose={() => setFullScreen(false)} />
      )}
      <div className="relative  rounded-2xl  flex flex-col items-center justify-between w-full">
        {/* Profile Image Placeholder */}

        <div className="flex  box-border flex-col  lg:flex-row lg:gap-8 h-full  w-fit justify-center items-center p-4 gap-4">
          <div className="left flex flex-col  gap-2 relative w-full justify-center items-start space-y-2">
            <div
              className=" rotating-border w-full p-4   bg-glass-light 
              backdrop-blur-xl shadow-glass rounded-2xl  flex flex-col items-center justify-center gap-4  "
            >
              {/* <div class="absolute  bg-glass-light"></div> */}

              {/* <div
                class="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-glass-angle 
                rounded-full blur-3xl rotate-45"
              ></div> */}
              <div className="title flex flex-row justify-center items-center gap-4 w-full h-full overflow-visible">
                <div
                  onClick={fullScreen_profile}
                  className="cursor-zoom-in  overflow-hidden bg-gray-200  rounded-2xl  w-[200px] aspect-square flex items-center justify-center"
                >
                  <img
                    src={defaultProfile}
                    className="object-cover box-border  relative w-full h-full"
                  />
                </div>
                <div className="name-title text-center w-full flex flex-col justify-center items-center ">
                  <h1 className="text-white font-figtree relative text-[25px] lg:text-[40px] leading-snug text-left w-full">
                    I'm
                    <span className="font-bold text-amber-400"> Bhupesh</span>
                  </h1>
                  <div className="h-12 w-full  relative overflow-hidden text-gray-300  text-2xl md:text-4xl mt-4">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={title}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          rotateX: { type: "spring", stiffness: 100 },
                          opacity: { duration: 0.2 },
                        }}
                        className="absolute w-full text-left font-anton"
                      >
                        {title}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="intro box-border w-full flex flex-col justify-center ">
                <div className="text-white text-lg  mt-2 text-justify font-semibold font-figtree">
                  I code. I like to create things, and art .
                </div>
              </div>
              <div className="w-full flex flex-col items-center md:items-start">
                <div className="socials flex items-center md:items-end">
                  <ul className="list-none  flex flex-row gap-2 items-center md:items-end text-gray-300">
                    <li className="hover:underline cursor-pointer hover:text-[#1E88E5] hover:bg-white rounded-[4px] transition-all duration-100 ease-in-out ">
                      <a target="_blank" href="mailto:bhupeshpaneru7@gmail.com">
                        <IoIosMail size={20} />
                      </a>
                    </li>
                    <li className="cursor-pointer hover:text-[#0a63bc] hover:bg-white rounded-[4px] transition-all duration-100 ease-in-out">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/bhupeshpaneru"
                      >
                        <IoLogoLinkedin size={20} />
                      </a>
                    </li>

                    <li className="cursor-pointer hover:text-black hover:bg-white rounded-[4px] transition-all duration-100 ease-in-out">
                      <a target="_blank" href="https://www.x.com/codewbhupesh">
                        <FaXTwitter size={20} />
                      </a>
                    </li>
                    <li className="cursor-pointer hover:text-black hover:bg-white rounded-full transition-all duration-100 ease-in-out">
                      <a target="_blank" href="https://www.github.com/iwhe">
                        <IoLogoGithub size={20} />
                      </a>
                    </li>
                    <li className="cursor-pointer ">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/bhupeshpaneru"
                      >
                        <IoLogoInstagram
                          size={20}
                          className="hover:text-[#C13584] hover:bg-white rounded-[4px] transition-all duration-100 ease-in-out"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="skills rotating-border w-full flex flex-col gap-2 p-4   bg-glass-light backdrop-blur-xl shadow-glass rounded-2xl z-10">
              <div className="heading text-center">
                <h1 className="text-2xl font-figtree text-black">i know</h1>
              </div>
              <div className="skillLists w-full max-w-[500px] mt-4">
                <ul className="relative flex flex-row flex-wrap gap-2">
                  {skills.map((skill) => (
                    <div>
                      <div
                        key={skill.id}
                        onMouseEnter={() => handleMouseEnter(skill.id)}
                        onMouseLeave={handleMouseLeave}
                        className="skill-item flex flex-row  w- items-center  relative  bg-transparent text-center cursor-pointer"
                      >
                        <div className="flex flex-row items-center justify-center overflow-hidden rounded-full border border-glass-medium">
                          <div className="w-6 h-6  border-r  border-glass-medium p-[2px] bg-white flex items-center justify-center">
                            <img
                              src={skill.image}
                              alt={skill.name}
                              className="object-cover box-border relative w-full"
                            />
                          </div>
                          <p className="px-2">{skill.name}</p>
                        </div>
                        {hoveredSkill === skill.id && (
                          <div className="transition-opacity duration-1000  skill-popup absolute bg-glass-strong backdrop-blur-xl shadow-glass rounded-xl p-2 mt-1 top-full z-[999] w-fit flex flex-col items-center text-black">
                            <h3 className="font-medium">{skill.name}</h3>
                            <ul className="list-none flex flex-row">
                              {Array.from({ length: 5 }, (_, index) => {
                                if (index < skill.level) {
                                  return (
                                    <li key={index}>
                                      <IoMdStar />
                                    </li>
                                  );
                                } else {
                                  return (
                                    <li key={index}>
                                      <IoMdStarOutline />
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="right h-full flex flex-col w-full justify-start items-start  gap-4 ">
            <div
              className="rotating-border projects w-full p-4   bg-glass-light 
              backdrop-blur-xl shadow-glass rounded-2xl  "
            >
              <div className="heading text-center text-black">
                <h1 className="text-2xl font-figtree">i have built</h1>
              </div>
              <div className="projectlist mt-2 md:mt-4 justify flex flex-col md:gap-4 ">
                {projects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    className="capitalize text-xl list-none"
                  >
                    <li
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="cursor-pointer font-bold  hover:text-blue-600  text-xl"
                    >
                      {project.name}
                    </li>
                  </div>
                ))}
                <div
                  onClick={() => navigate("/projectslist")}
                  className="cursor-pointer underline decoration-sky-500 text-gray-300 hover:text-amber-400 text-lg lowercase"
                >
                  more projects...
                </div>
              </div>
            </div>
            <div
              className="rotating-border experience w-full flex flex-col gap-2 p-4     bg-glass-light 
              backdrop-blur-xl shadow-glass rounded-2xl "
            >
              <div className="heading text-center  text-black">
                <h1 className="text-2xl  font-figtree">
                  companies i worked with
                </h1>
              </div>
              <div className="experienceDetail flex flex-col gap-2">
                <div className="flex flex-col gap-[1px]">
                  <p className=" text-lg font-bold">
                    {" "}
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/view9/"
                      className="hover:text-blue-600 hover:underline decoration-sky-500"
                    >
                      View9
                    </a>
                  </p>
                  <div className="text-gray-300">
                    <p className="text-sm"> Software Engineer </p>
                    <p> Oct 2024 - Mar 2025</p>
                  </div>
                </div>

                <div className="flex flex-col gap-[1px]">
                  <p className=" text-lg font-bold">
                    {" "}
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/predulive-labs"
                      className="hover:text-blue-600 hover:underline decoration-sky-500"
                    >
                      Predulive Labs
                    </a>
                  </p>
                  <div className="text-gray-300">
                    <p className="text-sm"> Web Development Intern </p>
                    <p> March 2024 - May 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" rotating-border education w-full flex flex-col gap-2 p-4   bg-glass-light 
              backdrop-blur-xl shadow-glass rounded-2xl   hover:drop-shadow-none border-[#2D0808]"
            >
              <div className="heading text-center  text-black">
                <h1 className="text-2xl font-figtree"> i studied</h1>
              </div>
              <div className="educationContent  ">
                <p className="text-lg ">
                  Bachelor of Engineering in{" "}
                  <span className="font-bold">Computer Science </span>
                </p>
                <div className="text-gray-300">
                  <p>
                    <a
                      target="_blank"
                      href="https://bmsit.ac.in/"
                      className="hover:text-blue-600 underline decoration-sky-500"
                    >
                      BMS Institute of Technology & Management{" "}
                    </a>
                  </p>
                  <p className="italic">2020-2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_page;
