import type { listSkills } from "../types";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiAxios,
  SiJest,
  SiMui,
  SiPostman,
  SiRedux,
  SiTestinglibrary,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const devTools: listSkills[] = [
  {
    name: "VS Code",
    icon: <BiLogoVisualStudio className="text-blue-500" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-500" />,
  },
  {
    name: "Axios",
    icon: <SiAxios className="text-purple-500" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-700" />,
  },
  { name: "MUI", icon: <SiMui className="text-blue-500" /> },
  {
    name: "FramerMotion",
    icon: <TbBrandFramerMotion className="text-red-400" />,
  },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  {
    name: "Testing Lib",
    icon: <SiTestinglibrary className="text-red-700" />,
  },
];

