// ProjectCard.tsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
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
      className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 flex flex-col border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <img
          onClick={() => window.open(liveDemoLink, "_blank")}
          className="cursor-pointer w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700"
          src={img}
          alt={title[lang as LanguageType]}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {finished ? (
            <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              <FaStar className="text-yellow-300" />
              {t("completed")}
            </div>
          ) : (
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              {t("in_progress")}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              window.open(liveDemoLink, "_blank");
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-xl font-semibold hover:bg-white transition-colors shadow-lg"
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="text-blue-600" />
            {t("live_demo")}
          </motion.button>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubLink, "_blank");
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-gray-900 transition-colors shadow-lg"
            whileTap={{ scale: 0.95 }}
          >
            <FaCode />
            {t("code")}
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
          {title[lang as LanguageType]}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-lg">
          {description[lang as LanguageType]}
        </p>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
          <motion.a
            href={githubLink}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group/github"
            whileHover={{ x: 5 }}
          >
            <FaGithub className="text-xl group-hover/github:text-purple-600 transition-colors" />
            <span className="font-medium">{t("view_code")}</span>
          </motion.a>

          <motion.a
            href={liveDemoLink}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all group/demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t("explore")}</span>
            <FaExternalLinkAlt className="group-hover/demo:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.article>
  );
}
