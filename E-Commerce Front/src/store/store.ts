import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import bestSellersSlice from "./bestSellers/bestSellersSlice";
import addToCartSlice from "./cart/addToCart/addToCartSlice";
import addToWatchListSlice from "./addToWatchList/addToWatchListSlice";
import flyOutCartSlice from "./cart/flyOutCart/flyOutCartSlice";
import authSlice from "./auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersSlice from "./users/usersSlice";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Only persist the auth slice
};

// Combine reducers
const rootReducer = combineReducers({
  categories: categoriesSlice,
  products: productsSlice,
  bestSellers: bestSellersSlice,
  addToCart: addToCartSlice,
  addToWatchList: addToWatchListSlice,
  flyOutCart: flyOutCartSlice,
  auth: authSlice,
  users: usersSlice,
});

// Apply persistence to the combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
