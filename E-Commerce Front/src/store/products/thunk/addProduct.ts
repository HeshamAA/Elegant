import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TAddProduct, TAddProductData } from "../../../types/productsTypes";
import Axi from "../../../api/api";

const addProduct = createAsyncThunk<
  TAddProduct,
  TAddProductData,
  { rejectValue: string }
>("productsslice/addProduct", async (productData, thunkAPI) => {
  try {
    const response = await Axi.post(
      `products`,
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
