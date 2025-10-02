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
import type { listSkills } from "../types";
import SkillsContainer from "./SkillsContainer";

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
  const languages: listSkills[] = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-gray-800" /> },
    // { name: "Next.js",icon: <RiNextjsFill className="dark:text-white text-black" /> },
  ];

  const devTools: listSkills[] = [
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Axios", icon: <SiAxios className="text-purple-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-700" /> },
  ];

  const softSkills: listSkills[] = [
    {
      name: "Problem-Solving",
      icon: <MdSyncProblem className="text-yellow-500" />,
    },
    { name: "Teamwork", icon: <RiTeamFill className="text-green-500" /> },
    { name: "Fast Learning", icon: <FaBrain className="text-blue-500" /> },
  ];

  return (
    <section
      id="About"
      className="max-w-7xl mx-auto px-6 py-16 md:text-left text-center"
    >
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

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-10 items-center">
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
            <SkillsContainer
              listSkills={languages}
              icon={<FaCode />}
              name="Languages & Tools"
              variants={item}
              color="text-blue-500"
            />

            {/* Developer Tools */}
            <SkillsContainer
              listSkills={devTools}
              icon={<FaTools />}
              name="Developer Tools"
              variants={item}
              color="text-green-500"
            />

            {/* Soft Skills */}
            <SkillsContainer
              listSkills={softSkills}
              icon={<FaServer />}
              name="Soft Skills"
              variants={item}
              color="text-yellow-500"
            />
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
