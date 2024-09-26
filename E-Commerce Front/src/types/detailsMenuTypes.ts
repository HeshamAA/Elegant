import { CSSProperties } from "react";
import { TCategories } from "./categoryTypes";

export type TDetailsMenuProps = {
  summaryTitle: string;
  data: string[] | TCategories[];
  link: string;
  style?: CSSProperties;
  children?: React.ReactNode;
};
