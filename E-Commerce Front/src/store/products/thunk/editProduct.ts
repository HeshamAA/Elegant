import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TEditProductPayload, TAddProduct } from "../../../types/productsTypes";

const editProduct = createAsyncThunk<
  TAddProduct,
  TEditProductPayload,
  { rejectValue: string }
>(
  "productsslice/editProduct",
  async ({ productId, updatedProductData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/products/${productId}`,
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
