import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProductsResponse } from "../../../types/productsTypes";

const deleteProduct = createAsyncThunk<
  TProductsResponse,
  string,
  { rejectValue: string }
>("productsslice/deleteproduct", async (productId, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    const response = await axios.get(`http://localhost:5000/products`);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    } else {
      return thunkAPI.rejectWithValue("An unexpected error");
    }
  }
});

export default deleteProduct;
