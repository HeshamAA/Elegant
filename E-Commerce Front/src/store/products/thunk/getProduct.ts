import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "../../../types/productsTypes";
import Axi from "../../../api/api";

export const getProduct = createAsyncThunk<
  TProducts,
  string,
  { rejectValue: string }
>("products/fetchByIdStatus", async (productId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await Axi.get(
      `products/${productId}`
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
