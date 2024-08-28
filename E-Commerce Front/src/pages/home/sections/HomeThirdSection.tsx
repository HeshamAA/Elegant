import { useEffect } from "react";
import styles from "../home.module.css";
import ProductCard from "../../../components/common/ProductCard/ProductCard";
import getBestSellers from "../../../store/bestSellers/thunk/getBestSellers";
import useHome from "../../../hooks/useHome";

const { homeThirdSection, homeThirdSectionContainer, productCardsContainer } =
  styles;

function HomeThirdSection() {
  const { dispatch, bestSellersData } = useHome();

  useEffect(() => {
    dispatch(getBestSellers());
  }, [dispatch]);

  const bestSellers = bestSellersData.map((el) => {
    return (
      <ProductCard
        id={el.id}
        key={el.id}
        title={el.title}
        price={el.price.toFixed(2)}
        img={el.img}
        category={el.cat_prefix}
        cat_prefix={el.cat_prefix}
        sizes={el.sizes}
      />
    );
  });

  return (
    <section className={homeThirdSection}>
      <div
        className={`container flexMiddleScreen ${homeThirdSectionContainer}`}
      >
        <div>Best sellers</div>
        <div className={`container ${productCardsContainer}`}>
          {bestSellers}
        </div>
      </div>
    </section>
  );
}

export default HomeThirdSection;
