import { useEffect } from "react";
import { RiMenuUnfold2Line } from "react-icons/ri";
import styles from "./sorting.module.css";

import useSorting from "../../../hooks/useSorting";

const { sorting, sortingMenu, opened } = styles;
function Sorting() {
  const {
    openSort,
    openSortHandler,
    sortingAZ,
    sortingHTL,
    sortingLTH,
    setOpenSort,
    location,
  } = useSorting();

  useEffect(() => {
    setOpenSort(false);
  }, [location.pathname]);

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
