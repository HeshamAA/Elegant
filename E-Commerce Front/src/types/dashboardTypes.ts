import { TUsersResponse } from "./authTypes";
import { TProducts } from "./productsTypes";

export type TDashboardTableProps = {
  thead: string[];
  data: TProducts[] | TUsersResponse[];
  type: "product" | "user";
};
