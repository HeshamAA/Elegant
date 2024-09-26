import { useEffect, useState } from "react";
import { productsCleanUp } from "../../store/products/productsSlice";
import getProductsByCategoryPrefix from "../../store/products/thunk/getProductsByCategoryPrefix";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import PagesFirstSection from "../../components/common/PagesFirstSection/PagesFirstSection";
import styles from "./products.module.css";
import useProducts from "../../hooks/useProducts";
import Sorting from "../../components/Ecommerce/sorting/Sorting";
import Pagination from "../../components/feedback/pagination/Pagination";

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
    dispatch(getProductsByCategoryPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params.prefix]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToShow = productsData
    .slice(startIndex, endIndex)
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
        <Pagination
          itemsPerPage={4}
          items={productsData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </section>
    </>
  );
};
export default Products;
