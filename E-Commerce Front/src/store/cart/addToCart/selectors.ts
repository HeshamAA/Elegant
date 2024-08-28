import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const getTotalCartQuantitySelector = createSelector(
  (state: RootState) => state.addToCartSlice.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return totalQuantity;
  }
);



export { getTotalCartQuantitySelector };
