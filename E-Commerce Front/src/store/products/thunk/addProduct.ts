import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts, TProductsResponse } from "../../../types/productsTypes";

const addProduct = createAsyncThunk<
  TProductsResponse,
  TProducts,
  { rejectValue: string }
>("productsslice/addProduct", async (productData, thunkAPI) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/products`,
      productData
    );

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

export default addProduct;
