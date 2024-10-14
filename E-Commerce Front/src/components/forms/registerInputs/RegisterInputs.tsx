import InputField from "../../../components/forms/input/InputField";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { TFormData } from "../../../types/authTypes";

type RegisterInputsProps = {
  register: UseFormRegister<TFormData>;
  errors: FieldErrors;
};

function RegisterInputs({ register, errors }: RegisterInputsProps) {
  const RegisterInputFieldsData = [
    {
      label: "First Name",
      inputTitle: "firstName",
      type: "text",
      placeholder: "John",
    },
    {
      label: "Last Name",
      inputTitle: "lastName",
      type: "text",
      placeholder: "Doe",
    },
    {
      label: "Email",
      inputTitle: "email",
      type: "text",
      placeholder: "example@info.com",
    },
    {
      label: "Password",
      inputTitle: "password",
      type: "password",
      placeholder: "(8 Characters)",
    },
    {
      label: "Confirm Password",
      inputTitle: "confirmPassword",
      type: "password",
      placeholder: "8 Characters",
    },
  ];

  const RegisterInputFields = RegisterInputFieldsData.map((el, index) => (
    <InputField
      key={index}
      label={el.label}
      type={el.type}
      inputTitle={el.inputTitle as Path<TFormData>}
      register={register}
      error={errors[el.inputTitle]?.message as string}
      placeholder={el.placeholder}
    />
  ))
  return (
    <>
      {RegisterInputFields}
    </>
  );
}

export default RegisterInputs;
