import styles from "./cartPage.module.css";
import CartHeader from "../../../components/Ecommerce/cart/cartHeader/CartHeader";

import FlyOutCartItem from "../../../components/Ecommerce/cart/flyOutCartItem/flyOutCartItem";
import useCart from "../../../hooks/useCart";
import Empty from "../../../components/feedback/empty/Empty";
import { TbShoppingCartOff } from "react-icons/tb";
import { useEffect } from "react";
import getCart from "../../../store/cart/thunk/getCart";

const { cartPageSection, subtotal, coupon } = styles;
function CartPage() {
  const { dispatch, fullProductsWithQuantity, cartTotalPrice } = useCart();

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
    <section className={cartPageSection}>
      {productToShow.length === 0 ? (
        <Empty
          children={<TbShoppingCartOff size={200} />}
          text="Your cart is empty"
        ></Empty>
      ) : (
        <div
          className="container flexMiddleScreen"
          style={{ flexDirection: "column", gap: "100px" }}
        >
          <CartHeader></CartHeader>

          {productToShow}
          <div className={`flexBetween ${subtotal}`}>
            <div>Total:</div>
            <div>{cartTotalPrice.toFixed(2)}$</div>
          </div>
          <div className={coupon}>
            <input placeholder="Enter your coupon"></input>
            <button>Apply</button>
          </div>
          <button>checkout</button>
        </div>
      )}
    </section>
  );
}

export default CartPage;
