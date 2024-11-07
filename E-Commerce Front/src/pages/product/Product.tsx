import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import styles from "./product.module.css";
import { useParams } from "react-router-dom";

import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import useProductCard from "../../hooks/useProductCard";

import getProduct from "../../store/products/thunk/getProduct";
import { productCleanUp } from "../../store/products/productsSlice";
const { productSection, productDetailsContainer } = styles;

function Product() {
  const { product } = useAppSelector((state) => state.products);
  const params = useParams();

  const {
    addToCartHandler,
    addToWatchListHandler,
    buttonDisabled,
    setButtonDisabled,
  } = useProductCard(params.id as string);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productCleanUp());
    dispatch(getProduct(params.id as string));

    // dispatch(productsCleanUp());

    return () => {
      dispatch(productCleanUp());
    };
  }, [dispatch, params.id]);
  useEffect(() => {
    if (buttonDisabled) {
      const debounce = setTimeout(() => {
        setButtonDisabled(false);
      }, 500);
      return () => clearTimeout(debounce);
    }
  }, [buttonDisabled]);
  const productToShow =
    product &&
    product.map((product) => (
      <div className={productDetailsContainer} key={product.id}>
        <img alt="image" src={product.img} />
        <div>
          <div>{product.title}</div>
          <div>{product.desc}</div>
          <div>{product.cat_prefix}</div>
          <div>{product.price}$</div>
          <div>
            {product.sizes ? (
              product.sizes.map((size, index) => (
                <span key={index}>{size}</span>
              ))
            ) : (
              <div>No Sizes Found</div>
            )}
          </div>
          <div>
            <button onClick={addToWatchListHandler}>Add to watchlist</button>
          </div>
          <button disabled={buttonDisabled} onClick={addToCartHandler}>{buttonDisabled ? "Loading..." : "Add To Cart"}</button>
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
