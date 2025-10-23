import { MdSyncProblem } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaBrain, FaPalette } from "react-icons/fa";
import type { ListSkills } from "../types/ListSkills";

export const softSkills: ListSkills[] = [
  {
    name: "Problem-Solving",
    icon: <MdSyncProblem className="text-[#FACC15]" />,
  },
  { name: "Teamwork", icon: <RiTeamFill className="text-[#22C55E]" /> },
  { name: "Fast Learning", icon: <FaBrain className="text-[#3B82F6]" /> },
  { name: "UI/UX", icon: <FaPalette className="text-[#EC4899]" /> },
];
