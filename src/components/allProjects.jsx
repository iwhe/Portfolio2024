import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const AllProjects = () => {

  const navigate = useNavigate();
  return (
    <div
    className='allProjects p-2 h-screen w-screen bg-[#030122]'
    >
        <div className="back">
            <IoIosArrowRoundBack 
            onClick={ () => navigate("/")}
            className='text-4xl text-white'
            />
        </div>
        <div className='content p-6 h-full'>
            <div className="projects bg-red-800 p-2 h-full">
                <ul className='flex flex-col justify-between w-full h-full'>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
                <li>Project 5</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AllProjects;