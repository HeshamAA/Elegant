import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import styles from "./product.module.css";
import { useParams } from "react-router-dom";

import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import useProductCard from "../../hooks/useProductCard";

import getProduct from "../../store/products/thunk/getProduct";
import { productCleanUp } from "../../store/products/productsSlice";
import { FaHeart } from "react-icons/fa";

const { productSection, productDetailsContainer } = styles;

function Product() {
  const { product } = useAppSelector((state) => state.products);
  const [btnText, setBtnText] = useState("Add to watchlist");
  const params = useParams();

  const {
    addToCartHandler,
    addToWatchListHandler,
    loveButtonState,
    watchlistIds,
    buttonDisabled,
    setButtonDisabled,
  } = useProductCard(params.id as string);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productCleanUp());
    dispatch(getProduct(params.id as string));

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
  console.log(watchlistIds);
  
  useEffect(() => {
    if (loveButtonState || watchlistIds.includes(params.id as string)) {
      setBtnText("Remove from watchlist");
    } else if(!watchlistIds.includes(params.id as string)) {
      setBtnText("Add to watchlist");
    }
  }, [loveButtonState,params.id,watchlistIds]);

  console.log(params.id);

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
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "700",
              }}
              onClick={addToWatchListHandler}
            >
              {loveButtonState ? (
                <FaHeart
                  onClick={addToWatchListHandler}
                  style={{ color: "var(--primary-color)" }}
                  size={35}
                />
              ) : (
                ""
              )}
              {btnText}
            </button>
          </div>
          <button disabled={buttonDisabled} onClick={addToCartHandler}>
            {buttonDisabled ? "Loading..." : "Add To Cart"}
          </button>
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
