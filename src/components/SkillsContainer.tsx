import { motion } from "framer-motion";
import type { ListSkills, Skills } from "../types/types";
import Skill from "./Skill";

export default function SkillsContainer({
  name,
  icon,
  listSkills,
  variants,
  color,
}: Skills & ListSkills & { color: string }) {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg"
      variants={variants}
    >
      <div
        className={`flex items-center gap-2 ${color} font-semibold text-lg mb-2`}
      >
        {icon} {name}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {listSkills!.map((tool) => (
          <Skill key={tool.name} name={tool.name} icon={tool.icon} />
        ))}
      </div>
    </motion.div>
  );
}
