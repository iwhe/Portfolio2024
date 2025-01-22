// import ReactJS from "../assets/skills/react.png";
// import NodeJS from "../assets/skills/node-js.png";
// import DemoClassroom from "../assets/projects/demoVideos/Classroom Assignment Demo .mp4";
import { image } from "framer-motion/client";
import {
  ReactJS,
  NodeJS,
  Tailwind,
  MongoDB,
  MySQL,
  IPFS,
  Ganache,
  Metamask,
  Solidity,
  DemoClassroom,
  GappCover,
  ClassroomCover,
  MediblockCover,
  FunkiatsCover,
  ClassroomDescription,
  FunkiatsDescription,
  GappDescription,
  MediblockDescription,
} from "./export.js";

/**Attendance tracking**
- **Assignment submissions**
- **Real-time notifications**/
const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Classroom Application",
      cover: ClassroomCover,
      description: ClassroomDescription,
      demoVideo: DemoClassroom,
      links: [
        {
          name: "Github",
          link: "https://github.com/iwhe/Classroom-Application",
        },
        {
          name: "Demo",
          link: "https://drive.google.com/file/d/1gYNqcOMGQoLzAcpYirPqjz0NDoZ7Ne73/view?usp=drive_link",
        },
        {
          name: "Deployed",
          link: "https://classroom-application-1.onrender.com/",
        },
      ],
      technologies: [
        {
          image: ReactJS,
          name: "ReactJS",
        },
        {
          image: NodeJS,
          name: "Node.js",
        },
        {
          image: ReactJS,
          name: "ReactJS",
        },
        {
          image: MongoDB,
          name: "MongoDB",
        },
        {
          image: Tailwind,
          name: "Tailwind CSS",
        },
      ],
    },
    {
      id: "2",
      name: "MediBlock",
      cover: MediblockCover,
      description: MediblockDescription,
      demoVideo: "",
      links: [
        {
          name: "Github",
          link: "https://github.com/iwhe/MediBlock---Decentralized-Health-Record-System",
        },
      ],

      technologies: [
        {
          image: IPFS,
          name: "IPFS",
        },
        {
          image: Solidity,
          name: "Solidity",
        },
        {
          image: Ganache,
          name: "Ganache",
        },
        {
          image: ReactJS,
          name: "React",
        },
        {
          image: Metamask,
          name: "MetaMask",
        },
        {
          image: Tailwind,
          name: "Tailwind CSS",
        },
      ],
    },
    {
      id: "3",
      name: "GApp using Google API",
      cover: GappCover,
      description: GappDescription,
      demoVideo: "",
      links: [
        {
          name: "Github",
          link: "https://github.com/iwhe/G-App-using-google-Api",
        },
        {
          name: "Demo",
          link: "www.github.com/iwhe",
        },
      ],
      technologies: [
        {
          name: "MySQL",
          image: MySQL,
        },
        {
          image: ReactJS,
          name: "ReactJS",
        },
        {
          image: NodeJS,
          name: "Node.js",
        },
        {
          image: Tailwind,
          name: "Tailwind CSS",
        },
      ],
    },
    {
      id: "4",
      name: "Funkiats - A Emotion-based Music System",
      cover: FunkiatsCover,
      description: FunkiatsDescription,
      demoVideo: "",
      links: [
        {
          name: "Github",
          link: "https://github.com/iwhe/FUNKIATS-EMOTION-BASED-MUSIC-SYSTEM/",
        },
      ],
      technologies: [
        {
          image: ReactJS,
          name: "ReactJS",
        },
        {
          image: NodeJS,
          name: "Node.js",
        },
      ],
    },
  ];
  return projects;
};
export default Projects;
