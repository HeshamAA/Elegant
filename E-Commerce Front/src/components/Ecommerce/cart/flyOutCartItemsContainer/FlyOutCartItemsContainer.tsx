import  { useEffect } from "react";
import styles from "../flyOutCart/flyOutCart.module.css";
import useCart from "../../../../hooks/useCart";
import FlyOutCartItem from "../flyOutCartItem/flyOutCartItem";
import getCart from "../../../../store/cart/thunk/getCart";
import { Link } from "react-router-dom";
import Empty from "../../../feedback/empty/Empty";
import { TbShoppingCartOff } from "react-icons/tb";
const { flyOutCartContainer, active } = styles;

function FlyOutCartItemsContainer() {
  const {
    closeFlyOutCartHandler,
    isFlyOutCartOpened,
    dispatch,
    fullProductsWithQuantity,
    cartTotalPrice,
  } = useCart();

  const productToShow = fullProductsWithQuantity.map((el) => {
    if (el.quantity !== 0) {
      return (
        <FlyOutCartItem
          id={el.id}
          key={el.id}
          img={el.img}
          title={el.title}
          price={el.price * el.quantity}
          quantity={el.quantity}
          sizes={el.sizes}
        ></FlyOutCartItem>
      );
    }
  });

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div
      className={`${flyOutCartContainer} ${isFlyOutCartOpened ? active : ""}`}
    >
      <div className="flexBetween">
        <h4>Cart</h4>
        <div onClick={closeFlyOutCartHandler}>X</div>
      </div>
      {fullProductsWithQuantity.length !== 0 ? (
        <>
          {productToShow}
          <div className="flexBetween">
            <div>Total:</div>
            <div>{cartTotalPrice.toFixed(2)}$</div>
          </div>
          <button>Checkout</button>
          <Link to="/cart" onClick={closeFlyOutCartHandler}>
            View Cart
          </Link>
        </>
      ) : (
        <Empty
          children={<TbShoppingCartOff size={200} />}
          text="Your cart it empty"
        ></Empty>
      )}
    </div>
  );
}

export default FlyOutCartItemsContainer;
