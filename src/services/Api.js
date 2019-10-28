import axios from "../plugins/axios";

const access_token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${access_token}`
};

export default class Api {
  static postUsers = async data => {
    const response = await axios.post("auth/signup", data, {
      headers: headers
    });
    return response;
  };

  static postPackages = async data => {
    console.log(headers, "headers");
    const response = await axios.post("/packages", data, {
      headers: headers
    });
    return response;
  };

  static getUser = async data => {
    const response = await axios.post("auth/login", data);
    return response;
  };

  static fetchPackages = async () => {
    const response = await axios.get("packages", { headers: headers });
    return response;
  };

  static fetchSinglePackage = async package_id => {
    const response = await axios.get(`packages/${package_id}`, {
      headers: headers
    });
    return response;
  };
}
