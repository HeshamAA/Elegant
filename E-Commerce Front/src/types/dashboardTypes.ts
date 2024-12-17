import { TUsersResponse } from "./authTypes";
import { TProducts } from "./productsTypes";
export type TDashboardTableHookData = TProducts[] | TUsersResponse[] | TUsersResponse;
export type TDashboardTableProps = {
  thead: string[];
  data: TDashboardTableHookData;
  type: "product" | "user";
};
