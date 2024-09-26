import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import getProducts from "../../../../store/products/thunk/getProducts";
import styles from "./dashboardProducts.module.css";
import Modal from "../../../../components/feedback/modal/Modal";
import deleteProduct from "../../../../store/products/thunk/deleteProduct";
import { useNavigate } from "react-router-dom";

const { dashboardProductsSection } = styles;

export default function DashboardProducts() {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { data } = useAppSelector((state) => state.products);

  console.log(id, typeof id);

  return (
    <section className={dashboardProductsSection}>
      <h1>Products Managment</h1>
      <table className="container">
        <thead>
          <tr>
            <th>Img</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Sizes</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.img}></img>
              </td>
              <td>{product.title}</td>
              <td>{product.cat_prefix}</td>
              <td>{product.price}</td>
              <td>{product.sizes}</td>
              <td>{product.desc}</td>
              <td>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setId(product.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/dashboard/products/edit-products/${product.id}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        message="Are you sure you want to delete this product"
        closeHandler={() => setIsModalOpen(false)}
        functionToDo={() => dispatch(deleteProduct(id))}
      ></Modal>
    </section>
  );
}
