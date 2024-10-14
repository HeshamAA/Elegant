import { useState } from "react";
import { useAppDispatch } from "../store/hooks/hooks";
import { useLocation } from "react-router-dom";
import { sortingProducts } from "../store/products/productsSlice";

function useSorting() {
  const dispatch = useAppDispatch();
  const [openSort, setOpenSort] = useState(false);
  const location = useLocation();
  const openSortHandler = () => {
    setOpenSort((prev) => !prev);
  };

  const sortingAZ = () => {
    dispatch(sortingProducts("az"));
  };
  const sortingHTL = () => {
    dispatch(sortingProducts("highPrice"));
  };
  const sortingLTH = () => {
    dispatch(sortingProducts("lowPrice"));
  };

  return {
    setOpenSort,
    openSort,
    openSortHandler,
    sortingAZ,
    sortingHTL,
    sortingLTH,
    location,
  };
}

export default useSorting;
