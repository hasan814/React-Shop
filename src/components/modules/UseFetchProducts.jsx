import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import api from "../../services/config";

export const useFetchProducts = () => {
  // ============ State =================
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ============ Effect =================
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

  // ============ Rendering =================
  return { products, loading };
};
