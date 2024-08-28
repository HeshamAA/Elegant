import { useEffect } from "react";
import { productsCleanUp } from "../../store/products/productsSlice";
import getProductsByCategoryPrefix from "../../store/products/thunk/getProductsByCategoryPrefix";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import styles from "./products.module.css";
import useProducts from "../../hooks/useProducts";
import Sorting from "../../components/Ecommerce/sorting/Sorting";

const { showMoreProductsButton } = styles;
const Products = () => {
  const {
    dispatch,
    params,
    productsData,
    visibleCount,
    setVisibleCount,
    handleShowMoreItems,
  } = useProducts();

  useEffect(() => {
    setVisibleCount(4);
    dispatch(getProductsByCategoryPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const productsToShow = productsData
    .slice(0, visibleCount)
    .map((el, index) => {
      return (
        <ProductCard
          id={el.id}
          key={index}
          title={el.title}
          price={el.price}
          img={el.img}
          cat_prefix={el.cat_prefix}
          category={el.cat_prefix}
          sizes={el.sizes}
        />
      );
    });


  return (
    <>
      <PagesFirstSection
        title={`${params.prefix} Products`}
      ></PagesFirstSection>
      <section
        style={{
          backgroundColor: "var(--opposite-secondary)",
          flexDirection: "column",
        }}
      >
        <Sorting></Sorting>
        <div className="container productCardsContainer">{productsToShow}</div>
        {productsToShow.length !== productsData.length ? (
          <button
            className={showMoreProductsButton}
            onClick={handleShowMoreItems}
          >
            Show More
          </button>
        ) : (
          ""
        )}
        
      </section>
    </>
  );
};
export default Products;
