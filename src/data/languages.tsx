import { FaCss3Alt, FaHtml5, FaJs, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import type { ListSkills } from "../types/ListSkills";

export const languages: ListSkills[] = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#0095ff]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Python", icon: <FaPython className="text-[#2e82c6]" /> }, 
];
