// Projects.tsx
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="Projects" className="py-16 max-w-7xl mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("projects_title")}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {t("projects_description")}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            img={p.img}
            title={p.title}
            description={p.description}
            liveDemoLink={p.liveDemoLink}
            githubLink={p.githubLink}
          />
        ))}
      </motion.div>
    </section>
  );
}
