import { TProducts } from "./productsTypes";
type watchListProductsFullInfo = TProducts & { isLiked?: boolean };
export type TWatchlistIds = {
  id: string;
  isLiked?: boolean;
}
export type TAddToWatchListState = {
  watchlistIds: TWatchlistIds[];
  watchListProductsFullInfo: watchListProductsFullInfo[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export type TWatchlistResponse = TProducts[];
