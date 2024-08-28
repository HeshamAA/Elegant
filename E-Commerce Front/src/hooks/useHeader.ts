import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getCategories } from "../store/categories/categoriesSlice";
import {
  openFlyOutCart,
  closeFlyOutCart,
} from "../store/cart/flyOutCart/flyOutCartSlice";
import { useNavigate } from "react-router-dom";
import getProducts from "../store/products/thunk/getProducts";
import {
  searchProducts,
  searchProductsCleanUp,
} from "../store/products/productsSlice";
import getproduct from "../store/product/thunk/getProduct";
function useHeader() {
  // header
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const watchListTotalQuantity = useAppSelector(
    (state) => state.addToWatchListSlice.watchListIds.length
  );

  // Header NavLinks

  const categories = useAppSelector((state) => state.categoriesSlice.data);
  const linksTitles: string[] = ["home", "categories","cart", "contact" ];

  // Header Burger

  const [isBurgerOpened, setIsBurgerOpened] = useState<boolean>(false);
  const [isCategoriesOpened, setIsCategoriesOpened] = useState<boolean>(false);

  // Topbar

  const filteredData = useAppSelector(
    (state) => state.productsSlice.filteredData
  );
  const [, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      setIsOpen(true);
      dispatch(getProducts());
      dispatch(searchProducts({ value }));
    } else {
      setIsOpen(false);
      dispatch(searchProductsCleanUp());
    }
  };

  const getProductHandler = (id) => {
    dispatch(getproduct(id));
    navigate(`/products/product/${id}`);
    setIsOpen(false)
  };
  return {
    dispatch,
    navigate,
    getCategories,
    categories,
    linksTitles,
    isBurgerOpened,
    setIsBurgerOpened,
    isCategoriesOpened,
    setIsCategoriesOpened,
    watchListTotalQuantity,
    openFlyOutCart,
    closeFlyOutCart,
    filteredData,
    isOpen,
    searchHandler,
    getProductHandler
  };
}

export default useHeader;
