import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { handleSendEmail } from "../logic/handleSendEmail";
import type { FormType } from "../types/FormType";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      title: t("contact_email_label"),
      value: "armostafa982@gmail.com",
      link: "mailto:armostafa982@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      title: t("contact_linkedin_label"),
      value: "mostafa-hamdi-75044334b",
      link: "https://linkedin.com/in/mostafa-hamdi-75044334b",
    },
    {
      icon: <FaGithub />,
      title: t("contact_github_label"),
      value: "mostafaelfawal",
      link: "https://github.com/mostafaelfawal",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t("location"),
      value: "Egypt",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("contact_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("contact_subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={(e) =>
              handleSendEmail({
                e,
                form,
                setErrors,
                setSuccess,
                setLoading,
                setForm,
                t,
              })
            }
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              {/* Form fields remain the same as before */}
              <motion.div
                animate={errors.name ? { x: [-5, 5, -5, 5, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t("contact_name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition`}
                  placeholder={t("contact_name_placeholder")}
                />
              </motion.div>

              <motion.div
                animate={errors.email ? { x: [-5, 5, -5, 5, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t("contact_email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition`}
                  placeholder={t("contact_email_placeholder")}
                />
              </motion.div>

              <motion.div
                animate={errors.message ? { x: [-5, 5, -5, 5, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t("contact_message")}
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition`}
                  placeholder={t("contact_message_placeholder")}
                ></textarea>
              </motion.div>

              <div className="relative">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="disabled:bg-primary/70 w-full px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="size-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      {t("sending")}
                    </div>
                  ) : (
                    t("contact_send")
                  )}
                </motion.button>
              </div>

              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm mt-4 text-green-500 dark:text-green-400"
                >
                  {success}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
