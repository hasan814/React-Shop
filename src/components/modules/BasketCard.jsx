import { MdDeleteOutline } from "react-icons/md";
import { shortenText } from "../../utils/shortenText";
import PropTypes from "prop-types";

const BasketCard = ({ data, clickHandler }) => {
  // ============== Destructures ================
  const { image, title, quantity } = data;

  // ============== Rendering ================
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
      {/* Product Image */}
      <img src={image} alt={title} className="w-24" />

      {/* Product Details */}
      <div className="flex flex-col flex-grow ml-4">
        <p className="text-gray-800 font-medium text-sm mb-1">
          {shortenText(title)}
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Quantity:</span>
          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded">
            {quantity}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        {quantity === 1 && (
          <button
            onClick={() => clickHandler("REMOVE_ITEM", data)}
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            title="Remove Item"
          >
            <MdDeleteOutline size={16} />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => clickHandler("DECREASE", data)}
            className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
            title="Decrease Quantity"
          >
            -
          </button>
        )}
        <button
          onClick={() => clickHandler("INCREASE", data)}
          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          title="Increase Quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

BasketCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default BasketCard;
