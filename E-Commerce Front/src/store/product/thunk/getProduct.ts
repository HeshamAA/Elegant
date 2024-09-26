import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "../../../types/productsTypes";

export const getProduct = createAsyncThunk<
  TProducts,
  string,
  { rejectValue: string }
>("products/fetchByIdStatus", async (productId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get(
      `http://localhost:5000/products/${productId}`
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

export default getProduct;
