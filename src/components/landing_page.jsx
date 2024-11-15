import React, { useEffect, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import OtherSide from "./otherSide.jsx";
import defaultProfile from "../assets/default-profile.jpg";

const Landing_page = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

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

  return (
    <div className="h-screen w-screen bg-primary-bg flex items-center justify-center overflow-hidden">
      {!isFlipped ? (
        <div className="relative m-4 w-96 h-[600px] md:w-3/5 md:h-4/5 rounded-2xl border bg-[#02011172] p-5 flex flex-col items-center justify-between">
          {/* Profile Image Placeholder */}

          <div className="flex  box-border flex-col md:flex-row md:gap-8 h-full ">
            <div className="flex md:flex-col flex-row gap-2 relative justify-left md:items-start space-y-2 w-full">
              <div className="flex flex-row md:flex-col justify-center items-center gap-4">
                <div className="overflow-hidden bg-gray-200 border border-black rounded-2xl min-h-32 min-w-32 lg:h-[240px] lg:w-[240px] flex items-center justify-center">
                  <img
                    src={defaultProfile}
                    className="object-cover box-border  relative w-full"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-white font-bold font-figtree relative text-[45px] leading-snug text-center mx-4">
                    Bhupesh Paneru
                  </h1>
                </div>
              </div>
            </div>

            <div className=" box-border w-full flex flex-col justify-center ">
              {/* Web Developer Text */}
              <div className="h-20 relative overflow-hidden text-[#fff]  font-extrabold font-anton text-4xl text-outline outline-red-500 tracking-wide mt-4">
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
                    className="absolute w-full text-left font-extrabold font-anton text-4xl"
                  >
                    {title}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* <div className="text-[#fff] text-center font-extrabold font-anton text-4xl text-outline outline-red-500 tracking-wide mt-4">
                {title}
              </div> */}

              {/* Short Summary */}
              <div className="text-white text-sm  mt-2 text-justify">
I am driven by a strong motivation to excel in the field of computer engineering. My goal is to leverage my broad skill set as a foundation for continuous improvement and specialization. I believe that with enough dedication and hard work, I can achieve significant milestones and make meaningful contributions to the industry. Collaboration and teamwork are essential to my approach, as I believe they lead to the best innovative solutions. In my free time, I love hiking, photography, and exploring the great outdoors.
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center md:items-start">
            <div className="socials flex items-center md:items-end">
              <ul className="list-none text-[10px]  flex flex-row gap-2 items-center md:items-end text-gray-300">
                <li className="hover:underline cursor-pointer hover:text-[#f6962f]">
                  Instagram
                </li>
                <li className="hover:underline cursor-pointer hover:text-[#383156]">
                  X
                </li>
                <li className="hover:underline cursor-pointer hover:text-[#0a63bc]">
                  LinkedIn
                </li>
                <li className="hover:underline cursor-pointer hover:text-[#383156]">
                  GitHub
                </li>
              </ul>
            </div>

            <div
              onClick={handleFlip}
              className="lowercase underline decoration-sky-500 text-[10px]  flex flex-row items-center justify-end text-right mt-2 gap-4 border-t border-gray-100 w-full pt-4"
            >
              <p className="text-gray-500 cursor-pointer hover:text-sky-100 italic">
                CLICK HERE TO SEE MY EXPERIENCE, PROJECTS AND SKILLS
              </p>
              <div className="px-4 py-2 border border-[#656565]  drop-shadow-button rounded-full flex items-center bg-primary-bg hover:bg-gray-100 hover:drop-shadow-none hover:border-[#2D0808] justify-center">
                <BiSolidRightArrow />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <OtherSide handleFlip={handleFlip} />
      )}
    </div>
  );
};

export default Landing_page;
