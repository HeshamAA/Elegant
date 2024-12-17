import React from "react";
import useDashboardTable from "../../../../hooks/useDashboardTable";
import { TProducts } from "../../../../types/productsTypes";
import { TUser, TUsersResponse } from "../../../../types/authTypes";
import Modal from "../../../feedback/modal/Modal";
import deleteProduct from "../../../../store/products/thunk/deleteProduct";
import deleteUser from "../../../../store/users/thunk/deleteUser";
import { TDashboardTableHookData } from "../../../../types/dashboardTypes";

type TBodyProps = {
  type: "product" | "user";
  data: TDashboardTableHookData;
  filteredData: (TProducts | TUsersResponse | TUser)[];
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

  const isProduct = (
    el: TProducts | TUsersResponse | TUser
  ): el is TProducts => {
    return (el as TProducts).cat_prefix !== undefined;
  };
  const isUser = (el: TProducts | TUsersResponse | TUser): el is TUser => {
    return (el as TUser).email !== undefined;
  };

  return (
    <>
      <tbody>
        {filteredData.map((el) => (
          <tr key={isProduct(el) ? el.id : isUser(el) ? el.id : ""}>
            <td>
              <img
                src={isProduct(el) ? el.img : ""}
                alt={isProduct(el) ? el.title : isUser(el) ? el.email : ""}
              />
            </td>
            <td>{isProduct(el) ? el.title : isUser(el) && el.email}</td>
            <td>
              {isProduct(el)
                ? el.cat_prefix
                : isUser(el) && `${el.firstName} ${el.lastName}`}
            </td>
            <td>{isProduct(el) ? `${el.price}$` : isUser(el) && el.role}</td>
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
                isUser(el) &&
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
                    navigate(
                      `/dashboard/products/edit-products/${
                        isProduct(el) || isUser(el) ? el.id : ""
                      }`
                    )
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
