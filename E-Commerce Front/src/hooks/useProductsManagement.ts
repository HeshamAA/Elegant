import { useAppDispatch } from "../store/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";

import addProduct from "../store/products/thunk/addProduct";
import editProduct from "../store/products/thunk/editProduct";
import { useNatificationToast } from "./useNatificationToast";

import {
  TProductFormInputs,
  TProductManagementProps,
} from "../types/productFormTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { productsManagementSchema } from "../validations/ProductsManagementSchema";
import { TAddProductData } from "../types/productsTypes";


function useProductsManagement({
  actionType,
  productId,
  defaultValues,
}: TProductManagementProps) {
  const dispatch = useAppDispatch();
  const { toastPromise } = useNatificationToast();


  const {
    reset,
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TProductFormInputs>({
    defaultValues,
    resolver: zodResolver(productsManagementSchema),
  });


  const onSubmit: SubmitHandler<TProductFormInputs> = async (data) => {

    
    if (actionType === "add") {
      const addingPromise = dispatch(addProduct(data as TAddProductData)).unwrap();
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
          updatedProductData: data as TAddProductData,
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
    control,
    handleSubmit,
    register,
    onSubmit,
    reset,
    errors,
  };
}

export default useProductsManagement;
