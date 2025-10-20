import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import type { listSkills } from "../types";
import { SiFirebase, SiTailwindcss, SiTypescript, SiVercel, SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const languages: listSkills[] = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    name: "Vite",
    icon: <SiVite className="text-purple-500" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-orange-500" />,
  },
  {
    name: "Git/GitHub",
    icon: <FaGitAlt className="text-red-600" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-gray-800" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="dark:text-white text-black" />,
  },
  {
    name: "Python",
    icon: <FaPython className="text-blue-400" />,
  },
];
