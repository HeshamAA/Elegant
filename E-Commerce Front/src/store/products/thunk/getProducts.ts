import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProductsResponse } from "../../../types/productsTypes";
import Axi from "../../../api/api";

const getProducts = createAsyncThunk<
  TProductsResponse,
  void,
  { rejectValue: string }
>("productsslice/getproducts", async (_, thunkAPI) => {
  try {
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

export default getProducts;
