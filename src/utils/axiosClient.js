import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://35d930ab60f6.ngrok-free.app/api",
   headers: {
    "ngrok-skip-browser-warning": "1",
  },
});

export default axiosClient;
