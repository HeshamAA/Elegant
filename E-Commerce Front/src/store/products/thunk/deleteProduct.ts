import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProductsResponse } from "../../../types/productsTypes";
import Axi from "../../../api/api";

const deleteProduct = createAsyncThunk<
  TProductsResponse,
  string,
  { rejectValue: string }
>("productsslice/deleteproduct", async (productId, thunkAPI) => {
  try {
    await Axi.delete(`products/${productId}`);
    const response = await Axi.get(`products`);

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
