import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "../../../types/products";
interface TProductWithId extends TProducts {
  productId: number;
}

type TResponse = TProductWithId[];

const addToWatchList = createAsyncThunk<
  { type: "add" | "remove"; productId: number },
  number,
  { rejectValue: string }
>("watchlist/addToWatchList", async (productId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    // Fetch the entire watchlist
    const response = await axios.get<TResponse>(
      "http://localhost:5000/watchlist"
    );
    const watchlist = response.data;

    const itemToDelete = watchlist.find((item) => item.productId === productId);

    if (itemToDelete) {
      await axios.delete(`http://localhost:5000/watchlist/${itemToDelete.id}`);
      return { type: "remove", productId };
    }
    // Otherwise, add the product to the watchlist
    else {
      await axios.post("http://localhost:5000/watchlist", {
        userId: "1",
        productId,
      });
      return { type: "add", productId };
    }
  } catch (error) {
    // Handle and return any errors that occur
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("An unexpected error occurred");
    }
  }
});

export { addToWatchList };
