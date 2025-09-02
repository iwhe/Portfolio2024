import React, { useEffect, useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import Skills from "../utils/skills.js";
import { useNavigate } from "react-router-dom";
// import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import Projects from "../utils/projects.js";

const OtherSide = ({ handleFlip }) => {
  const [skills, setSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const [projects, setProject] = useState([]);

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
  const navigate = useNavigate();

  return (
    <div
      id="otherside"
      className="relative overflow-hdden m-4 w-96 md:w-3/5 rounded-2xl border bg-[#02011180] py-2 flex flex-col items-start justify-between"
    >
      <div className="w-full top-0 border-b border-[#16042D] pb-2 px-2 text-[10px]">
        <div
          onClick={handleFlip}
          className="w-fit px-4 py-2 border border-[#656565]  drop-shadow-button rounded-full flex items-center bg-primary-bg hover:bg-gray-100 hover:drop-shadow-none hover:border-[#2D0808] justify-center"
        >
          <BiSolidLeftArrow />
        </div>
      </div>
      <div className="content w-full h-full flex flex-col md:flex-row justify-start md:justify-between items-start  gap-2 p-4">
        <div className="left w-full">
          <div className="heading text-center md:text-left">
            <h1 className="md:text-2xl font-bold font-fira">Projects</h1>
          </div>
          <div className="projectlist mt-2 md:mt-4 justify xl:mx-4 flex flex-col md:gap-4 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="capitalize text-amber-400 md:text-xl list-none"
              >
                <li
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="cursor-pointer font-bold  hover:text-blue-600  md:text-xl"
                >
                  {project.name}
                </li>
                {/* <li
                  onClick={() => navigate("/project")}
                  className="cursor-pointer font-bold  hover:text-blue-600  md:text-xl"
                >
                  MediBlock: 'A decentralised medical ledger'
                </li>
                <li className="cursor-pointer font-bold  hover:text-blue-600 md:text-xl ">
                  Classroom Application
                </li>
                <li className="cursor-pointer font-bold  hover:text-blue-600 md:text-xl">
                  Funkiats: 'Emotion based music recommendation'
                </li>
                <li className="cursor-pointer font-bold  hover:text-blue-600 md:text-xl">
                  GApp using google API
                </li> */}
              </div>
            ))}
            <div
              onClick={() => navigate("/projectslist")}
              className="cursor-pointer underline decoration-sky-500 text-blue-600 hover:text-amber-400 md:text-lg lowercase"
            >
              more projects...
            </div>
          </div>
        </div>
        <div className="right w-full h-full flex flex-col gap-4">
          <div className="experience flex flex-col gap-2">
            <div className="heading text-center md:text-left">
              <h1 className="md:text-2xl font-bold font-fira">Experience</h1>
            </div>
            <div className="experienceDetail xl:mx-4 ">
              <p className="text-amber-400 md:text-lg font-bold">
                {" "}
                Web Development Intern{" "}
              </p>
              <p> March 2024 - May 2024</p>
              <p>
                {" "}
                <a
                  href="https://www.linkedin.com/company/predulive-labs"
                  className="hover:text-blue-600 underline decoration-sky-500"
                >
                  Predulive Labs
                </a>
              </p>
              <p className="text-amber-400 md:text-lg font-bold">
                {" "}
                Software Engineer{" "}
              </p>
              <p> Nov 2024 - Present</p>
              <p>
                {" "}
                <a
                  href="https://www.linkedin.com/company/view9/"
                  className="hover:text-blue-600 underline decoration-sky-500"
                >
                  View9
                </a>
              </p>
            </div>
          </div>
          <div className="skills w-full flex flex-col gap-2">
            <div className="heading text-center md:text-left">
              <h1 className="md:text-2xl font-bold font-fira">Skills</h1>
            </div>
            <div className="skillLists w-full xl:mx-4 mt-4">
              <ul className="relative grid grid-cols-5 gap-2">
                {skills.map((skill) => (
                  <div>
                    <div
                      key={skill.id}
                      onMouseEnter={() => handleMouseEnter(skill.id)}
                      onMouseLeave={handleMouseLeave}
                      className="flex flex-col items-center skill-item relative inline-block overflow- bg-white rounded-md p-2 text-center w-12 md:w-10 lg:w-12 cursor-pointer"
                    >
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="object-cover box-border relative w-full"
                      />
                      {hoveredSkill === skill.id && (
                        <div className="skill-popup absolute bg-black text-white p-2 rounded-md top-full z-[999] w-fit flex flex-col items-center">
                          <h3>{skill.name}</h3>
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
          <div className="education flex flex-col gap-2">
            <div className="heading text-center md:text-left">
              <h1 className="md:text-2xl font-bold font-fira"> Education</h1>
            </div>
            <div className="educationContent xl:mx-4 ">
              <p className="text-amber-400">
                Bachelor of Engineering in{" "}
                <span className="font-bold">Computer Science Engineering </span>
              </p>
              <p>
                <a
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
  );
};

export default OtherSide;
