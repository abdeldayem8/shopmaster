import { useState } from "react";
import axiosClient from "../utils/axiosClient";

export const useSearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchProducts = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.get(`/products/search?name=${query}`);
      setProducts(response.data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, searchProducts };
};
