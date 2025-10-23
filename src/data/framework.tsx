import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiMui,
  SiReacthookform,
  SiRedux,
  SiTailwindcss,
  SiZod,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import type { ListSkills } from "../types/ListSkills";

export const framework: ListSkills[] = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="dark:text-white text-black" />,
  },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "MUI", icon: <SiMui className="text-[#007FFF]" /> },
  {
    name: "Framer-Motion",
    icon: <TbBrandFramerMotion className="text-[#0055FF]" />,
  },
  { name: "Zod", icon: <SiZod className="text-[#3068B7]" /> },
  { name: "hook-form", icon: <SiReacthookform className="text-[#EC5990]" /> },
];
