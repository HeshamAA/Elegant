import { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "../productCard.module.css";
import useProductCard from "../../../../hooks/useProductCard";

const { loveButton } = styles;

const LoveButton = ({ id }: { id: string }) => {
  const {
    watchListTotalQuantity,
    setLoveButtonState,
    loveButtonState,
    watchlistIds,
    addToWatchListHandler,
  } = useProductCard(id);

  useEffect(() => {
    const isInWatchlist = watchlistIds.includes(id);
    setLoveButtonState(isInWatchlist);
  }, [watchlistIds, id]);

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
