import type { InputSize } from "./Input.tokens";

export type InputProps = {
  size?: InputSize;
  className?: string;
} & Omit<React.ComponentProps<"input">, "size">;
