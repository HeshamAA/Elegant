import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "axios";

import { TGetCartResponse } from "../../../types/cartTypes";
import Axi from "../../../api/api";

const getCart = createAsyncThunk<TGetCartResponse,void, { rejectValue: string }>("cart/getcart", async (_, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;

  const { addToCart } = getState() as RootState;
  const itemsIds = Object.keys(addToCart.items);

  if (itemsIds.length === 0) {
    return fulfillWithValue([]);
  }
  try {
    const allItemsQueryString = itemsIds.map((el) => `id=${el}`).join("&");
    const response = await Axi.get(
      `products?${allItemsQueryString}`
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
