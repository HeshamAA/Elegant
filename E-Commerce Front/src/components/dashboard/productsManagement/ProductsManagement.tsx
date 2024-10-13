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
  const { control, handleSubmit, register, onSubmit, reset, errors } =
    useProductsManagement({
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
          label="Title"
          placeholder="Title"
          inputTitle="title"
          type="text"
          register={register}
        />
        {errors.title && (
          <p style={{ color: "#D32F2F" }}>{errors.title.message}</p>
        )}
        <InputField
          label="Img Link"
          placeholder="Img Link"
          type="text"
          register={register}
          inputTitle="img"
        />
        {errors.img && <p style={{ color: "#D32F2F" }}>{errors.img.message}</p>}
        <InputField label="Sizes" isInputActive={false}>
          <Controller
            name="sizes"
            control={control}
            defaultValue={defaultValues?.sizes || []}
            render={({ field: { onChange, value } }) => (
              <div className="flex" style={{ gap: "20px" }}>
                {sizes.map((size) => (
                  <div
                    className="flexMiddleScreen"
                    style={{ flexDirection: "column" }}
                    key={size}
                  >
                    <input
                      type="checkbox"
                      id={size}
                      value={size}
                      checked={value && value.includes(size)}
                      onChange={() => {
                        const newSizes =
                          value && value.includes(size)
                            ? value.filter((s: string) => s !== size)
                            : [...(value ?? []) , size];
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
        {errors.sizes && (
          <p style={{ color: "#D32F2F" }}>{errors.sizes.message}</p>
        )}
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

        {errors.desc && (
          <p style={{ color: "#D32F2F" }}>{errors.desc.message}</p>
        )}
        <InputField
          label="Price"
          placeholder="Price"
          type="number"
          register={register}
          inputTitle="price"
        />

        {errors.price && (
          <p style={{ color: "#D32F2F" }}>{errors.price.message}</p>
        )}
        <InputField label="Gender" placeholder="Gender" isInputActive={false}>
          <select
            {...register("cat_prefix")}
            style={{ width: "100%", borderColor: "var(--primary-color)" }}
          >
            <option value="" disabled selected>
              --Category--
            </option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="sport">Sport</option>
          </select>
        </InputField>

        {errors.cat_prefix && (
          <p style={{ color: "#D32F2F" }}>{errors.cat_prefix.message}</p>
        )}

        <button type="submit">{actionType} Product</button>
      </form>
    </section>
  );
}

export default ProductsManagement;
