import { FaCode, FaServer, FaTools } from "react-icons/fa";
import { languages } from "./languages";
import { devTools } from "./devTools";
import { softSkills } from "./softSkills";
import { framework } from "./framework";
import { SiFramework } from "react-icons/si";

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
    listSkills: framework,
    icon: <SiFramework />,
    name: "frameworks_libraries",
    color: "text-red-400",
  },
  {
    listSkills: softSkills,
    icon: <FaServer />,
    name: "soft_skills",
    color: "text-yellow-500",
  },
];
