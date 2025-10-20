import { FaCode, FaServer, FaTools } from "react-icons/fa";
import { languages } from "./languages";
import { devTools } from "./Skills";
import { softSkills } from "./devTools";

export const skillsContainer = [
  {
    listSkills: languages,
    icon: <FaCode />,
    name: "languages_tools",
    color: "text-blue-500",
  },
  {
    listSkills: devTools,
    icon: <FaTools />,
    name: "developer_tools",
    color: "text-green-500",
  },
  {
    listSkills: softSkills,
    icon: <FaServer />,
    name: "soft_skills",
    color: "text-yellow-500",
  },
];