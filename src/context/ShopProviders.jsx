import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";

import PropTypes from "prop-types";
import toast from "react-hot-toast";
import api from "../services/config";

const ShopProviders = ({ children }) => {
  // ============ State ============
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ============ Effect ============
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get("/products");
        setProducts(response);
        toast.success("Products loaded successfully!");
      } catch (error) {
        toast.error("Failed to load Products:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // ============ Context Value ============
  const contextValue = { products, loading };

  // ============ Rendering ============
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

ShopProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopProviders;
