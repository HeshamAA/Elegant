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

  const { watchListProductsFullInfo } = useAppSelector(
    (state) => state.addToWatchList
  );
  const watchlistIds =
    watchListProductsFullInfo && watchListProductsFullInfo.map((el) => el.id);
  const { accessToken } = useAppSelector((state) => state.auth);

  const isInWatchlist = watchlistIds?.includes(productId);

  const addToWatchListHandler = () => {
    if (accessToken) {
      dispatch(addToWatchList(productId))
        .unwrap()
        .then(() => {
          if (isInWatchlist) {
            toast.error("Item Removed from watchList", {
              position: "top-right",
              className: "custom-toast-error",
              duration: 2000,
            });
          } else {
            toast.success("Item Added to watchList", {
              position: "top-right",
              className: "custom-toast",
              duration: 2000,
            });
          }
        });
    } else {
      toast.error("Please Login First", {
        position: "top-center",
        className: "custom-toast-error",
        duration: 4000,
      });
    }
  };

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
    isInWatchlist,
  };
}

export default useProductCard;
