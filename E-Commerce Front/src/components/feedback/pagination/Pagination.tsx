import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./pagination.module.css";
import { TPaginationProps } from "../../../types/paginationTypes";

const { buttonsContainer } = styles;


function Pagination({
  itemsPerPage,
  items,
  currentPage,
  setCurrentPage,
}: TPaginationProps) {
  const pages = Math.ceil(items.length / itemsPerPage);
  const totalPages = Array.from({ length: pages }, (_, index) => index + 1);
  return (
    <div className={`${buttonsContainer}`}>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>
      {totalPages.map((page) => (
        <button
          style={{ opacity: currentPage === page ? 0.5 : 1 }}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pages}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
