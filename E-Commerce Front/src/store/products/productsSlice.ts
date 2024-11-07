import { createSlice } from "@reduxjs/toolkit";
import { IProductsState } from "../../types/productsTypes";
import getProductsByCategoryPrefix from "./thunk/getProductsByCategoryPrefix";
import getProducts from "./thunk/getProducts";
import deleteProduct from "./thunk/deleteProduct";
import addProduct from "./thunk/addProduct";
import editProduct from "./thunk/editProduct";
import getProduct from "./thunk/getProduct";


const initialState: IProductsState = {
  data: [],
  filteredData: [],
  loading: "idle",
  error: null,
  product: [],
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const { value } = action.payload;

      state.filteredData = state.data.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    },
    searchProductsCleanUp: (state) => {
      state.filteredData = [];
    },
    productsCleanUp: (state) => {
      state.data = [];
    },
    productCleanUp: (state) => {
      state.product = [];
    },
    sortingProducts: (state, action) => {
      const type = action.payload;

      if (type === "highPrice") {
        state.data = state.data.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (type === "lowPrice") {
        state.data = state.data.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (type === "az") {
        state.data = state.data.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsByCategoryPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProductsByCategoryPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(getProductsByCategoryPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(getProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";

      state.data = action.payload;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = "failed";

      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(addProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";

      state.data?.push(action.payload);
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = "failed";

      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(editProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(editProduct.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(editProduct.rejected, (state, action) => {
      state.loading = "failed";

      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.product?.push(action.payload);
    });

    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export const {
  productsCleanUp,
  sortingProducts,
  searchProducts,
  searchProductsCleanUp,
  productCleanUp,
} = productsSlice.actions;
export default productsSlice.reducer;
