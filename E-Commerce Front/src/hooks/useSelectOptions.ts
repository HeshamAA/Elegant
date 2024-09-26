import React from 'react'
import { StylesConfig } from 'react-select';

function useSelectOptions() {
    const customStyles:StylesConfig = {
        control: (provided) => ({
          ...provided,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          borderRadius: "4px",
          borderColor: "var(--primary-color)",
          backgroundColor: "transparent",
        }),
        menu: (provided) => ({
          ...provided,
          width: "100%",
          backgroundColor: "var(--secondary-color)",
        }),
        input: (provided) => ({
          ...provided,
          width: "100%", // Adjusted to be 100% for better visibility
        }),
        placeholder: (provided) => ({
          ...provided,
          width: "100%",
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: "var(--primary-color)",
          borderRadius: "5px",
          padding: "2px 4px",
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          color: "var(--third-color)",
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          color: "var(--third-color)",
          ":hover": {
            backgroundColor: "red",
            color: "white",
          },
        }),
      };
    
      const sizesOptions = [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
        { value: "XL", label: "XL" },
        { value: "XXL", label: "XXL" },
      ];
  return {customStyles,sizesOptions}
    
  
}

export default useSelectOptions