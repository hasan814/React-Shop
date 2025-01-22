import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { ProductQuantity } from "../../utils/ProductQuantity";
import { shortenText } from "../../utils/shortenText";
import { CartContext } from "../../context/CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Card = ({ data }) => {
  // ============= Destructures =============
  const { id, title, image, price } = data;

  // ============= Cart Context =============
  const { state, dispatch } = useContext(CartContext);

  // ============= Handle Function =============
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  // ============= Product Quantity =============
  const quantity = ProductQuantity(state, id);

  // ============= Rendering =============
  return (
    <div className="w-72 mt-3 p-5 flex flex-col bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 rounded-md mb-5 mx-auto"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {shortenText(title)}
      </h3>
      <p className="text-gray-600 font-medium mb-4">$ {price}</p>
      <div className="flex items-center mt-4 justify-between">
        <Link
          to={`/products/${id}`}
          className="text-blue-500 hover:text-blue-600 flex items-center transition duration-200"
        >
          <TbListDetails className="mr-2" size={20} />
        </Link>
        <div className="flex space-x-1">
          {/* Remove Button */}
          {quantity === 1 && (
            <button
              onClick={() => clickHandler("REMOVE_ITEM")}
              className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
              title="Remove Item"
            >
              <MdDeleteOutline size={20} />
            </button>
          )}

          {/* Decrease Button */}
          {quantity > 1 && (
            <button
              onClick={() => clickHandler("DECREASE")}
              className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200"
              title="Decrease Quantity"
            >
              -
            </button>
          )}

          {/* Quantity Display */}
          {!!quantity && (
            <span className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg">
              {quantity}
            </span>
          )}

          {/* Add or Increase Button */}
          {quantity === 0 ? (
            <button
              onClick={() => clickHandler("ADD_ITEM")}
              className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-200"
              title="Add to Cart"
            >
              <TbShoppingBagCheck size={20} />
            </button>
          ) : (
            <button
              onClick={() => clickHandler("INCREASE")}
              className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
              title="Increase Quantity"
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
