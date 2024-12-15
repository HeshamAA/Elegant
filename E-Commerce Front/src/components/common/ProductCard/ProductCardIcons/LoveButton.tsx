import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "../productCard.module.css";
import useProductCard from "../../../../hooks/useProductCard";

const { loveButton } = styles;

const LoveButton = ({ id }: { id: string }) => {
  const { isInWatchlist, addToWatchListHandler } = useProductCard(id);

  // useEffect(() => {
  //   const isInWatchlist = watchlistIds.includes(id);

  //   setLoveButtonState(isInWatchlist);
  // }, [watchlistIds, id,loveButtonState]);

  return (
    <div className={loveButton}>
      {isInWatchlist ? (
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

export default React.memo(LoveButton);
