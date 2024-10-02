import { GiPartyPopper } from "react-icons/gi";
import styles from "./CartOrderComplete.module.css";
import { Link } from "react-router-dom";

const { cartOrderComplete, orderDetails } = styles;

function CartOrderComplete() {
  return (
    <div className={cartOrderComplete}>
      <h1>
        Thank You <GiPartyPopper />
      </h1>
      <div>Your order has been successfully placed</div>
      <div className={orderDetails}>
        <div className="flex">
          <div>Order Code:</div>
          <div>Date:</div>
          <div>Total:</div>
          <div>Payment Method:</div>
        </div>
        <div className="flex">
          <span>4536742</span>
          <span>2022-01-01</span>
          <span>1,3584$</span>
          <span>Credit Card</span>
        </div>
      </div>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default CartOrderComplete;
