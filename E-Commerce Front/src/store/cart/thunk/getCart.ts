import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "axios";

const getCart = createAsyncThunk("cart/getcart", async (_, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;

  const { addToCartSlice } = getState() as RootState;
  const itemsIds = Object.keys(addToCartSlice.items);

  if (itemsIds.length === 0) {
    return fulfillWithValue([]);
  }
  try {
    const allItemsQueryString = itemsIds.map((el) => `id=${el}`).join("&");
    const response = await axios.get(
      `http://localhost:5000/products?${allItemsQueryString}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("An unexpected error");
    }
  }
});

export default getCart;
