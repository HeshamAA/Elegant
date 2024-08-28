export type TProducts = {
  id: number;
  title: string;
  price: number;
  cat_prefix?: string;
  img: string;
  quantity?: number;
  category?: string;
  sizes?: string[];
  selectedSize?: string;
  desc?: string;
};

export interface IProducts {
  data?: TProducts[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  filteredData?: TProducts[];
  product?: TProducts[];
}
