import styles from "../auth.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../../validations/SignUpSchema";
import RegisterInputs from "../../../components/forms/registerInputs/RegisterInputs";
import { useAppSelector } from "../../../store/hooks/hooks";
import useAuth from "../../../hooks/useAuth";
import { TFormData } from "../../../types/authTypes";
const { registerSectionContainer, agreeTermPrivacy, createAccountButton } =
  styles;

function Register() {
  const { loading } = useAppSelector((state) => state.auth);
  const { registerSubmit } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  return (
    <div className={` flexMiddleScreen ${registerSectionContainer}`}>
      <form
        onSubmit={handleSubmit(registerSubmit)}
        className="flexMiddleScreen"
      >
        <h1>Sign Up</h1>
        <div>
          Already have an account ?<Link to="/login">Login</Link>
        </div>

        <RegisterInputs register={register} errors={errors} />

        <div className={`flex ${agreeTermPrivacy}`}>
          <input type="checkbox"></input>
          <div>
            I agree with
            <span>Privacy Policy</span>
            and
            <span>Terms of Use</span>{" "}
          </div>
        </div>
        <button
          type="submit"
          className={createAccountButton}
          disabled={loading === "pending"}
        >
          Create account
        </button>
      </form>
    </div>
  );
}

export default Register;
