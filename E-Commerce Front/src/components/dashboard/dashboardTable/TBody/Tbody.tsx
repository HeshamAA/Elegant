import React from "react";
import useDashboardTable from "../../../../hooks/useDashboardTable";
import { TProducts } from "../../../../types/productsTypes";
import { TUsersResponse } from "../../../../types/authTypes";
import Modal from "../../../feedback/modal/Modal";
import deleteProduct from "../../../../store/products/thunk/deleteProduct";
import deleteUser from "../../../../store/users/thunk/deleteUser";

type TBodyProps = {
  type: "product" | "user";
  data: TProducts[] | TUsersResponse[];
  filteredData: (TProducts | TUsersResponse)[];
};

function Tbody({ type, data, filteredData }: TBodyProps) {
  const {
    dispatch,
    isModalOpen,
    setIsModalOpen,
    id,
    setId,

    navigate,
  } = useDashboardTable(data);

  const isProduct = (el: TProducts | TUsersResponse): el is TProducts => {
    return (el as TProducts).cat_prefix !== undefined;
  };

  return (
    <>
      <tbody>
        {filteredData.map((el) => (
          <tr key={el.id}>
            <td>
              <img
                src={isProduct(el) ? el.img : ""}
                alt={isProduct(el) ? el.title : el.email}
              />
            </td>
            <td>{isProduct(el) ? el.title : el.email}</td>
            <td>
              {isProduct(el) ? el.cat_prefix : `${el.firstName} ${el.lastName}`}
            </td>
            <td>{isProduct(el) ? `${el.price}$` : el.role}</td>
            {type === "product" && isProduct(el) && (
              <>
                <td>
                  {el.sizes &&
                    el.sizes.map((size: string) => (
                      <div
                        key={size}
                        style={{
                          fontSize: "18px",
                          textAlign: "center",
                          margin: "5px",
                        }}
                      >
                        {size}
                      </div>
                    ))}
                </td>
                <td title={`${el.desc}`}>{el.desc}</td>
              </>
            )}
            <td>
              {isProduct(el) ? (
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setId(el.id);
                  }}
                >
                  Delete
                </button>
              ) : (
                el.role !== "admin" && (
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setId(el.id);
                    }}
                  >
                    Delete
                  </button>
                )
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
      {isModalOpen && (
        <Modal
          message={`Are you sure you want to delete this ${type}?`}
          closeHandler={() => setIsModalOpen(false)}
          functionToDo={() => {
            type === "product"
              ? dispatch(deleteProduct(id))
              : dispatch(deleteUser(id));
          }}
        />
      )}
    </>
  );
}

export default React.memo(Tbody);
