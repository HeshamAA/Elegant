import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpSchema } from "../validations/SignUpSchema";

function useAuth() {
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
    watch,
  } = useForm<TFormInputs>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<TFormInputs> = (data) => console.log(data);

  return {
    register,
    handleSubmit,
    errors,
    watch,
    onSubmit,
  };
}

export default useAuth;
