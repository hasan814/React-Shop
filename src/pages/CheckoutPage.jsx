import { CartContext } from "../context/CartContext/CartContext";
import { useContext } from "react";
import { v4 } from "uuid";

import BasketCard from "../components/modules/BasketCard";
import BasketSidebar from "../components/modules/BasketSidebar";

const Checkout = () => {
  // ============= Context ==============
  const { state, dispatch } = useContext(CartContext);

  // ============= Function ==============
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  // Empty state handling
  if (!state.itemsCounter) {
    return (
      <div className="container mx-auto text-center py-16">
        <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">
          Add some items to your cart to get started.
        </p>
      </div>
    );
  }

  // ============= Rendering ==============
  return (
    <div className="flex justify-between py-8 gap-5">
      {/* Sidebar */}
      <BasketSidebar data={state} clickHandler={clickHandler} />

      {/* Basket Items */}
      <div className="flex-grow">
        {state.selectedItems.map((item) => (
          <BasketCard key={v4()} data={item} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
