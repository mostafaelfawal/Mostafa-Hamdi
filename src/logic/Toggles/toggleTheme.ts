export const toggleTheme = (setTheme: (v: boolean) => void, theme: boolean) => {
  document.documentElement.classList.toggle("dark");
  setTheme(!theme);
};
