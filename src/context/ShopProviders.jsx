import { useFetchProducts } from "../components/modules/UseFetchProducts";
import { useSearchParams } from "react-router-dom";
import { useQueryEffect } from "../components/modules/UseQueryEffect";
import { ShopContext } from "./ShopContext";

import PropTypes from "prop-types";

const ShopProviders = ({ children }) => {
  // ============ Params ============
  const [searchParams, setSearchParams] = useSearchParams();

  // ============ Fetch Products ============
  const { products, loading } = useFetchProducts();

  // ============ Query Effect ============
  const { displayed, search, setSearch, updateCategory, updateSearch } =
    useQueryEffect(products, searchParams, setSearchParams);
  // ============ Context Value ============
  const contextValue = {
    products,
    loading,
    search,
    setSearch,
    categoryHandler: (event) => {
      const category = event.target.innerText.toLowerCase();
      if (event.target.tagName === "LI") updateCategory(category);
    },
    searchHandler: () => updateSearch(search),
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
