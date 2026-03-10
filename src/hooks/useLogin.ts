import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { useState } from "react";
import {
  clearErrors,
  loginWithEmail,
  loginWithGoogle,
} from "../features/user/userSlice";
import type { LoginFormData } from "../pages/LoginPage/LoginPage.types";

type FieldErrors = Partial<Record<keyof LoginFormData, string>>;

const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const loginError = useAppSelector((state) => state.user.loginError);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof LoginFormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};
    if (!formData.email.trim()) {
      errors.email = "이메일을 입력하세요.";
    }
    if (!formData.password.trim()) {
      errors.password = "패스워드를 입력하세요.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(clearErrors());
    if (!validateForm()) return;
    const result = await dispatch(loginWithEmail(formData));
    if (loginWithEmail.fulfilled.match(result)) {
      navigate(from, { replace: true });
    }
  };

  const handleGoogleLogin = async (credentialResponse: {
    credential?: string;
  }) => {
    if (credentialResponse.credential) {
      const result = await dispatch(
        loginWithGoogle(credentialResponse.credential),
      );
      if (loginWithGoogle.fulfilled.match(result)) {
        navigate(from, { replace: true });
      }
    }
  };

  return {
    formData,
    loginError,
    fieldErrors,
    handleChange,
    handleSubmit,
    handleGoogleLogin,
  };
};

export default useLoginForm;
