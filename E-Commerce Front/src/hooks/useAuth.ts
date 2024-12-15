import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import getLogin from "../store/auth/thunk/getLogin";
import { useAppDispatch } from "../store/hooks/hooks";
import { useNavigate } from "react-router-dom";
import getRegister from "../store/auth/thunk/getRegister";
import { TFormData } from "../types/authTypes";

function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginSubmit: SubmitHandler<TFormData> = async (data) => {
    const { email, password } = data;
    try {
      const promise = dispatch(getLogin({ email, password })).unwrap();

      await toast.promise(
        promise,
        {
          loading: "Loading...",
          success: () => "Welcome to Elegant.",
          error: (error) => `login failed: ${error}`,
        },
        {
          position: "top-right",

          success: {
            duration: 3000,
            className: "custom-toast",
            position: "top-center",
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

  const registerSubmit: SubmitHandler<TFormData> = (data) => {
    const { firstName, lastName, email, password } = data;

    const promise = dispatch(
      getRegister({ firstName, lastName, email, password })
    ).unwrap();

    toast.promise(
      promise,
      {
        loading: "Registering...",
        success: () => "Registration successful",
        error: (error) => `Registration failed: ${error.message ==="undefined" ? "Email is used before" : error.message}`,
      },
      {
        position: "top-right",

        success: {
          duration: 3000,
          className: "custom-toast",
        },
        error: {
          duration: 3000,
          className: "custom-toast-error",
        },
      }
    );
  };
  return {
    loginSubmit,
    registerSubmit,
  };
}

export default useAuth;
