import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { array } from "prop-types";

const Stars = ({stars}) => {
   const ratingStars = Array.from({length: 5}, (elem, index)=>{

    let number = index + 0.5;

    return(
        <span key={index}>
             {
                stars >= index + 1 
                ? <FaStar className="text-[#FF912C]" /> 
                : stars >= number 
                ? <FaStarHalfAlt className="text-[#FF912C]"/> 
                : <AiOutlineStar className="text-[#FF912C]"/>
             }
        </span>
    )
    })

    return (
        <main>
            <div className="flex text-2xl">
                {ratingStars}
            </div>
        </main>
    );
};

export default Stars;