import axiosClient from "./axiosClient";

const productApi = {
  getAll: () => axiosClient.get("/products"),
  getFeaturedProducts: ()=> axiosClient.get("/products/featured"),
  getBySlug: (id) => axiosClient.get(`/products/${slug}`),
};

export default productApi;
