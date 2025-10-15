import axiosClient from "./axiosClient";

const cartApi = {
  getCart: () => axiosClient.get("/cart"),
  addToCart: (id, quantity = 1) => axiosClient.post("/cart/add", { id, quantity }),
  updateQuantity: (id, quantity) => axiosClient.post("/cart/update", { id, quantity }),
};

export default cartApi;
