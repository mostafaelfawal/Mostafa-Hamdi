import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export type listSkills = {
  name: string;
  icon: ReactElement<IconType>
}

export type Skills = {
  listSkills?: listSkills[]
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
