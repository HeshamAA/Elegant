import styles from "./flyOutCart.module.css";
const { flyOutCartSection, flyOutCartOverlay } =
  styles;

import useCart from "../../../../hooks/useCart";
import FlyOutCartItemsContainer from "../flyOutCartItemsContainer/FlyOutCartItemsContainer";
function FlyOutCart() {
  const { closeFlyOutCartHandler } = useCart();
  return (
    <section className={flyOutCartSection}>
      <div onClick={closeFlyOutCartHandler} className={flyOutCartOverlay}></div>
      <FlyOutCartItemsContainer></FlyOutCartItemsContainer>
    </section>
  );
}

export default FlyOutCart;
