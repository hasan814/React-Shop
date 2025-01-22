import { initialState, reducer } from "../../utils/Reducer";
import { CartContext } from "./CartContext";
import { useReducer } from "react";

import PropTypes from "prop-types";

const CartProvider = ({ children }) => {
  // ============ Reducer ============
  const [state, dispatch] = useReducer(reducer, initialState);

  // ============ Rendering ============
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
