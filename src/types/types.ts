import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export type ListSkills = {
  name: string;
  icon: ReactElement<IconType>;
};

export type Skills = {
  listSkills?: ListSkills[];
  variants?: {
    hidden: {
      opacity: number;
      y: number;
    };
    visible: {
      opacity: number;
      y: number;
    };
  };
};

export type ProjectType = {
  img: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  liveDemoLink: string;
  githubLink: string;
};

export type LanguageType = "en" | "ar";

export type FormType = {
  name: "";
  email: "";
  message: "";
};
