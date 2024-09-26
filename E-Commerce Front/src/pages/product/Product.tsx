import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import styles from "./product.module.css";
import { useParams } from "react-router-dom";

import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import useProductCard from "../../hooks/useProductCard";
import { cleanUpProduct } from "../../store/product/productSlice";
import getProduct from "../../store/product/thunk/getProduct";
const { productSection, productDetailsContainer } = styles;

function Product() {
  const { data: product } = useAppSelector((state) => state.product);
  const params = useParams();

  const { addToCartHandler, addToWatchListHandler } = useProductCard(
    params.id as string
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cleanUpProduct());
    dispatch(getProduct(params.id as string));

    // dispatch(productsCleanUp());

    return () => {
      dispatch(cleanUpProduct());
    };
  }, [dispatch, params.id]);


  const productToShow = product.map((product) => (
    <div className={productDetailsContainer} key={product.id}>
      <img alt="image" src={product.img} />
      <div>
        <div>{product.title}</div>
        <div>{product.desc}</div>
        <div>{product.cat_prefix}</div>
        <div>{product.price}$</div>
        <div>
          {product.sizes ? (
            product.sizes.map((size, index) => <span key={index}>{size}</span>)
          ) : (
            <div>No Sizes Found</div>
          )}
        </div>
        <div>
          <button onClick={addToWatchListHandler}>Add to watchlist</button>
        </div>
        <button onClick={addToCartHandler}>Add to cart</button>
      </div>
    </div>
  ));

  return (
    <>
      <PagesFirstSection title=""></PagesFirstSection>
      <section className={productSection}>
        <div className="container flex"></div>
        {productToShow}
      </section>
    </>
  );
}

export default Product;
