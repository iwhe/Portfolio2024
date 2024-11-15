import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Figma from "../assets/skills/figma.png";
import Reac from "../assets/skills/react.png";
import NodeJs from "../assets/skills/css.png";
import Canva from "../assets/skills/canva.jpg";
import Projects from '../utils/projects';

const ProjectPage = () => {
    const [project, setProject] = useState({
        id: "",
        name: "",
        description: "",
        demoVideo: "",
        deployedLink: "",
        technologies:[],
    })
    const getProject = () => {
    useEffect(() => {
        setTimeout(() => {
            
      
        const projectData = Projects();
        console.log("Projects:", projectData);
        
        // Assuming Projects is an array or object and you want the first project's data
        const selectedProject = projectData[0].Project1;  
        console.log("Selected  Project: ", selectedProject);

        
        if (selectedProject) {
            setProject((value) =>({
                ...value,
                id: selectedProject?.id,
                name: selectedProject?.name,
                description: selectedProject?.description,
                demoVideo: selectedProject?.demoVideo,
                deployedLink: selectedProject?.deployedLink,
                technologies: selectedProject?.technologies,
            }));
            
        }
    }, 1000);
    console.log("Project:",project);
    }, project);
    return project;
}
getProject();
    const navigate = useNavigate();

  return (
    <div className='w-screen h-screen bg-[#030122] text-[#fff] overflow-hidden'>
        <div 
        
        className="text-6xl">
            <IoIosArrowRoundBack 
            className='rounded-full hover:text-red-200'
            onClick={() => navigate("/")}/>
        </div>
        <div className="projectDetails p-2 flex flex-col justify-center items-center w-screen">
        <h1 className='font-alfaSlab text-[30px] capitalize w-full text-left md:px-2'>MediBlock: "A decentralised medical record System"</h1>
        <div className='description w-screen lg:w-[1080px] h-full mt-4 p-4 flex flex-col items-center justify-center gap-2'>
            {/* <div className="technologyUsed  w-full h-full flex flex-row items-start justify-start md:gap-4">
                <h2>Technologies Used: </h2>
                <div className='flex flex-row flex-wrap gap-2 '>
                {project.technologies.map((tech, index)=>{
                    <div 
                    key={index}
                    className=" relative tech-items w-28 h-10 bg-white text-black flex flex-row gap-2 text-sm p-2 border border-white rounded-full">
                    <img src={tech.image} alt = "logo"></img>
                    <p className='border-l border-white'>{tech.name}</p>
                </div>
                })}
                </div>
            </div> */}
            <div className="px-2 technologyUsed  w-full h-full flex flex-col lg:flex-row items-start justify-start md:gap-4">
            <h2 className='px-2'>Technologies Used: </h2>
                <div className='relative flex flex-wrap flex-row gap-1 items-center justify-center'>
                <div className="relative tech-items overflow-hidden max-w-28 h-8 bg-black text-white flex flex-row gap-1 text-sm flex flex-row justify-center items-center border border-white rounded-full">
                <div className='w-6 object-cover bg-white relative border-r border-blue-900 h-full flex items-center'>
                    <img src={Canva} alt = "logo"
                    //  className='w-4 object-cover bg-white relative border-r border-blue-400 h-full'
                     ></img>
                    </div>
                    <p className='border-l border-white'>Ethereum</p>
                </div>
                <div className="relative tech-items overflow-hidden max-w-28 h-8 bg-black text-white flex flex-row gap-1 text-sm flex flex-row justify-center items-center border border-white rounded-full">
                    <div className='w-6 object-cover bg-white relative border-r border-blue-900 h-full flex items-center'>
                    <img src={Figma} alt = "logo"
                    //  className='w-4 object-cover bg-white relative border-r border-blue-400 h-full'
                     ></img>
                    </div>
                    <p className='px-1'>Solidity</p>
                </div>
                <div className="relative tech-items overflow-hidden max-w-28 h-8 bg-black text-white flex flex-row gap-1 text-sm flex flex-row justify-center items-center border border-white rounded-full">
                <div className='w-6 object-cover bg-white relative border-r border-blue-900 h-full flex items-center'>
                    <img src={Reac} alt = "logo"
                    //  className='w-4 object-cover bg-white relative border-r border-blue-400 h-full'
                     ></img>
                    </div>
                    <p className='border-l border-white w-fit'>ReactJS</p>
                </div>
                <div className="relative tech-items overflow-hidden max-w-28 h-8 bg-black text-white flex flex-row gap-1 text-sm flex flex-row justify-center items-center border border-white rounded-full">
                <div className='w-6 object-cover bg-white relative border-r border-blue-900 h-full flex items-center'>
                    <img src={NodeJs} alt = "logo"
                    //  className='w-4 object-cover bg-white relative border-r border-blue-400 h-full'
                     ></img>
                    </div>
                    <p className='border-l border-white'>NodeJS</p>
                </div>
                <div className="relative tech-items overflow-hidden max-w-28 h-8 bg-black text-white flex flex-row gap-1 text-sm flex flex-row justify-center items-center border border-white rounded-full">
                <div className='w-6 object-cover bg-white relative border-r border-blue-900 h-full flex items-center'>
                    <img src={Canva} alt = "logo"
                    //  className='w-4 object-cover bg-white relative border-r border-blue-400 h-full'
                     ></img>
                    </div>
                    <p className='border-l border-white'>Ganache</p>
                </div>
                <div className="relative tech-items overflow-hidden max-w-28 h-8 bg-black text-white flex flex-row gap-1 text-sm flex flex-row justify-center items-center border border-white rounded-full">
                <div className='w-6 object-cover bg-white relative border-r border-blue-900 h-full flex items-center'>
                    <img src={Figma} alt = "logo"
                    //  className='w-4 object-cover bg-white relative border-r border-blue-400 h-full'
                     ></img>
                    </div>
                    <p className='border-l border-white'>IPFS</p>
                </div>
                </div>
            </div>
            {/* <div className="technologyUsed relative w-full h-full flex flex-col md:flex-row md:gap-4 items-start justify-center">
                <h2>Technologies Used: </h2>
                <div className='relative flex flex-wrap flex-row gap-1 items-center justify-center'>
                <div className="relative tech-items w-28 h-8 bg-black text-white flex flex-row gap-2 text-sm p-2 border border-white rounded-full">
                    <img src="" alt = "logo"></img>
                    <p className='border-l border-white'>Ethereum</p>
                </div>
                <div className="relative tech-items overflow-hidden max-w-28 h-8 bg-black text-white flex flex-row gap-1 text-sm flex flex-row justify-center items-center border border-white rounded-full">
                    <div className='w-6 object-cover bg-white relative border-r border-blue-900 h-full flex items-center'>
                    <img src={Figma} alt = "logo"
                    //  className='w-4 object-cover bg-white relative border-r border-blue-400 h-full'
                     ></img>
                    </div>
                    <p className='px-1'>Solidity</p>
                </div>
                <div className="relative tech-items overflow-hidden  max-w-28 h-8 bg-black text-white  flex flex-row gap-2 text-sm p-2 border border-white rounded-full">
                    <img src="" alt = "logo"></img>
                    <p className='border-l border-white w-fit'>ReactJS</p>
                </div>
                <div className=" relative tech-items overflow-hidden  w-28 h-10  bg-black text-white flex flex-row gap-2 text-sm p-2 border border-white rounded-full">
                    <img src="" alt = "logo"></img>
                    <p className='border-l border-white'>NodeJS</p>
                </div>
                <div className=" relative tech-items overflow-hidden  w-28 h-10  bg-black text-white flex flex-row gap-2 text-sm p-2 border border-white rounded-full">
                    <img src="" alt = "logo"></img>
                    <p className='border-l border-white'>Ganache</p>
                </div>
                <div className=" relative tech-items overflow-hidden w-28 h-10  bg-black text-white flex flex-row gap-2 text-sm p-2 border border-white rounded-full">
                    <img src="" alt = "logo"></img>
                    <p className='border-l border-white'>IPFS</p>
                </div>
                </div>
            </div> */}
        </div>
        </div>
        
        </div>
  )
}
export default ProjectPage;