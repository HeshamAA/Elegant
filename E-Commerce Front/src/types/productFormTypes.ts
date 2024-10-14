// export type TProductFormInputs = {
//   title: string;
//   img: string;
//   desc: string;
//   price: number;
//   cat_prefix: string;
//   sizes: { value: string; label: string }[];

import { TProducts } from "./productsTypes";

// };
export type TProductManagementProps = {
  actionType: string;
  productId?: string;
  defaultValues?: TProducts;
  // sizesDefaultValues?: string[];
};
export type TProductFormInputs = TProducts | Partial<TProducts>;
