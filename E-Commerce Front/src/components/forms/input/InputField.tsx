import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import styles from "./InputField.module.css";

const { fieldContainer, inputError } = styles;
type TFieldProps<TFieldValues extends FieldValues> = {
  label: string;
  type?: string;
  inputTitle: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  error?: string;
  placeholder?: string;
};

function InputField<TFieldValues extends FieldValues>({
  label,
  type = "text",
  inputTitle,
  register,
  error,
  placeholder,
}: TFieldProps<TFieldValues>) {
  return (
    <div className={fieldContainer}>
      <label>{label}</label>
      <input
        className={error ? inputError : ""}
        type={type}
        placeholder={placeholder}
        {...register(inputTitle)}
      />
      {error && <p style={{ color: "#D32F2F" }}>{error}</p>}
    </div>
  );
}

export default InputField;
