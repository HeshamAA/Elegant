import { useState } from "react";
import { getTotalCartQuantitySelector } from "../store/cart/addToCart/selectors";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { useNatificationToast } from "./useNatificationToast";
import { addToCart } from "../store/cart/addToCart/addToCartSlice";
import { addToWatchList } from "../store/addToWatchList/addToWatchListSlice";

function useProductCard(productId: number) {
  const dispatch = useAppDispatch();

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const cartTotalQuantity = useAppSelector(getTotalCartQuantitySelector);

  const watchListTotalQuantity = useAppSelector(
    (state) => state.addToWatchListSlice.watchListIds
  );

  const { notify: notifyCart } = useNatificationToast(
    `Item Added,You now have (${cartTotalQuantity + 1}) items`,
    cartTotalQuantity
  );

  const { notify: notifyWatchListAdded } = useNatificationToast(
    `Item Added to watchList,You now have (${
      watchListTotalQuantity.length + 1
    }) items`,
    watchListTotalQuantity.length
  );

  const { errorNotify: notifyWatchListRemoved } = useNatificationToast(
    `Item removed from watchList,You now have (${
      watchListTotalQuantity.length - 1
    }) items`,
    watchListTotalQuantity.length
  );

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
    notifyCart();
    setButtonDisabled(true);
  };

  //  Love Button
  const [loveButtonState, setLoveButtonState] = useState<boolean>(false);

  const watchListProductsIds: number[] = watchListTotalQuantity.map((el) => el);

  const addToWatchListHandler = () => {
    dispatch(addToWatchList(productId))
      .unwrap()
      .then((action) => {
        if (action.type === "add") {
          setLoveButtonState(true);
          notifyWatchListAdded();
        } else if (action.type === "remove") {
          setLoveButtonState(false);
          notifyWatchListRemoved();
        }
      })
      .catch((error) => {
        console.error("Failed to update watchlist:", error);
      });
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
    watchListProductsIds,
    addToWatchListHandler,
  };
}

export default useProductCard;
