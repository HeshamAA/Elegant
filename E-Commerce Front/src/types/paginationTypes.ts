import { TProducts } from "./productsTypes";

export type TPaginationProps = {
  itemsPerPage: number;
  items: TProducts[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
