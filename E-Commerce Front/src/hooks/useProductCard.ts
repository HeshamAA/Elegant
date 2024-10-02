import { useState } from "react";
import { getTotalCartQuantitySelector } from "../store/cart/addToCart/selectors";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { addToCart } from "../store/cart/addToCart/addToCartSlice";
import { addToWatchList } from "../store/addToWatchList/addToWatchListSlice";
import toast from "react-hot-toast";

function useProductCard(productId: string) {
  const dispatch = useAppDispatch();

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const cartTotalQuantity = useAppSelector(getTotalCartQuantitySelector);

  const watchListTotalQuantity = useAppSelector(
    (state) => state.addToWatchList.watchlistIds
  );

  const notifyCart = () => {
    toast.success(`Item Added,You now have (${cartTotalQuantity + 1}) items`, {
      duration: 2000,
      position: "top-right",
      className: "custom-toast",
    });
  };



  const notifyWatchListAdded = () => {
    toast.success(
      `Item Added to watchList,You now have (${
        watchListTotalQuantity.length + 1
      }) items`,
      {
        duration: 2000,
        position: "top-right",
        className: "custom-toast",
      }
    );
  };

  const notifyWatchListRemoved = () => {
    toast.error(
      `Item removed from watchList,You now have (${
        watchListTotalQuantity.length - 1
      }) items`,
      {
        duration: 2000,
        position: "top-right",
        className: "custom-toast-error",
      }
    );
  };

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
    notifyCart();
    setButtonDisabled(true);
  };

  //  Love Button
  const [loveButtonState, setLoveButtonState] = useState<boolean>(false);

  const { watchlistIds } = useAppSelector((state) => state.addToWatchList);

  const addToWatchListHandler = () => {
    dispatch(addToWatchList(productId))
      .unwrap()
      .then(() => {
        if (!loveButtonState) {
          toast.success("Item Added to watchList", {
            position: "top-right",
            className: "custom-toast",
            duration: 2000,
          });
        } else {
          toast.error("Item Removed from watchList", {
            position: "top-right",
            className: "custom-toast-error",
            duration: 2000,
          });
        }
      });
  };
  console.log("hesham");
  
  return {
    dispatch,
    buttonDisabled,
    setButtonDisabled,
    cartTotalQuantity,
    getTotalCartQuantitySelector,
    notifyCart,
    notifyWatchListAdded,
    notifyWatchListRemoved,
    addToCartHandler,
    watchListTotalQuantity,
    loveButtonState,
    setLoveButtonState,
    watchlistIds,
    addToWatchListHandler,
  };
}

export default useProductCard;
