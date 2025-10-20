import type { ListSkills } from "./ListSkills";

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
