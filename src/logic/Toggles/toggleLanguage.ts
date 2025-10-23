import type { i18n } from "i18next";
import type { LanguageType } from "../../types/LanguageType";

export const toggleLanguage = (
  language: LanguageType,
  setLanguage: (v: LanguageType) => void,
  i18n: i18n
) => {
  const newLang = language === "en" ? "ar" : "en";
  setLanguage(newLang);
  i18n.changeLanguage(newLang);
  document.documentElement.setAttribute(
    "dir",
    newLang === "ar" ? "rtl" : "ltr"
  );
  document.documentElement.setAttribute("lang", newLang);
};
