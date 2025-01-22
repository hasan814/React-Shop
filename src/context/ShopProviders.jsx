import { useEffect, useState } from "react";
import { CreateQueryObject } from "../utils/CreateNewQuery";
import { CategoryProducts } from "../utils/CategoryProducts";
import { useSearchParams } from "react-router-dom";
import { searchProducts } from "../utils/SearchProducts";
import { ShopContext } from "./ShopContext";

import PropTypes from "prop-types";
import toast from "react-hot-toast";
import api from "../services/config";

const ShopProviders = ({ children }) => {
  // ============ State ============
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  // ============ Params ============
  const [searchParams, setSearchParams] = useSearchParams();

  // ============ Fetch Effect ============
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

  // ============== Display Effect ============
  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  // ============== Query Effect ============
  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = CategoryProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query, products, setSearchParams]);

  // ============== Hanadler ============
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => CreateQueryObject(query, { category }));
  };

  // =============== Search Function =============
  const searchHandler = () => {
    setQuery((query) => CreateQueryObject(query, { search }));
  };

  // ============ Context Value ============
  const contextValue = {
    products,
    loading,
    search,
    setSearch,
    categoryHandler,
    searchHandler,
    displayed,
  };

  // ============ Rendering ============
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

ShopProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopProviders;
