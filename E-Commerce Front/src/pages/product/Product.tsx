import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import styles from "./product.module.css";
import { useParams } from "react-router-dom";
import getproduct from "../../store/product/thunk/getProduct";
import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import useProductCard from "../../hooks/useProductCard";
import { cleanUpProduct } from "../../store/product/productSlice";
const { productSection, productDetailsContainer } = styles;

function Product() {
  const productDetails = useAppSelector((state) => state.productSlice.product);
  const params = useParams();
  console.log(params.id);
  const { addToCartHandler, addToWatchListHandler } = useProductCard(params.id);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (productDetails?.length > 0) {
      dispatch(cleanUpProduct());
      dispatch(getproduct(params.id));
    }else{
      dispatch(getproduct(params.id));
    }
  }, [dispatch, params.id]);

  const productToShow = productDetails.map((el, index) => {
    return (
      <div className={productDetailsContainer} key={index}>
        <img src={el.img}></img>
        <div>
          <div>{el.title}</div>
          <div>{el.desc}</div>
          <div>{el.cat_prefix}</div>
          <div>{el.price}$</div>
          <div>
            {el.sizes.map((el) => {
              return <span>{el}</span>;
            })}
          </div>
          <div>
            <button onClick={addToWatchListHandler}>Add to watchlist</button>
          </div>
          <button onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    );
  });

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
