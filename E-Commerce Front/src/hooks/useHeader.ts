import { useEffect, useState } from "react";
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
import getproduct from "../store/products/thunk/getProduct";
import { getWatchListProducts } from "../store/addToWatchList/addToWatchListSlice";

function useHeader() {
  // header
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const watchListTotalQuantity = useAppSelector(
    (state) => state.addToWatchList.watchlistIds.length
  );
  const { watchListProductsFullInfo } = useAppSelector(
    (state) => state.addToWatchList
  );

  console.log(watchListProductsFullInfo);
 const watchListTotalQuantityFull = watchListProductsFullInfo?.length|| 0;
  useEffect(() => {
    dispatch(getWatchListProducts());
  }, [dispatch]);
  // Header NavLinks

  const categories = useAppSelector((state) => state.categories.data);

  const linksTitles: string[] = [
    "home",
    "categories",
    "cart",
    "contact",
    "dashboard",
  ];

  // Header Burger

  const [isBurgerOpened, setIsBurgerOpened] = useState<boolean>(false);
  const [isCategoriesOpened, setIsCategoriesOpened] = useState<boolean>(false);

  // Topbar

  const filteredData = useAppSelector((state) => state.products.filteredData);
  const [, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState(1000);
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const newTimer = setTimeout(() => {
      if (value) {
        setIsOpen(true);
        dispatch(getProducts());
        dispatch(searchProducts({ value }));
      } else {
        setIsOpen(false);
        dispatch(searchProductsCleanUp());
      }
    }, 1000);

    setDebounceTimer(newTimer);
  };
  const getProductHandler = (id: string) => {
    dispatch(getproduct(id));
    navigate(`/products/product/${id}`);
    setIsOpen(false);
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
    getProductHandler,
    watchListTotalQuantityFull,
  };
}

export default useHeader;
