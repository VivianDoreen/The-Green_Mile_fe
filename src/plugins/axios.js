import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1/"
});

axiosClient.interceptors.request.use(request => {
  return {
    ...request,
    headers: {
      ...request.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
});
export default axiosClient;
