import Figma from "../assets/skills/figma.png";
import Java from "../assets/skills/java.png";
import Js from "../assets/skills/js.png";
import Node from "../assets/skills/node-js.png";
import Canva from "../assets/skills/canva.jpg";
import ReactJS from "../assets/skills/react.png";
import Python from "../assets/skills/python.png";
import Html from "../assets/skills/html.png";
import Css from "../assets/skills/css.png";
import Mongo from "../assets/skills/mongo.png";
import Postman from "../assets/skills/postman.png";
import Vercel from "../assets/skills/vercel.png";
import Mysql from "../assets/skills/mysql.png";
import GitHub from "../assets/skills/github.png";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", level: "Beginner", image: Html },
    { id: 2, name: "CSS", level: "Beginner", image: Css },
    { id: 3, name: "JavaScript", level: "Beginner", image: Js },
    { id: 4, name: "Node JS", level: "Beginner", image: Node },
    { id: 5, name: "React JS", level: "Beginner", image: ReactJS },
    { id: 6, name: "MongoDB", level: "Beginner", image: Mongo },
    { id: 7, name: "MySQL", level: "Beginner", image: Mysql },
    { id: 8, name: "Python", level: "Beginner", image: Python },
    { id: 9, name: "Java", level: "Beginner", image: Java },
    { id: 10, name: "GitHub", level: "Beginner", image: GitHub },
    { id: 11, name: "Postman", level: "Beginner", image: Postman },
    { id: 12, name: "Vercel", level: "Beginner", image: Vercel },
    { id: 13, name: "Figma", level: "Beginner", image: Figma },
    { id: 14, name: "Canva", level: "Beginner", image: Canva },
  ];
  return skills;
};

export default Skills;
