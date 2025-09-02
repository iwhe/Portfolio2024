import React from "react";
import profile_img from "../assets/profile_img.webp";

const FullScreen_profile = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 w-screen h-screen bg-zinc-600/50 flex flex-col items-center justify-center p-4 overflow-hidden transition-transform duration-300"
    >
      {/* fullScreen_profile */}
      <div
        // onClick={(e) => e.stopPropagation()}
        className="cursor-zoom-out  overflow-hidden  rounded-2xl  h-full aspect-square flex flex-col items-center justify-center"
      >
        <img
          src={profile_img}
          className="object-cover box-border  relative w-full h-full"
          alt="Profile"
        />
      </div>
      <button className=" text-black text-xl w-fit h-fit font-light hover:scale-110 transition-all duration-200">
        close
      </button>
    </div>
  );
};

export default FullScreen_profile;
