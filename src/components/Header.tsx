import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { HiLanguage } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { toggleTheme } from "../logic/Toggles/toggleTheme";
import { toggleLanguage } from "../logic/Toggles/toggleLanguage";
import type { LanguageType } from "../types/LanguageType";

export default function Header() {
  const [theme, setTheme] = useState<boolean>(true);
  const [language, setLanguage] = useState<LanguageType>("en");
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <FaHome />, label: t("home") },
    { path: "/about", icon: <FaUser />, label: t("about") },
    { path: "/projects", icon: <FaProjectDiagram />, label: t("projects") },
    { path: "/contact", icon: <FaEnvelope />, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 dark:bg-bg-dark bg-white border-b dark:border-gray-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/7.png"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <Link
                to="/"
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary transition-colors"
              >
                {t("name")}
                <span className="text-primary">.</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("jop")}
              </p>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-white dark:bg-gray-700 text-primary shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-white/50 dark:hover:bg-gray-700/50"
                }`}
              >
                {item.icon}
                <span className="hidden sm:block">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => toggleTheme(setTheme, theme)}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              whileTap={{ rotate: 180, scale: 0.8 }}
            >
              {theme ? <FaSun /> : <FaMoon />}
            </motion.button>

            <button
              onClick={() => toggleLanguage(language, setLanguage, i18n)}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-500/20 transition-colors"
            >
              <HiLanguage />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
