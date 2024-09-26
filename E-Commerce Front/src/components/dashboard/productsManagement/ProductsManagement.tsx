import {  Controller } from "react-hook-form";
import InputField from "../../forms/input/InputField";
import styles from "./productsManagement.module.css";
import { useEffect } from "react";
import Select from "react-select";

import useProductsManagement, {
} from "../../../hooks/useProductsManagement";
import { TProductManagementProps } from "../../../types/formTypes";

const { productsManagementContainer } = styles;

function ProductsManagement({
  actionType,
  productId,
  defaultValues,
  sizesDefaultValues,
}: TProductManagementProps) {

  
  const {
    customStyles,
    sizesOptions,
    control,
    handleSubmit,
    register,
    onSubmit,
    reset
  } = useProductsManagement({
    actionType,
    productId,
    defaultValues,
    sizesDefaultValues,
  });



  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  
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
            render={({ field }) => (
              <Select
                {...field}
                className="my-multi-select"
                styles={customStyles}
                isMulti
                isSearchable
                options={sizesOptions}
                value={field.value || []}
                onChange={(selectedOptions) => field.onChange(selectedOptions)}
              />
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
