import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks/hooks";
import { useNavigate } from "react-router-dom";
import Modal from "../../feedback/modal/Modal";
import { TDashboardTableProps } from "../../../types/dashboardTypes";
import deleteProduct from "../../../store/products/thunk/deleteProduct";
import styles from "./dashboardTable.module.css";
import deleteUser from "../../../store/users/thunk/deleteUser";
const { dashboardTable } = styles;
function DashboardTable({ type, thead, data }: TDashboardTableProps) {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<string>("0");
  const navigate = useNavigate();


  return (
    <div className={dashboardTable}>
      <table className="container">
        <thead>
          <tr>
            {thead.map((el, index) => (
              <th key={index}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((el) => (
            <tr key={el.id}>
              <td>
                <img src={el.img}></img>
              </td>
              <td>{el.title || el.email}</td>
              <td>{el.cat_prefix || el.firstName + " " + el.lastName}</td>
              <td>{el.price || el.role}</td>
              {type === "product" && (
                <>
                  <td>{el.sizes}</td>
                  <td title={`${el.desc}`}>{el.desc}</td>{" "}
                </>
              )}
              <td>
                {el.role !== "admin" && (
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setId(el.id);
                    }}
                  >
                    Delete
                  </button>
                )}

                {type === "product" && (
                  <button
                    onClick={() =>
                      navigate(`/dashboard/products/edit-products/${el.id}`)
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal
          message={`Are you sure you want to delete this ${type}`}
          closeHandler={() => setIsModalOpen(false)}
          functionToDo={() => {
            type === "product"
              ? dispatch(deleteProduct(id))
              : dispatch(deleteUser(id));
          }}
        ></Modal>
      )}
    </div>
  );
}

export default React.memo(DashboardTable);
