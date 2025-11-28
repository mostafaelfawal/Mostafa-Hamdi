// ProjectCard.tsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import type { ProjectType } from "../types/ProjectType";
import type { LanguageType } from "../types/LanguageType";

export default function ProjectCard({
  img,
  title,
  description,
  liveDemoLink,
  githubLink,
  finished,
}: ProjectType) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

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
        alt={title[lang as LanguageType]}
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title[lang as LanguageType]}
          </h3>
        </div>
        {finished ? (
          <span className="rounded-full border px-3 py-1 text-sm text-green-500 border-green-500">
            {t("completed")}
          </span>
        ) : (
          <span className="rounded-full border px-3 py-1 text-sm text-red-500 border-red-500">
            {t("not_completed")}
          </span>
        )}
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {description[lang as LanguageType]}
        </p>
        <div className="flex space-x-4 mt-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open(liveDemoLink, "_blank")}
            className="min-w-fit flex items-center gap-2 px-4 py-2 bg-primary-light text-white rounded-lg text-sm hover:bg-primary transition-colors"
          >
            <FaShareFromSquare />
            {t("live_demo")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open(githubLink, "_blank")}
            className="min-w-fit flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
          >
            <FaGithub /> {t("contact_github_label")}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
