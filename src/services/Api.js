import axios from "../plugins/axios";

const access_token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${access_token}`
};

export default class Api {
  static setHeaders = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`
    };
    return headers;
  };

  static postUsers = async data => {
    const response = await axios.post("auth/signup", data);
    return response;
  };

  static postPackages = async data => {
    const response = await axios.post("/packages", data);
    return response;
  };

  static getUser = async data => {
    const response = await axios.post("auth/login", data);
    return response;
  };

  static fetchPackages = async () => {
    const response = await axios.get("packages");
    return response;
  };

  static fetchSupplierPackages = async () => {
    const response = await axios.get("packages/supplier_packages");
    return response;
  };

  static fetchRecipientPackages = async () => {
    const response = await axios.get("packages/recipient_packages");
    return response;
  };

  static fetchSinglePackage = async package_id => {
    const response = await axios.get(`packages/${package_id}`, {
      headers: headers
    });
    return response;
  };

  static addPackageType = async packageType => {
    const response = await axios.post("packages/packagetype", packageType);
    return response;
  };
}
