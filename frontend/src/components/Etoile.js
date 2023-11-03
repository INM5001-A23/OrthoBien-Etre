import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Etoile = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              style={{ display: "none" }}
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              style={{ cursor: "pointer" }}
              size={30}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>

    //   <span key={index}>
    //     {stars >= index + 1 ? (
    //       <FaStar className="icon" />
    //     ) : stars >= numbers ? (
    //       <FaStarHalfAlt className="icon" />
    //     ) : (
    //       <AiOutlineStar className="icon" />
    //     )}
    //   </span>
  );
};

//   return (
//     <Wrapper>
//       <div className=".icon-style">
//         {ratingStar}
//         <p>({reviews} customer reviews)</p>
//       </div>
//     </Wrapper>
//   );
// };

export default Etoile;
