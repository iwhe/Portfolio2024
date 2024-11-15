import ReactJS from "../assets/skills/react.png";
import NodeJS from "../assets/skills/node-js.png";

const Projects = () => {
  const projects = [
    {
      Project1: {
        id: "1",
        name: "Project 1",
        description: "Project 1",
        demoVideo: "Project 1",
        deployedLink: "Project 1",
        technologies: [
          {
            image: { ReactJS },
            name: "Project 1",
          },
          {
            image: { ReactJS },
            name: "Project 1",
          },
        ],
      },
      Project2: {
        id: "2",
        name: "Project 2",
        description: "Project 2",
        demoVideo: "Project 2",
        deployedLink: "Project 2",
        technologies: {
          image: { NodeJS },
          name: "",
        },
      },
    },
  ];
  return projects;
};
export default Projects;
