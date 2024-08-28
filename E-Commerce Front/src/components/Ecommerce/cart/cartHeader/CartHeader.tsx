import React, { useEffect } from "react";
import styles from "./cartHeader.module.css";
import useCart from "../../../../hooks/useCart";

const { headings, heading, cartPage, checkoutPage, orderCompletePage } = styles;
function CartHeader() {
  const { currentPage, setCurrentPage, location } = useCart();
  useEffect(() => {
    if (location.pathname.includes("ordercomplete")) {
      setCurrentPage("ordercomplete");
    } else if (location.pathname.includes("checkout")) {
      setCurrentPage("checkout");
    } else {
      setCurrentPage("cart");
    }
  }, [location.pathname]);

  const pageChangeHandler = () => {
    if (currentPage === "cart") {
      return cartPage;
    } else if (currentPage === "checkout") {
      return checkoutPage;
    } else if (currentPage === "ordercomplete") {
      return orderCompletePage;
    }
  };

  return (
    <div className={`${headings} ${pageChangeHandler()}`}>
      <div className={heading}>
        <div>1</div>
        <span>Shopping cart</span>
      </div>
      <div className={heading}>
        <div>2</div>
        <span>Checkout details</span>
      </div>
      <div className={heading}>
        <div>3</div>
        <span>Order complete</span>
      </div>
    </div>
  );
}

export default CartHeader;
