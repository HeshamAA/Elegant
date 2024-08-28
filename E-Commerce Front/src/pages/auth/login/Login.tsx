import styles from "../auth.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../../../components/forms/input/InputField";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import toast from "react-hot-toast";
import getLogin from "../../../store/auth/thunk/getLogin";
import { loginSchema } from "../../../validations/LoginSchema";

const { registerSectionContainer, createAccountButton } = styles;

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.authSlice);

  console.log(loading);

  type TFormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TFormInputs> = async (data) => {
    const { email, password } = data;
    try {
      const promise = dispatch(getLogin({ email, password })).unwrap();

      await toast.promise(
        promise,
        {
          loading: "Loading...",
          success: () => <div>Welcome to Elegant.</div>,
          error: (error) => `login failed: ${error}`,
        },
        {
          position: "top-right",

          success: {
            duration: 3000,
            className: "custom-toast",
          },
          error: {
            duration: 5000,
            className: "custom-toast-error",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={` flexMiddleScreen ${registerSectionContainer}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="flexMiddleScreen">
        <h1>Login</h1>
        <div>
          don't have an account ?<Link to="/register">Sign Up</Link>
        </div>
        <InputField
          label="Email"
          inputTitle="email"
          register={register}
          error={errors.email?.message}
        ></InputField>

        <InputField
          label="Password"
          inputTitle="password"
          type="password"
          register={register}
          error={errors.password?.message}
        ></InputField>

        <button type="submit" className={createAccountButton} disabled={loading === "loading"}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
