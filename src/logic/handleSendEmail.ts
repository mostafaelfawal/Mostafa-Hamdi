import type { FormType } from "../types/types";

type SendEmailParams = {
  e: React.FormEvent;
  form: FormType;
  setErrors: (errors: { [key: string]: boolean }) => void;
  setSuccess: (msg: string) => void;
  setLoading: (loading: boolean) => void;
  setForm: (form: FormType) => void;
  t: (key: string) => string;
};

export const handleSendEmail = async ({
  e,
  form,
  setErrors,
  setSuccess,
  setLoading,
  setForm,
  t,
}: SendEmailParams) => {
  e.preventDefault();

  const newErrors: { [key: string]: boolean } = {};
  if (!form.name) newErrors.name = true;
  if (!form.email) newErrors.email = true;
  if (!form.message) newErrors.message = true;
  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  try {
    setLoading(true);
    const res = await fetch("https://formspree.io/f/xblzydvr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(t("contact_success"));
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess(t("contact_error"));
    }
  } catch {
    setSuccess(t("contact_error"));
  } finally {
    setLoading(false);
  }
};
