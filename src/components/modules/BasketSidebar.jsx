import { BsPatchCheck } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";

import PropTypes from "prop-types";

const BasketSidebar = ({ data, clickHandler }) => {
  // ============= Destructures ============
  const { total, itemsCounter, checkout } = data;

  // ============= Rendering ============
  return (
    <div className="w-1/3 bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <div className="mb-4 flex items-center text-gray-700">
        <TbChecklist className="mr-2 text-xl text-blue-500" />
        <p className="font-medium">Total:</p>
        <span className="ml-auto font-bold text-lg text-green-500">
          ${total}
        </span>
      </div>
      <div className="mb-4 flex items-center text-gray-700">
        <FaHashtag className="mr-2 text-xl text-blue-500" />
        <p className="font-medium">Items:</p>
        <span className="ml-auto font-bold text-lg">{itemsCounter}</span>
      </div>
      <div className="mb-6 flex items-center text-gray-700">
        <BsPatchCheck className="mr-2 text-xl text-blue-500" />
        <p className="font-medium">Status:</p>
        <span className="ml-auto text-sm font-medium">
          {checkout ? "Order Completed" : "Pending..."}
        </span>
      </div>
      <button
        onClick={() => clickHandler("CHECKOUT", data)}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Checkout
      </button>
    </div>
  );
};

BasketSidebar.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
    itemsCounter: PropTypes.number.isRequired,
    checkout: PropTypes.bool.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default BasketSidebar;
