import { motion } from "framer-motion";
import SkillsContainer from "./SkillsContainer";
import { useTranslation } from "react-i18next";
import { skillsContainer } from "../data/skillsContainers";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("about_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t("about_description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              variants={item}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("my_story")}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("about_description1")}
                <span className="text-primary font-medium"> Next.js</span>,{" "}
                <span className="text-primary font-medium">React.js</span>,{" "}
                <span className="text-primary font-medium">TypeScript</span>,{" "}
                <span className="text-primary font-medium">TailwindCSS</span>.
                {t("about_description2")}
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              variants={item}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t("tech_stack")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "TailwindCSS",
                  "Node.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {skillsContainer.map((s, i) => (
              <SkillsContainer
                key={i}
                listSkills={s.listSkills}
                icon={s.icon}
                name={t(s.name)}
                color={s.color}
                variants={item}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
