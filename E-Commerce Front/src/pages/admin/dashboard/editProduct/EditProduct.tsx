import { useEffect } from "react";
import ProductsManagement from "../../../../components/dashboard/productsManagement/ProductsManagement";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import getproduct from "../../../../store/product/thunk/getProduct";
import { cleanUpProduct } from "../../../../store/product/productSlice";
import useSelectOptions from "../../../../hooks/useSelectOptions";

function EditProduct() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { sizesOptions } = useSelectOptions();
  useEffect(() => {
    dispatch(getproduct(params.id as string));
    return () => {
      dispatch(cleanUpProduct());
    };
  }, [dispatch, params.id]);

  const { product } = useAppSelector((state) => state.product);

  // Function to map size to the corresponding option
  const mapSizeToOption = (size: string) => {
    // Find the size option matching the given size
    return (
      sizesOptions.find((option) => option.value === size) || {
        value: size,
        label: size,
      }
    );
  };

  const updatedProducts = Array(product).map((prod) => {
    // Check if sizes is defined and is an array
    if (prod && Array.isArray(prod.sizes)) {
      // Transform the sizes array into the desired format
      const updatedSizes = prod.sizes.map((size) => mapSizeToOption(size));

      return {
        ...prod,
        sizes: updatedSizes,
      };
    } else {
      // Handle the case where sizes is not defined or not an array
      console.warn("Sizes is not defined or not an array for product:", prod);
      return prod; // Return the product unchanged if sizes is not valid
    }
  });

  return (
    <>
      <ProductsManagement
        actionType="update"
        productId={params.id}
        defaultValues={updatedProducts[0]}
      ></ProductsManagement>
    </>
  );
}

export default EditProduct;
