import { useEffect, useState, useCallback } from "react";
import axiosClient from "../utils/axiosClient";

export const useProducts = () => {
  const [products, setProducts] = useState([]); // array of products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch all products (initial load)
  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosClient.get("/products?ngrok_skip_browser_warning=1");
      // API قد يرجّع { data: [...], meta, ... }
      setProducts(res.data?.data || []);
    } catch (err) {
      setError(err.message || "Failed to fetch products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // search function - يقوم بعمل طلب للـ search endpoint ويستبدل المنتجات بالنتائج
  const searchProducts = useCallback(async (query) => {
    // لو الاستعلام فاضي، نعيد كل المنتجات
    if (!query || query.trim() === "") {
      await fetchAll();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await axiosClient.get(`/products/search?search=${encodeURIComponent(query)}&ngrok_skip_browser_warning=1`);
      setProducts(res.data?.data || []);
    } catch (err) {
      setError(err.message || "Search failed");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [fetchAll]);

  // initial load
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return {
    products,
    loading,
    error,
    searchProducts,
    refresh: fetchAll,
  };
};

export default useProducts;
