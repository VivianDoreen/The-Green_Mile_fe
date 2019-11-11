import axios from "axios";
// const access_token = localStorage.getItem("token");

const axiosClient = axios.create({
  // baseURL: "https://the-green-mile.herokuapp.com/api/v1/"
  baseURL: "https://greenmileapi.herokuapp.com/api/v1/"
});
axiosClient.interceptors.request.use(request => {
  return {
    ...request,
    headers: {
      ...request.headers, "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }
})
export default axiosClient