import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const flyOutCartSlice = createSlice({
  name: "flyOutCart",
  initialState,
  reducers: {
    openFlyOutCart: (state) => {
      state.isOpened = true;
    },
    closeFlyOutCart: (state) => {
      state.isOpened = false;
    },
  },
  
});

export const { openFlyOutCart, closeFlyOutCart } = flyOutCartSlice.actions;
export default flyOutCartSlice.reducer;
