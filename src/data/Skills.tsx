import type { ListSkills } from "../types/ListSkills";
import {
  SiAxios,
  SiJest,
  SiMui,
  SiPostman,
  SiReacthookform,
  SiRedux,
  SiTestinglibrary,
  SiZod,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const devTools: ListSkills[] = [
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
  {
    name: "Zod",
    icon: <SiZod className="text-blue-400" />,
  },
  {
    name: "Hook-form",
    icon: <SiReacthookform className="text-red-500" />,
  },
];
