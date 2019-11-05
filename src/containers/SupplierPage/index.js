//react libraries
import React from "react";

//third party libraries
import { toast } from "react-toastify";

//components
import NavSupplier from "../../components/NavSupplier";
import Logout from "../../components/Logout";

export default class SupplierPage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must first login");
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <React.Fragment>
        <Logout />
        <NavSupplier />
      </React.Fragment>
    );
  }
}
