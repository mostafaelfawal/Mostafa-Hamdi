import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { handleScroll } from "../logic/handleScroll";

export default function Footer() {
  const { t } = useTranslation();
  const navLinks = [t("home"), t("about"), t("projects"), t("contact")];

  return (
    <footer className="dark:bg-bg-dark bg-white border-t dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <motion.a
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("name")}
          <span className="text-primary">.</span>
        </motion.a>

        {/* Navigation Links */}
        <motion.nav
          className="flex flex-wrap justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {navLinks.map((link, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleScroll(link)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-light transition-colors"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {link}
            </motion.button>
          ))}
        </motion.nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
          <motion.a
            href="mailto:armostafa982@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-primary-light transition-colors"
          >
            <FaEnvelope size={22} />
          </motion.a>
          <motion.a
            href="https://github.com/mostafaelfawal"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-primary-light transition-colors"
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/mostafa-hamdi-75044334b"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-primary-light transition-colors"
          >
            <FaLinkedin size={22} />
          </motion.a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 pb-6">
        © {new Date().getFullYear()} {t("full_name")}. {t("copyright")}.
      </div>
    </footer>
  );
}
