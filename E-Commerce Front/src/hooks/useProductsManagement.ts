import React from "react";
import { useAppDispatch } from "../store/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";

import addProduct from "../store/products/thunk/addProduct";
import editProduct from "../store/products/thunk/editProduct"; 
import { useNatificationToast } from "./useNatificationToast";
import useSelectOptions from "./useSelectOptions";
import { TFormInputs, TProductManagementProps } from "../types/formTypes";



function useProductsManagement({
  actionType,
  productId,
  defaultValues,
  sizesDefaultValues,
}: TProductManagementProps) {
  const dispatch = useAppDispatch();
  const { toastPromise } = useNatificationToast();
  const { customStyles, sizesOptions } = useSelectOptions();

  const { reset, control, handleSubmit, register } = useForm<TFormInputs>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<TFormInputs> = async (data) => {
    const sizes = data.sizes.map((option) => option.value);
    const { title, img, desc, price, cat_prefix } = data;

    if (actionType === "add") {
      const addingPromise = dispatch(
        addProduct({ title, img, desc, price, cat_prefix, sizes })
      ).unwrap();
      await toastPromise(addingPromise, {
        loading: "Adding product...",
        success: "Product added successfully",
        error: "Failed to add product",
      });

      reset();
    } else if (actionType === "update") {
      const updatingPromise = dispatch(
        editProduct({
          productId: productId as string,
          updatedProductData: { title, img, desc, price, cat_prefix, sizes },
        })
      ).unwrap();

      await toastPromise(updatingPromise, {
        loading: "Updating product...",
        success: "Product updated successfully",
        error: "Failed to update product",
      });
    }
  };

  return {
    dispatch,
    customStyles,
    sizesOptions,
    control,
    handleSubmit,
    register,
    onSubmit,
    reset,
  };
}

export default useProductsManagement;
