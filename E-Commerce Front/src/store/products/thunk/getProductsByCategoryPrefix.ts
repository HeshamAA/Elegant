import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProductsResponse } from "../../../types/productsTypes";

const getProductsByCategoryPrefix = createAsyncThunk<
TProductsResponse,
string,
{rejectValue: string}
>(
  "productsslice/getproductsbycategoryprefix",
  async (prefix: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products?cat_prefix=${prefix}`
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

export default getProductsByCategoryPrefix;
