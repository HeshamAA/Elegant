import InputField from "../../../components/forms/input/InputField";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
type TFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type RegisterInputsProps = {
  register: UseFormRegister<TFormInputs>;
  errors: FieldErrors;
};

function RegisterInputs({ register, errors }: RegisterInputsProps) {
  return (
    <>
      <InputField
        label="First Name"
        inputTitle="firstName"
        register={register}
        error={errors.firstName?.message as string}
        placeholder="John"
      />
      <InputField
        label="Last Name"
        inputTitle="lastName"
        register={register}
        error={errors.lastName?.message as string}
        placeholder="Doe"
      />
      <InputField
        label="Email"
        inputTitle="email"
        register={register}
        error={errors.email?.message as string}
        placeholder="example@info.com"
      />
      <InputField
        label="Password"
        inputTitle="password"
        type="password"
        register={register}
        error={errors.password?.message as string}
        placeholder="(8 Charachters)"
      />
      <InputField
        label="Confirm Password"
        inputTitle="confirmPassword"
        type="password"
        register={register}
        error={errors.confirmPassword?.message as string}
        placeholder="8 Charachters"
      />
    </>
  );
}

export default RegisterInputs;
