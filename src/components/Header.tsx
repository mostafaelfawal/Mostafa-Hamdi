import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiLanguage } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { toggleTheme } from "../logic/Toggles/toggleTheme";
import { toggleLanguage } from "../logic/Toggles/toggleLanguage";
import { handleScroll } from "../logic/handleScroll";
import type { LanguageType } from "../types/LanguageType";

export default function Header() {
  const [theme, setTheme] = useState<boolean>(true);
  const [language, setLanguage] = useState<LanguageType>("en");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const navLinks = [t("home"), t("about"), t("projects"), t("contact")];

  return (
    <header className="sticky top-0 dark:bg-bg-dark bg-white max-w-7xl mx-auto px-6 py-4 flex justify-between items-center dark:border-b dark:border-b-gray-600 shadow-md z-50">
      {/* Logo */}
      <motion.a
        href="/"
        className="text-2xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("name")}
        <span className="text-primary">.</span>
      </motion.a>

      {/* Desktop Nav */}
      <motion.nav
        className="hidden md:flex space-x-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {navLinks.map((link, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleScroll(link, setMenuOpen)}
            className="bg-transparent border-none text-gray-600 dark:text-gray-300 hover:text-primary-light transition-colors"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {link}
          </motion.button>
        ))}
      </motion.nav>

      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <motion.button
          onClick={() => toggleTheme(setTheme, theme)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          whileTap={{ rotate: 180, scale: 0.8 }}
        >
          {theme ? <FaSun /> : <FaMoon />}
        </motion.button>
        {/* toggle language */}
        <button
          onClick={() => toggleLanguage(language, setLanguage, i18n)}
          className="p-2 rounded-full text-yellow-700 dark:text-yellow-600 hover:bg-yellow-200/50 dark:hover:bg-yellow-500/50 transition-colors duration-300"
        >
          <HiLanguage />
        </button>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-white dark:bg-bg-dark shadow-md flex flex-col items-center py-6 space-y-6 md:hidden z-40"
        >
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(link, setMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-light transition-colors text-lg"
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
