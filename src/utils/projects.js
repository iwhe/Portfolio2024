import {
  HTML,
  CSS,
  JavaScript,
  Python,
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
  PWMDescription,
  PWMCover,
  DemoPWM,
  Vue,
} from "./export.js";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Funkiats - Emotion-based Music System",
      cover: FunkiatsCover,
      description: FunkiatsDescription,
      demoVideo: "",
      links: [
        {
          name: "Live",
          link: "https://funkiats.bhupeshpaneru.com.np/",
        },
        {
          name: "Demo",
          link: "https://youtu.be/fSShnT5DNtA",
        },
        {
          name: "Source Code",
          link: "https://github.com/iwhe/FUNKIATS/",
        },
      ],
      technologies: [
        {
          image: ReactJS,
          name: "ReactJS",
        },
        {
          image: Tailwind,
          name: "Tailwind CSS",
        },
        {
          image: NodeJS,
          name: "Node.js",
        },
        {
          image: Python,
          name: "Python",
        },
      ],
    },
    {
      id: "5",
      name: "Password Manager",
      cover: PWMCover,
      description: PWMDescription,
      demoVideo: DemoPWM,
      links: [
        {
          name: "Source Code",
          link: "https://github.com/iwhe/Password-Manager/",
        },
      ],
      technologies: [
        {
          image: Vue,
          name: "Vue.js",
        },
        {
          image: NodeJS,
          name: "Node.js",
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
  ];
  return projects;
};
export default Projects;
