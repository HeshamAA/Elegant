import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProductsResponse } from "../../../types/productsTypes";

const getProducts = createAsyncThunk<
  TProductsResponse,
  string,
  { rejectValue: string }
>("productsslice/getproducts", async (_, thunkAPI) => {
  try {
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

export default getProducts;
