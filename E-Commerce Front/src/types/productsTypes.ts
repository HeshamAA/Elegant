export type TProducts = {
  id: string;
  title: string;
  price: number;
  cat_prefix?: string;
  img: string;
  quantity?: number;
  category?: string;
  sizes?: string[];
  selectedSize?: string;
  desc?: string;
  isLiked?: boolean;
};

export interface IProductsState {
  data: TProducts[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  filteredData?: TProducts[];
  product?: TProducts[];
}

export type TProductsResponse = TProducts[];
export type TAddProduct = {
  id: string;
  title: string;
  desc: string;
  price: number;
  img: string;
  sizes: string[];
  cat_prefix: string;
};

export type TAddProductData = TAddProduct[];
export type TEditProduct = {
  productId: string;
  updatedProductData: TAddProduct[];
};
export type TEditProductPayload = TEditProduct | TAddProductData;
