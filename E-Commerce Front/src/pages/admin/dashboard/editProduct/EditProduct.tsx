import { useEffect } from "react";
import ProductsManagement from "../../../../components/dashboard/productsManagement/ProductsManagement";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import getproduct from "../../../../store/products/thunk/getProduct";
import { productCleanUp } from "../../../../store/products/productsSlice";

function EditProduct() {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getproduct(params.id as string));
    return () => {
      dispatch(productCleanUp());
    };
  }, [dispatch, params.id]);

  const { product } = useAppSelector((state) => state.products);

  return (
    <>
      <ProductsManagement
        actionType="update"
        productId={params.id}
        defaultValues={product[0]}
      ></ProductsManagement>
    </>
  );
}

export default EditProduct;
