import { motion } from "framer-motion";
import type { listSkills, Skills } from "../types";

export default function Skill({
  name,
  icon,
  variants,
  ratio,
}: Skills & listSkills) {
  return (
    <motion.article
      key={name}
      className="bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition-transform overflow-hidden"
      whileHover={{ scale: 1.05 }}
      variants={variants}
    >
      <div className="flex items-center gap-2 p-2">
        {icon}
        <span className="text-gray-700 dark:text-gray-200 text-sm">{name}</span>
      </div>
      <span className="font-semibold text-sm text-gray-500 ml-2">{ratio}%</span>
      <div className="w-[100%] h-1 flex">
        <div
          className={`h-full bg-green-500`}
          style={{ width: `${ratio}%` }}
        ></div>
      </div>
    </motion.article>
  );
}
