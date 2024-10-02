import { HiOutlineDotsHorizontal } from "react-icons/hi";
import styles from "../productCard.module.css";
import { useNavigate } from "react-router-dom";
import React from "react";

const { detailsButton } = styles;

function DetailsButton({ id }: { id: string }) {
  console.log("details button");
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/products/product/${id}`);
      }}
      className={detailsButton}
    >
      <HiOutlineDotsHorizontal size={35} />
    </div>
  );
}

export default React.memo(DetailsButton);
