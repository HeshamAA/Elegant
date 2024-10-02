import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ filledStars = 3, totalStars = 5, color = "#f0ad4e", size = 15 }) => {
  console.log("star rating");
  
  return (
    <div>
      {Array.from({ length: totalStars }).map((_, index) => {
        return index < filledStars ? (
          <FaStar key={index} color={color} size={size} />
        ) : (
          <FaRegStar key={index} color={color} size={size} />
        );
      })}
    </div>
  );
};

export default React.memo(StarRating)
