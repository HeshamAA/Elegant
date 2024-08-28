import styles from "../auth.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../../validations/SignUpSchema";
import RegisterInputs from "../../../components/forms/registerInputs/RegisterInputs";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import getRegister from "../../../store/auth/thunk/getRegister";
import toast from "react-hot-toast";

const { registerSectionContainer, agreeTermPrivacy, createAccountButton } =
  styles;

function Register() {
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
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    const { firstName, lastName, email, password } = data;

    const promise = dispatch(
      getRegister({ firstName, lastName, email, password })
    ).unwrap();

    toast.promise(
      promise,
      {
        loading: "Registering...",
        success: () => (
          <div>
            Registration successful ,
            <a
              onClick={() => {
                navigate("/login");
                toast.dismiss();
              }}
              style={{
                color: "#4caf50",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Login now!
            </a>
          </div>
        ),
        error: () => `Registration failed: Error`,
      },
      {
        position: "top-right",

        success: {
          duration: Infinity,
          className: "custom-toast",
        },
        error: {
          duration: 10000,
          className: "custom-toast-error",
        },
      }
    );
  };

  return (
    <div className={` flexMiddleScreen ${registerSectionContainer}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="flexMiddleScreen">
        <h1>Sign Up</h1>
        <div>
          Already have an account ?<Link to="/login">Login</Link>
        </div>

        <RegisterInputs register={register} errors={errors} />

        {/* <InputField
          label="First Name"
          inputTitle="firstName"
          register={register}
          error={errors.firstName?.message}
          placeholder="John"
        ></InputField>
        <InputField
          label="Last Name"
          inputTitle="lastName"
          register={register}
          error={errors.lastName?.message}
          placeholder="Doe"
        ></InputField>
        <InputField
          label="Email"
          inputTitle="email"
          register={register}
          error={errors.email?.message}
          placeholder="example@info.com"
        ></InputField>

        <InputField
          label="Password"
          inputTitle="password"
          type="password"
          register={register}
          error={errors.password?.message}
          placeholder="********"
        ></InputField>
        <InputField
          label="Confirm Password"
          inputTitle="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
          placeholder="********"
        ></InputField> */}

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
          disabled={loading === "loading"}
        >
          Create account
        </button>
      </form>
    </div>
  );
}

export default Register;
