import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiTypescript } from "react-icons/si";
import type { ListSkills } from "../types/ListSkills";
import { DiMongodb } from "react-icons/di";

export const languages: ListSkills[] = [
  { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-black dark:text-[#ffffff]" />,
  },
  { name: "MongoDB", icon: <DiMongodb className="text-[#5eff00]" /> },
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#0095ff]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Python", icon: <FaPython className="text-[#2e82c6]" /> },
];
