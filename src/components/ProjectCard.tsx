// ProjectCard.tsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import type { ProjectType } from "../types";

export default function ProjectCard({
  img,
  title,
  description,
  liveDemoLink,
  githubLink,
}: ProjectType) {
  return (
    <motion.article
      className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img
        onClick={() => window.open(liveDemoLink, "_blank")}
        className="cursor-pointer w-full h-48 object-cover"
        src={img}
        alt={title}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {description}
        </p>
        <div className="flex space-x-4 mt-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open(liveDemoLink, "_blank")}
            className="flex items-center gap-2 px-4 py-2 bg-primary-light text-white rounded-lg text-sm hover:bg-primary transition-colors"
          >
            <FaShareFromSquare />
            Live Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open(githubLink, "_blank")}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
          >
            <FaGithub /> GitHub
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
