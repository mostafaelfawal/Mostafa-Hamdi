import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export type Skills = {
  name: string;
  icon: ReactElement<IconType>;
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
