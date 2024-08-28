import { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "../productCard.module.css";
import useProductCard from "../../../../hooks/useProductCard";

const { loveButton } = styles;

const LoveButton = ({ id }: { id: number }) => {
  const {
    watchListTotalQuantity,
    setLoveButtonState,
    loveButtonState,
    watchListProductsIds,
    addToWatchListHandler,
  } = useProductCard(id);

  useEffect(() => {
    const isInWatchlist = watchListProductsIds.includes(id);
    setLoveButtonState(isInWatchlist);
  }, [watchListTotalQuantity, id]);

  return (
    <div className={loveButton}>
      {loveButtonState ? (
        <FaHeart
          onClick={addToWatchListHandler}
          style={{ color: "var(--primary-color)" }}
          size={35}
        />
      ) : (
        <FaRegHeart onClick={addToWatchListHandler} size={35} />
      )}
    </div>
  );
};

export default LoveButton;
export { LoveButton };
