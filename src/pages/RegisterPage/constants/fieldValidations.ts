import type { RegisterFormData } from "../RegisterPage.types";

type FieldValidation = {
  message: string;
  validate: (value: string, formData?: RegisterFormData) => boolean;
  hideOnSuccess?: boolean;
};

export const FIELD_VALIDATIONS: Partial<
  Record<keyof RegisterFormData, FieldValidation>
> = {
  nickname: {
    message: "2자 이상, 10자 이내",
    validate: (value) => {
      const trimmed = value.trim();
      return trimmed.length >= 2 && trimmed.length <= 10;
    },
  },
  email: {
    message: "올바른 이메일 형식이 아닙니다",
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    hideOnSuccess: true,
  },
  password: {
    message: "8자 이상 / 영문, 숫자, 특수문자 2개 이상 조합",
    validate: (value) => {
      const hasLetter = /[a-zA-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const typeCount = [hasLetter, hasNumber, hasSpecial].filter(
        Boolean,
      ).length;
      return value.length >= 8 && typeCount >= 2;
    },
  },
  secPassword: {
    message: "비밀번호가 일치하지 않습니다",
    validate: (value, formData) => value === formData?.password,
    hideOnSuccess: true,
  },
};
