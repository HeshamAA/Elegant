import { useAppSelector } from "../store/hooks/hooks";

const { data: products } = useAppSelector((state) => state.products);
const { data: users } = useAppSelector((state) => state.users);
export type TDashboardTableProps = {
  thead: string[];
  data: any[];
  type: "product" | "user";
};
