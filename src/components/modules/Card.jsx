import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../../utils/shortenText";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Card = ({ id, title, image, price }) => {
  return (
    <div className="w-72 mt-3 p-5 flex flex-col items-start bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 rounded-md mb-5 mx-auto"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {shortenText(title)}
      </h3>
      <p className="text-gray-600 font-medium mb-4">$ {price}</p>
      <div className="w-full flex justify-between items-center">
        <Link
          to={`/products/${id}`}
          className="text-blue-500 hover:text-blue-600 flex items-center transition duration-200"
        >
          <TbListDetails className="mr-2" size={20} />
        </Link>
        <button className="text-white bg-green-500 rounded-lg p-1 hover:text-green-600 hover:bg-transparent flex items-center justify-center transition duration-200">
          <TbShoppingBagCheck className="" size={20} />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
