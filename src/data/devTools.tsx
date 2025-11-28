import { FaGitAlt } from "react-icons/fa";
import {
  SiAxios,
  SiFirebase,
  SiJest,
  SiJsonwebtokens,
  SiPostman,
  SiTestinglibrary,
  SiVercel,
  SiVite,
} from "react-icons/si";
import type { ListSkills } from "../types/ListSkills";

export const devTools: ListSkills[] = [
  { name: "JWT", icon: <SiJsonwebtokens className="text-[#00ffb3]" /> },
  { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Axios", icon: <SiAxios className="text-[#5A29E4]" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  { name: "Jest", icon: <SiJest className="text-[#C21325]" /> },
  {
    name: "Testing Lib",
    icon: <SiTestinglibrary className="text-[#E33332]" />,
  },
];
