import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const parentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="Home"
      className="flex md:gap-7 md:flex-row flex-col-reverse justify-between items-center px-6 max-w-7xl mx-auto mt-12"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-center md:text-start max-w-xl space-y-4"
        variants={childVariants}
      >
        <h1 className="mt-5 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight max-w-143">
          {t("hy")} <span className="text-primary">{t("full_name")}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          {t("jop")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {t("jop_description")}
          <span className="text-primary font-medium">Next.js</span>,{" "}
          <span className="text-primary font-medium">TypeScript</span>,{" "}
          <span className="text-primary font-medium">TailwindCSS</span>{" "}
          <span className="text-primary font-medium">React.js</span>.
        </p>
      </motion.div>

      <motion.div className="relative" variants={childVariants}>
        <img
          className="min-w-72 w-72 h-72 rounded-full object-cover border-4 border-white dark:border-gray-800 
          shadow-[0_0_25px_5px_rgba(59,130,246,0.6),0_0_50px_10px_rgba(37,99,235,0.4),0_0_75px_15px_rgba(29,78,216,0.3)]"
          src="/images/7.png"
          alt="mostafa-photo"
        />
      </motion.div>
    </motion.section>
  );
}
