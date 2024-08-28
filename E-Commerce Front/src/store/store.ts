import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import bestSellersSlice from "./bestSellers/bestSellersSlice";
import addToCartSlice from "./cart/addToCart/addToCartSlice";
import addToWatchListSlice from "./addToWatchList/addToWatchListSlice";
import flyOutCartSlice from "./cart/flyOutCart/flyOutCartSlice";
import productSlice from "./product/productSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    categoriesSlice,
    productsSlice,
    bestSellersSlice,
    addToCartSlice,
    addToWatchListSlice,
    flyOutCartSlice,
    productSlice,
    authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
