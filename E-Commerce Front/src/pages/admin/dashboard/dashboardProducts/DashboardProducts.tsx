import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import getProducts from "../../../../store/products/thunk/getProducts";
import styles from "./dashboardProducts.module.css";
import DashboardTable from "../../../../components/dashboard/dashboardTable/DashboardTable";
import { Link } from "react-router-dom";

const { dashboardProductsSection } = styles;
const thead = [
  "Image",
  "Title",
  "Category",
  "Price",
  "Sizes",
  "Description",
  "Actions",
];

export default function DashboardProducts() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.products);
  

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <section className={dashboardProductsSection} style={{flexDirection:"column" }}>
      <Link to="/dashboard/products/addproduct" style={{ color: "var(--primary-color)" }}>Add Product</Link>
      <DashboardTable type="product" thead={thead} data={data}></DashboardTable>
    </section>
  );
}
