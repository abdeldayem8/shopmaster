import { useEffect, useState } from "react";
import productApi from "../utils/productApi";

export const useFeaturedProducts = () => {
  const [Featuredproducts, setFeaturedproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await productApi.getFeaturedProducts();
        setFeaturedproducts(response.data.data) || [];
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return { Featuredproducts, loading, error };
};
