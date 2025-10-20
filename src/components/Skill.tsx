import { motion } from "framer-motion";
import type { listSkills, Skills } from "../types";

export default function Skill({ name, icon, variants }: Skills & listSkills) {
  return (
    <motion.article
      key={name}
      className="flex items-center gap-2 p-2 bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition-transform overflow-hidden"
      whileHover={{ scale: 1 }}
      variants={variants}
    >
      {icon}
      <span className="text-gray-700 dark:text-gray-200 text-sm">{name}</span>
    </motion.article>
  );
}
