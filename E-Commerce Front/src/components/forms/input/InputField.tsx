import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import styles from "./InputField.module.css";

const { fieldContainer, inputError } = styles;
type TFieldProps<TFieldValues extends FieldValues> = {
  label: string;
  type?: string;
  inputTitle?: Path<TFieldValues>;
  register?: UseFormRegister<TFieldValues>;
  error?: string;
  placeholder?: string;
  children?: React.ReactNode;
  isInputActive?: boolean;
};

function InputField<TFieldValues extends FieldValues>({
  label,
  type = "text",
  inputTitle,
  register,
  error,
  placeholder,
  children,
  isInputActive = true,
}: TFieldProps<TFieldValues>) {
  const inputProps = register && inputTitle ? register(inputTitle) : {};

  return (
    <div className={fieldContainer}>
      <label htmlFor={label}>{label}</label>
      {isInputActive && (
        <input
          id={label}
          className={error ? inputError : ""}
          type={type}
          placeholder={placeholder}
          {...inputProps}
        />
      )}

      {error && <p style={{ color: "#D32F2F" }}>{error}</p>}
      {children}
    </div>
  );
}

export default InputField;
