import { ShopContext } from "./ShopContext";

import PropTypes from "prop-types";

const ShopProviders = ({ children }) => {
  return <ShopContext.Provider value={{}}>{children}</ShopContext.Provider>;
};

ShopProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopProviders;
