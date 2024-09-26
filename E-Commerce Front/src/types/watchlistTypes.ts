import { TProducts } from "./productsTypes";

export type TAddToWatchListState = {
  watchlistIds: string[];
  watchListProductsFullInfo: TProducts[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export type TWatchlistResponse = TProducts[];
