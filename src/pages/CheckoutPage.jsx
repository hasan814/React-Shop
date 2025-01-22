import { CartContext } from "../context/CartContext/CartContext";
import { useContext } from "react";
import { v4 } from "uuid";

import BasketCard from "../components/modules/BasketCard";

const Checkout = () => {
  // ============= Context ==============
  const { state, dispatch } = useContext(CartContext);

  // ============= Function ==============
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  // ============= Rendering ==============
  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <BasketCard key={v4()} data={item} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
