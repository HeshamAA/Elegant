import { TProducts } from "./productsTypes";

export type TAddToCartState = {
    items: { [key: string]: number };
    productFullInfo: TProducts[];
  };


  export type TGetCartResponse = TProducts[]