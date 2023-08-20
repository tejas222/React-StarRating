import { useState } from "react";

const Star = ({ initialRating, totalStars }) => {
  const [rating, setRating] = useState(initialRating);

  const onStarClick = (newRating) => {
    setRating(newRating);
  };
  return (
    <>
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          className={`${index < rating ? "filled" : ""}`}
          onClick={() => onStarClick(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </>
  );
};

export default Star;
