import { createSlice } from "@reduxjs/toolkit";
import { addToWatchList } from "./thunk/addToWatchList";

const initialState = {
  watchListIds: [],
  watchListProductsFullInfo: [],
};
const addToWatchListSlice = createSlice({
  name: "addToWatchList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToWatchList.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.watchListIds.push(action.payload.productId);
      } else if (action.payload.type === "remove") {
        state.watchListIds = state.watchListIds.filter(
          (itemId) => itemId !== action.payload.productId
        );
      }
    });
  },
});

export default addToWatchListSlice.reducer;
export { addToWatchList };
