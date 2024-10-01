import FlyOutCartItem from "../../../components/Ecommerce/cart/flyOutCartItem/flyOutCartItem";
import useCart from "../../../hooks/useCart";
import styles from "../cartPage/cartPage.module.css";
const { subtotal, coupon, submitButton } = styles;

type Props = {
  setNextStep: () => void;
};
function CartProductsStep({ setNextStep }: Props) {
  const { fullProductsWithQuantity, cartTotalPrice } = useCart();

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
  return (
    <div
      className="container flexMiddleScreen"
      style={{ flexDirection: "column", gap: "50px" }}
    >
      {productToShow}
      <div className={`flexBetween ${subtotal}`}>
        <div>Total:</div>
        <div>{cartTotalPrice.toFixed(2)}$</div>
      </div>
      <div className={coupon}>
        <input placeholder="Enter your coupon"></input>
        <button>Apply</button>
      </div>
      <button className={submitButton} onClick={setNextStep}>
        checkout
      </button>
    </div>
  );
}

export default CartProductsStep;
