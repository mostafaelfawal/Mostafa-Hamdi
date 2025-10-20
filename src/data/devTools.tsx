import { MdSyncProblem } from "react-icons/md";
import type { listSkills } from "../types";
import { RiTeamFill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";

export const softSkills: listSkills[] = [
  {
    name: "Problem-Solving",
    icon: <MdSyncProblem className="text-yellow-500" />,
  },
  {
    name: "Teamwork",
    icon: <RiTeamFill className="text-green-500" />,
  },
  {
    name: "Fast Learning",
    icon: <FaBrain className="text-blue-500" />,
  },
];
