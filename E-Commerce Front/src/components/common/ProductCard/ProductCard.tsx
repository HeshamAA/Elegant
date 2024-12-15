import { useEffect } from "react";
import styles from "./productCard.module.css";
import { TProducts } from "../../../types/productsTypes";
import LoveButton from "./ProductCardIcons/LoveButton";
import useProductCard from "../../../hooks/useProductCard";
import Sizes from "./ProductCardIcons/Sizes";
import getproduct from "../../../store/products/thunk/getProduct";
import DetailsButton from "./ProductCardIcons/DetailsButton";

const {
  cardContainer,
  productCardImg,
  cardContent,
  addToCartButton,
  productPrice,
  productSizes,
} = styles;

const ProductCard = ({ id, title, price, img, category, sizes }: TProducts) => {
 

  const { dispatch, addToCartHandler, buttonDisabled, setButtonDisabled } =
    useProductCard(id);

  useEffect(() => {
    if (buttonDisabled) {
      const debounce = setTimeout(() => {
        setButtonDisabled(false);
      }, 500);
      return () => clearTimeout(debounce);
    }
  }, [buttonDisabled]);

  return (
    <>
      <div className={cardContainer}>

        
        <img
          alt="image"
          onClick={() => {
            dispatch(getproduct(id));
          }}
          src={img}
          className={productCardImg}
        ></img>


        <LoveButton id={id}></LoveButton>
        <DetailsButton id={id}></DetailsButton>

        <div className={`${cardContent}`}>
          <h3>{title}</h3>
          <div className="flexMiddleScreen">
            <div>{category}</div>
          </div>
          <div
            className={`flexMiddleScreen ${productSizes}`}
            style={{ gap: "10px" }}
          >
            <Sizes availableSizes={sizes || []}></Sizes>
          </div>
          <div className={productPrice}>{price}$</div>
        

          <button
            className={`flexMiddleScreen ${addToCartButton}`}
            onClick={addToCartHandler}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Loading..." : "Add To Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
