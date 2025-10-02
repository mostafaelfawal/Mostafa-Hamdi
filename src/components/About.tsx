import { motion } from "framer-motion";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaServer,
  FaTools,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiRedux,
  SiVercel,
  SiAxios,
  SiVite,
} from "react-icons/si";
import type { Skills } from "../types";
import Skill from "./Skill";

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
  const languages: Skills[] = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-gray-800" /> },
  ];

  const devTools: Skills[] = [
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Axios", icon: <SiAxios className="text-purple-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-700" /> },
  ];

  const softSkills: Skills[] = [
    {
      name: "Problem-Solving",
      icon: <MdSyncProblem className="text-yellow-500" />,
    },
    { name: "Teamwork", icon: <RiTeamFill className="text-green-500" /> },
    { name: "Fast Learning", icon: <FaBrain className="text-blue-500" /> },
  ];

  return (
    <section id="About" className="max-w-7xl mx-auto px-6 py-16 md:text-left text-center">
      {/* Title */}
      <motion.h2
        className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-center text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Passionate front-end developer with expertise in modern web technologies
        and a keen eye for design.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-between mt-10 gap-10 items-center">
        {/* About Text */}
        <motion.div
          className="max-w-xl space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            variants={item}
          >
            I’m a self-taught Front-End Developer who started coding at 15. I
            specialize in creating modern, user-friendly web applications using
            React.js, TypeScript, and TailwindCSS. I’m always eager to learn new
            technologies, improve performance, and deliver clean, maintainable
            code. My goal is to combine strong technical skills with creativity
            to build products that provide great user experiences.
          </motion.p>

          {/* Skills Sections */}
          <div className="space-y-6">
            {/* Languages & Tools */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg"
              variants={item}
            >
              <div className="flex items-center gap-2 text-blue-500 font-semibold text-lg mb-2">
                <FaCode /> Languages & Tools
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    className="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-lg p-2 shadow hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    variants={item}
                  >
                    {lang.icon}
                    <span className="text-gray-700 dark:text-gray-200 text-sm">
                      {lang.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Developer Tools */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg"
              variants={item}
            >
              <div className="flex items-center gap-2 text-green-500 font-semibold text-lg mb-2">
                <FaTools /> Developer Tools
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {devTools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    className="flex items-center gap-2 bg-white dark:bg-gray-700 rounded-lg p-2 shadow hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    variants={item}
                  >
                    {tool.icon}
                    <span className="text-gray-700 dark:text-gray-200 text-sm">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg"
              variants={item}
            >
              <div className="flex items-center gap-2 text-yellow-500 font-semibold text-lg mb-2">
                <FaServer /> Soft Skills
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <Skill
                    key={skill.name}
                    variants={item}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </motion.div>
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
