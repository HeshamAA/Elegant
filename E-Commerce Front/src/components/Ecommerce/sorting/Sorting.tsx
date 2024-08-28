import React, { useEffect, useState } from "react";
import { RiMenuUnfold2Line } from "react-icons/ri";
import styles from "./sorting.module.css";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { sortingProducts } from "../../../store/products/productsSlice";
import { useLocation } from "react-router-dom";

const { sorting, sortingMenu, opened } = styles;
function Sorting() {
  const dispatch = useAppDispatch();
  const [openSort, setOpenSort] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpenSort(false);
  }, [location.pathname]);

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

  return (
    <div className={`container ${sorting}`}>
      <RiMenuUnfold2Line onClick={openSortHandler} size={40} />
      <div className={`${sortingMenu} ${openSort ? opened : ""}`}>
        <div onClick={sortingAZ}>A-Z</div>
        <div onClick={sortingHTL}>High to low Price</div>
        <div onClick={sortingLTH}>Low to High Price</div>
      </div>
    </div>
  );
}

export default Sorting;
