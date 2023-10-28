import { ReactNode } from "react";

export default interface ILabel {
  text: ReactNode;
  htmlFor?: string;
  classes?: string;
}
