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
    <section id={t("about")} className="max-w-7xl mx-auto px-6 py-16 text-center">
      {/* Title */}
      <motion.h2
        className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("about_title")}
      </motion.h2>

      <motion.p
        className="text-center text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t("about_description")}
      </motion.p>

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-10 items-center">
        {/* About Text */}
        <motion.div
          className="max-w-xl space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed md:text-start"
            variants={item}
          >
            {t("about_description1")}
            <span className="text-primary font-medium"> Next.js</span>,{" "}
            <span className="text-primary font-medium">React.js</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span>,
            <span className="text-primary font-medium">TailwindCSS</span>.
            {t("about_description2")}
          </motion.p>

          {/* Skills Sections */}
          <div className="space-y-6">
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
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
            src="/images/8.png"
            alt="mostafa-photo"
          />
        </motion.div>
      </div>
    </section>
  );
}
