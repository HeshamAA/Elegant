import { useEffect } from "react";
import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import styles from "./watchList.module.css";
import {
  clearProductsFullInfo,
  getWatchListProducts,
} from "../../store/addToWatchList/addToWatchListSlice";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import Empty from "../../components/feedback/empty/Empty";

const { watchListSection } = styles;
function WatchList() {
  const dispatch = useAppDispatch();
  const { watchListProductsFullInfo } = useAppSelector(
    (state) => state.addToWatchList
  );
  const { accessToken } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (accessToken) {
      dispatch(getWatchListProducts());
    } else {
      dispatch(clearProductsFullInfo());
    }
  }, [dispatch]);

  return (
    <>
      <PagesFirstSection title="Watchlist"></PagesFirstSection>
      <section className={watchListSection}>
        <div className="container productCardsContainer">
          {watchListProductsFullInfo ? watchListProductsFullInfo.map((el, index) => {
            return (
              <ProductCard
                id={el.id}
                key={index}
                title={el.title}
                price={el.price}
                img={el.img}
                category={el.cat_prefix}
                cat_prefix={el.cat_prefix}
                sizes={el.sizes}
              />
            );
          }) : <Empty text="Watchlist is empty"></Empty>}
        </div>
      </section>
    </>
  );
}

export default WatchList;
