import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  TAddProduct, TEditProduct } from "../../../types/productsTypes";
import Axi from "../../../api/api";

const editProduct = createAsyncThunk<
  TAddProduct,
  TEditProduct,
  { rejectValue: string }
>(
  "productsslice/editProduct",
  async ({ productId, updatedProductData }, thunkAPI) => {
    try {
      const response = await Axi.patch(
        `products/${productId}`,
        updatedProductData
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
  }
);

export default editProduct;
