import { Controller } from "react-hook-form";
import InputField from "../../forms/input/InputField";
import styles from "./productsManagement.module.css";
import { useEffect } from "react";

import useProductsManagement from "../../../hooks/useProductsManagement";
import { TProductManagementProps } from "../../../types/formTypes";

const { productsManagementContainer } = styles;

function ProductsManagement({
  actionType,
  productId,
  defaultValues,
 
}: TProductManagementProps) {
  const {
    
    control,
    handleSubmit,
    register,
    onSubmit,
    reset,
  } = useProductsManagement({
    actionType,
    productId,
    defaultValues,
    
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <section className={productsManagementContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className="flexMiddleScreen">
        <InputField
          label=" Title"
          placeholder="Title"
          inputTitle="title"
          type="text"
          register={register}
        />
        <InputField
          label="Img Link"
          placeholder="Img Link"
          type="text"
          register={register}
          inputTitle="img"
        />
        <InputField label="Sizes" isInputActive={false}>
          <Controller
            name="sizes"
            control={control}
            defaultValue={defaultValues?.sizes || []}
            render={({ field: { onChange, value } }) => (
              <div className="flex" style={{ gap: "20px" }}>
                {sizes.map((size) => (
                  <div className="flexMiddleScreen" style={{flexDirection: "column"}} key={size}>
                    <input
                      type="checkbox"
                      id={size}
                      value={size}
                      checked={value.includes(size)}
                      onChange={() => {
                        const newSizes = value.includes(size)
                          ? value.filter((s:string) => s !== size)
                          : [...value, size];
                        onChange(newSizes);
                      }}
                    />
                    <label htmlFor={size}>{size.toUpperCase()}</label>
                  </div>
                ))}
              </div>
            )}
          />
        </InputField>
        <InputField
          label="Description"
          placeholder="Description"
          isInputActive={false}
          register={register}
        >
          <textarea
            {...register("desc")}
            placeholder="Description"
            style={{ width: "100%", height: "200px" }}
          ></textarea>
        </InputField>
        <InputField
          label="Price"
          placeholder="Price"
          type="number"
          register={register}
          inputTitle="price"
        />
        <InputField label="Gender" placeholder="Gender" isInputActive={false}>
          <select
            {...register("cat_prefix")}
            style={{ width: "100%", borderColor: "var(--primary-color)" }}
          >
            <option disabled selected>
              --Category--
            </option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="sport">Sport</option>
          </select>
        </InputField>

        <button type="submit">{actionType} Product</button>
      </form>
    </section>
  );
}

export default ProductsManagement;
