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
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const filteredData = data?.filter((el) =>
    el.title
      ? el.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      : el.email?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <div className={dashboardTable}>
      <input
        placeholder="Search"
        style={{ width: "50%", margin: "10px auto" }}
        value={searchValue}
        onChange={searchHandler}
      ></input>

      <div
        style={{
          textAlign: "center",
          margin: "0 auto 20px",
          color: "var(--secondary-color)",
        }}
      >
        {`${
          !searchValue && filteredData.length !== 0
            ? `You have ${filteredData.length} items in the list`
            : `There's ${filteredData.length} results`
        }`}
      </div>

      {data.length !== 0 ? (
        <table className="container">
          <thead>
            <tr>
              {thead.map((el, index) => (
                <th key={index}>{el}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((el) => (
              <tr key={el.id}>
                <td>
                  <img src={el.img}></img>
                </td>
                <td>{el.title || el.email}</td>
                <td>{el.cat_prefix || el.firstName + " " + el.lastName}</td>
                <td>{el.price + "$" || el.role}</td>
                {type === "product" && (
                  <>
                    <td>
                      {el.sizes.map((size: string) => (
                        <div
                          style={{
                            fontSize:"18px",
                            textAlign: "center",
                            margin: "5px",
                          }}
                        >
                          {size}
                        </div>
                      ))}
                    </td>
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
      ) : (
        <div style={{ textAlign: "center" }}>There's no items Found</div>
      )}

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
