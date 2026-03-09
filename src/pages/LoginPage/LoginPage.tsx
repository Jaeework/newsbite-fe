import { EyeOff, Lock, Mail } from "lucide-react";
import InputWithIcon from "../../components/ui/input-with-icon/InputWithIcon";
import Button from "../../components/ui/button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearErrors, loginWithEmail } from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { useState } from "react";
import Label from "../../components/ui/label/Label";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const loginError = useAppSelector((state) => state.user.loginError);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const fields = [
    {
      label: "Email Address",
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter your email address",
      leftIcon: <Mail size={16} />,
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Enter your password",
      leftIcon: <Lock size={16} />,
      rightIcon: <EyeOff size={16} />,
    },
  ];
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    dispatch(clearErrors());
    const { email, password } = formData;
    const result = await dispatch(loginWithEmail({ email, password }));
    if (loginWithEmail.fulfilled.match(result)) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="w-full">
      <div className="shadow-primary/5 md:border-primary/5 w-full max-w-md bg-white p-8 shadow-xl md:rounded-xl md:p-12">
        <div className="mb-8 text-center">
          <h2 className="text-ink-900 mb-2 text-3xl font-extrabold">
            Welcome Back
          </h2>
          <p className="text-ink-500">Log in to access your dashboard</p>
        </div>
        {loginError && (
          <span className="text-sm text-red-500">{loginError}</span>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.id}>
              <Label size="sm" htmlFor={field.name}>
                {field.label}
              </Label>
              <InputWithIcon
                leftIcon={field.leftIcon}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                required
                type={field.type}
                rightIcon={field.rightIcon || null}
                onChange={handleChange}
              />
            </div>
          ))}

          <Button
            size="xl"
            radius="lg"
            isFullWidth
            className="shadow-primary/20 mt-4 transform font-bold shadow-lg transition-all active:scale-[0.98]"
            type="submit"
          >
            <h1>Log in</h1>
          </Button>
        </form>
        <div className="mt-1 pt-6 text-center">
          <p className="text-ink-500">
            Don't have an account?
            <Link
              className="text-primary ml-1 font-bold underline-offset-4 hover:underline"
              to="/register"
            >
              Create an account
            </Link>
          </p>
        </div>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="border-ink-200 dark:border-ink-800 w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="text-ink-500 dark:bg-ink-900 bg-white px-2">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <Button
            variant="outline"
            size="lg"
            radius="lg"
            isFullWidth
            className="hover:bg-ink-50 transition-colors"
          >
            <img
              alt=""
              className="size-4"
              data-alt="Google logo icon"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_WwNV9mGbFuKd0F8evGqE5kf8vsutitprmCB3Y6vVQWenCUsJ-B3qQeaaA_sZUoR3H_UvPSmuJ8CIfdgMymDex_l5LdOxAzXGU08d3uFo_TJmh8FVCuvcIzLFfceNswe0fe_WM1mFbvxpuzvhtgEcWDIW0jz1nNfhr02_DrW-wDnT_IOleYJFmxcesd7AcswoHRx0y6Hl1cfKANUIOFR5LM_6OfPK7_ktSDSu463Vc88ELcIU3foaUmpOa4CT07vgp4TVSO5USIs"
            />
            <span className="text-sm font-semibold">Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
