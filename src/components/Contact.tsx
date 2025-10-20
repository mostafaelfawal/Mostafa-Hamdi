"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import type { FormType } from "../types/types";
import { handleSendEmail } from "../logic/handleSendEmail";

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
    },
    {
      icon: <FaLinkedin />,
      title: t("contact_linkedin_label"),
      value: "linkedin.com/in/mostafa-hamdi-75044334b",
    },
    {
      icon: <FaGithub />,
      title: t("contact_github_label"),
      value: "github.com/mostafaelfawal",
    },
  ];

  return (
    <section className="py-20 flex justify-center items-center" id="Contact">
      <div>
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("contact_subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-2xl"
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
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
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Name */}
            <motion.div
              animate={errors.name ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
              />
            </motion.div>

            {/* Email */}
            <motion.div
              animate={errors.email ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
              />
            </motion.div>

            {/* Message */}
            <motion.div
              animate={errors.message ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("contact_message")}
              </label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition`}
              ></textarea>
            </motion.div>

            <div className="relative">
              <motion.button
                type="submit"
                disabled={loading}
                className="disabled:bg-primary/70 w-full px-8 py-4 bg-primary-light text-white rounded-lg font-semibold hover:bg-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-5 rounded-full border-2 border-black border-t-transparent animate-spin"></div>
                ) : (
                  t("contact_send")
                )}
              </motion.button>
            </div>

            {success && (
              <p className="text-center text-sm mt-2 text-green-500 dark:text-green-400">
                {success}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
