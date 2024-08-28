import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

function useProducts() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const productsData = useAppSelector((state) => state.productsSlice.data);

  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + visibleCount);
  };



  return {
    dispatch,
    params,
    productsData,
    visibleCount,
    setVisibleCount,
    handleShowMoreItems,
  };
}

export default useProducts;
