import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { clearErrors, registerUser } from "../features/user/userSlice";
import type { RegisterFormData } from "../pages/RegisterPage/RegisterPage.types";
import type { ValidationVariant } from "../components/ui/input-with-message/InputWithMessage.types";
import { FIELD_VALIDATIONS } from "../pages/RegisterPage/constants/fieldValidations";

type FieldState = {
  message: string;
  variant: ValidationVariant;
};
type FieldStates = Partial<Record<keyof RegisterFormData, FieldState>>;

const useRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { registrationError } = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState<RegisterFormData>({
    nickname: "",
    email: "",
    password: "",
    secPassword: "",
    level: "A2",
  });
  const initialFieldStates: FieldStates = {
    nickname: { message: "2자 이상, 10자 이내", variant: "default" },
    password: {
      message: "8자 이상 / 영문, 숫자, 특수문자 2개 이상 조합",
      variant: "default",
    },
  };

  const [fieldStates, setFieldStates] =
    useState<FieldStates>(initialFieldStates);
  const [policy, setPolicy] = useState(false);
  const [policyError, setPolicyError] = useState("");

  const validateField = (name: keyof RegisterFormData, value: string) => {
    const validation = FIELD_VALIDATIONS[name];
    if (!validation) return;

    const isValid = validation.validate(value, formData);

    if (isValid && validation.hideOnSuccess) {
      setFieldStates((prev) => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    } else {
      setFieldStates((prev) => ({
        ...prev,
        [name]: {
          message: validation.message,
          variant: isValid ? "success" : "error",
        },
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof RegisterFormData, value);
  };

  const handlePolicyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPolicy(e.target.checked);
    setPolicyError("");
  };

  const validateForm = (): boolean => {
    const newFieldStates: FieldStates = { ...initialFieldStates };
    let isValid = true;

    const fieldsToValidate: (keyof RegisterFormData)[] = [
      "nickname",
      "email",
      "password",
      "secPassword",
    ];

    for (const name of fieldsToValidate) {
      const validation = FIELD_VALIDATIONS[name];
      if (!validation) continue;

      const fieldValid = validation.validate(formData[name], formData);

      if (!fieldValid) {
        newFieldStates[name] = {
          message: validation.message,
          variant: "error",
        };
        isValid = false;
      } else if (!validation.hideOnSuccess) {
        newFieldStates[name] = {
          message: validation.message,
          variant: "success",
        };
      }
    }

    setFieldStates(newFieldStates);
    return isValid;
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(clearErrors());

    const isFormValid = validateForm();
    const isPolicyError = !policy;

    if (isPolicyError) setPolicyError("약관에 동의해주세요.");
    if (!isFormValid || isPolicyError) return;

    await dispatch(registerUser({ ...formData, navigate }));
  };

  return {
    formData,
    fieldStates,
    policy,
    policyError,
    registrationError,
    handleChange,
    handlePolicyChange,
    handleSubmit,
  };
};

export default useRegister;
