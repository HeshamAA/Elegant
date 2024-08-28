import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import {
  closeFlyOutCart,
  openFlyOutCart,
} from "../store/cart/flyOutCart/flyOutCartSlice";
import { getTotalCartQuantitySelector } from "../store/cart/addToCart/selectors";
import { useState } from "react";
import { changeSize } from "../store/cart/addToCart/addToCartSlice";
import { useLocation } from "react-router-dom";

function useCart() {
  const dispatch = useAppDispatch();
  // cart header
  const [currentPage, setCurrentPage] = useState("cart");
  const location = useLocation();
  // flyout cart item

  // cart
  const [selectedSize, setSelectedSize] = useState("");

  const cartTotalQuantity = useAppSelector(getTotalCartQuantitySelector);

  const isFlyOutCartOpened = useAppSelector(
    (state) => state.flyOutCartSlice.isOpened
  );
  const closeFlyOutCartHandler = () => {
    dispatch(closeFlyOutCart());
  };

  const openFlyOutCartHandler = () => {
    dispatch(openFlyOutCart());
  };

  const getProductsFullInfo = useAppSelector(
    (state) => state.addToCartSlice.productFullInfo
  );

  const cartItems = useAppSelector((state) => state.addToCartSlice.items);

  const fullProductsWithQuantity = getProductsFullInfo.map((el, index) => ({
    ...el,
    quantity: Object.values(cartItems)[index],
  }));

  const cartTotalPrice = fullProductsWithQuantity.reduce(
    (acc, el) => acc + el.price * el.quantity,
    0
  );

  const sizeChangeHandler = (id: number, size: string) => {
    dispatch(changeSize({ id, size }));
  };

  return {
    dispatch,
    currentPage,
    setCurrentPage,
    location,
    selectedSize,
    setSelectedSize,
    cartTotalQuantity,
    isFlyOutCartOpened,
    closeFlyOutCartHandler,
    openFlyOutCartHandler,
    fullProductsWithQuantity,
    cartTotalPrice,
    sizeChangeHandler,
  };
}

export default useCart;
