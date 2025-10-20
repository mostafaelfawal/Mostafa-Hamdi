export const handleScroll = (
  id: string,
  setMenuOpen?: (v: boolean) => void
) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });

    if (setMenuOpen) {
      setMenuOpen(false);
    } // يقفل المينيو بعد الضغط
  }
};
