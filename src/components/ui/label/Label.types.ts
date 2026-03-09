import { type LabelHTMLAttributes } from "react";
import type { LabelSize } from "./label.tokens";

export type LabelProps = {
  size: LabelSize;
} & LabelHTMLAttributes<HTMLLabelElement>;
