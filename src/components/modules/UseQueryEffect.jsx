import { useEffect, useState } from "react";
import { CreateQueryObject } from "../../utils/CreateNewQuery";
import { CategoryProducts } from "../../utils/CategoryProducts";
import { searchProducts } from "../../utils/SearchProducts";

export const useQueryEffect = (products, searchParams, setSearchParams) => {
  // ============== State =============
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");

  // ============== Query Effect =============
  useEffect(() => {
    setDisplayed(products);
    const initialQuery = Object.fromEntries([...searchParams.entries()]);
    setQuery(initialQuery);
  }, [products, searchParams]);

  // ============== Display Effect =============
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let filteredProducts = searchProducts(products, query.search);
    filteredProducts = CategoryProducts(filteredProducts, query.category);
    setDisplayed(filteredProducts);
  }, [query, products, setSearchParams]);

  // ============== Update Function =============
  const updateCategory = (category) => {
    setQuery((prev) => CreateQueryObject(prev, { category }));
  };

  const updateSearch = (searchTerm) => {
    setQuery((prev) => CreateQueryObject(prev, { search: searchTerm }));
  };

  // ============== Rendering =============
  return { displayed, query, search, setSearch, updateCategory, updateSearch };
};
