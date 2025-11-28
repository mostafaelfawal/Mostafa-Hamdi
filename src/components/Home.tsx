import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            variants={itemVariants}
          >
            {t("hy")}{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {t("full_name")}
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200"
            variants={itemVariants}
          >
            {t("jop")}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            {t("jop_description")}
            <span className="text-primary font-medium">Next.js</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span>,{" "}
            <span className="text-primary font-medium">TailwindCSS</span>,{" "}
            <span className="text-primary font-medium">React.js</span>.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={itemVariants}
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              {t("view_projects")}
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              {t("about")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative flex justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.img
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              src="/images/7.png"
              alt="Mostafa Hamdi"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-20 blur-xl -z-10"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
