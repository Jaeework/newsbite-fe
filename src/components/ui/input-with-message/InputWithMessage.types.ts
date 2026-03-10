import type { InputWithIconProps } from "../input-with-icon/InputWithIcon.types";

export type ValidationVariant = "error" | "success";

export type InputWithMessageProps = InputWithIconProps & {
  message?: string;
  variant?: ValidationVariant;
};
