import styles from "../auth.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../../../components/forms/input/InputField";
import { useAppSelector } from "../../../store/hooks/hooks";
import { loginSchema } from "../../../validations/LoginSchema";
import useAuth from "../../../hooks/useAuth";
import { TFormData } from "../../../types/authTypes";


const { registerSectionContainer, createAccountButton } = styles;

function Login() {
  const { loading } = useAppSelector((state) => state.auth);
  const { loginSubmit } = useAuth();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className={` flexMiddleScreen ${registerSectionContainer}`}>
      <form onSubmit={handleSubmit(loginSubmit)} className="flexMiddleScreen">
        <h1>Login</h1>
        <div>
          don't have an account ?<Link to="/register">Sign Up</Link>
        </div>
        
        <InputField
          label="Email"
          inputTitle="email"
          register={register}
          placeholder="Email"
          error={errors.email?.message}
        ></InputField>

        <InputField
          label="Password"
          inputTitle="password"
          type="password"
          register={register}
          placeholder="Password"
          error={errors.password?.message}
        ></InputField>

        <button
          type="submit"
          className={createAccountButton}
          disabled={loading === "pending"}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
