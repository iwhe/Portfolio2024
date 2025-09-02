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
import Vue from "../assets/skills/vue_js_icon_188136.webp";

const Skills = () => {
  const skills = [
    { id: 4, name: "Node.js", level: 3, image: Node },
    { id: 5, name: "ReactJS", level: 3, image: ReactJS },
    { id: 6, name: "MongoDB", level: 3, image: Mongo },
    { id: 7, name: "MySQL", level: 3, image: Mysql },
    { id: 8, name: "Python", level: 2, image: Python },
    { id: 1, name: "HTML", level: 4, image: Html },
    { id: 2, name: "CSS", level: 4, image: Css },
    { id: 3, name: "JavaScript", level: 4, image: Js },
    { id: 9, name: "Java", level: 2, image: Java },
    { id: 10, name: "GitHub", level: 4, image: GitHub },
    { id: 11, name: "Postman", level: 3, image: Postman },
    { id: 12, name: "Vercel", level: 3, image: Vercel },
    { id: 13, name: "Figma", level: 3, image: Figma },
    { id: 14, name: "Canva", level: 4, image: Canva },
    { id: 15, name: "Vue", level: 1, image: Vue },
  ];
  return skills;
};

export default Skills;
