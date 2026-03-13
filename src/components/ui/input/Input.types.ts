import type { InputColor, InputSize } from "./Input.tokens";

export type InputProps = {
  size?: InputSize;
  color?: InputColor;
  className?: string;
} & Omit<React.ComponentProps<"input">, "size">;
