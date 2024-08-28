import { useEffect } from "react";
import styles from "./productCard.module.css";
import { TProducts } from "../../../types/products";
import { LoveButton } from "./ProductCardIcons/LoveButton";
import useProductCard from "../../../hooks/useProductCard";
import StarRating from "./ProductCardIcons/StarRating";
import Sizes from "./ProductCardIcons/Sizes";
import { getAddToWatchList } from "../../../store/addToWatchList/thunk/getAddToWatchList";
import getproduct from "../../../store/product/thunk/getProduct";
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

  useEffect(() => {
    
    dispatch(getAddToWatchList(id));
  }, [dispatch]);
  return (
    <>
      <div className={cardContainer}>
        <img
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
          <div className="flexBetween">
            <div>
              <div>{category}</div>
            </div>
            <div>
              <div className={`flex ${productSizes}`} style={{ gap: "10px" }}>
                <Sizes availableSizes={sizes || []}></Sizes>
              </div>
            </div>
          </div>
          <div className={productPrice}>{price}$</div>
          <div>
            <StarRating></StarRating>
          </div>

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
