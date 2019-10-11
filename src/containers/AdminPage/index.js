import React from "react";
import Nav from "../../components/Nav";
import Logout from "../../components/Logout";
import { toast } from "react-toastify";

class AdminPage extends React.Component {
  componentWillMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must first login");
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <Logout />
        <Nav />
      </div>
    );
  }
}

export default AdminPage;
