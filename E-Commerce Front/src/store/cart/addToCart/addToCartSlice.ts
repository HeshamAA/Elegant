import { createSlice } from "@reduxjs/toolkit";
import { TProducts } from "../../../types/products";
import getCart from "../thunk/getCart";

type TAddToCart = {
  items: { [key: string]: number };
  productFullInfo: TProducts[];
};

const initialState: TAddToCart = {
  items: {},
  productFullInfo: [],
};

const addToCartSlice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id] += 1;
      } else {
        state.items[id] = 1;
      }
    },
    cartProductQuantityDecrease: (state, action) => {
      const id = action.payload;
      if (state.items[id] > 1) {
        state.items[id] -= 1;
      } else {
        state.items[id] = 0;
      }
    },
    removeProductFromCart: (state, action) => {
      const id = action.payload;
      if (id in state.items) {
        delete state.items[id];
        state.productFullInfo = state.productFullInfo.filter(
          (el) => el.id !== id
        );
      }
    },

    changeSize: (state, action) => {
      const { id, size } = action.payload;
      const item = state.productFullInfo.find((item) => item.id === id);
      if (item) {
        item.selectedSize = size;
      }
    },
    
  },

  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.productFullInfo = action.payload
        .filter((product) => {
          return state.items[product.id] !== undefined;
        })
        .map((el) => {
          return { ...el, selectedSize: "M" };
        });
    });
  },
});
export { getCart };
export const {
  addToCart,
  cartProductQuantityDecrease,
  removeProductFromCart,
  changeSize,
} = addToCartSlice.actions;
export default addToCartSlice.reducer;
