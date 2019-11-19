//react
import React from "react";

//third party libraries
import { toast } from "react-toastify";
import { connect } from "react-redux";
import Popup from "reactjs-popup";

//scss
import "../../styles/components/generalLayout.scss";

//selectors
import * as selectors from "../Packages/store/selectors";

//action
import {
  fetchPackagesRequest,
  addPackageTypeRequest
} from "../Packages/store/actions";

//components
import Nav from "../../components/Nav";
import Logout from "../../components/Logout";
import PackageTypeForm from "../../components/PackageTypeForm";
import Button from "../../components/Button";
import SideMenu from "../../components/SideMenu";
import handleSubmit, { handleChange } from "../generalMethods";

class AdminPage extends React.Component {
  state = {
    showPopup: false,
    disabled: true
  };

  componentWillMount() {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You must first login");
      this.props.history.push("/");
    }
    this.props.fetchPackagesRequest();
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { package_type_name } = this.state;
    const data = {
      package_type_name
    };
    this.props.addPackageTypeRequest(data);
    this.setState({ package_type_name: "" });
  };

  render() {
    const { disabled } = this.state;

    return (
      <div id="grid-container">
        <div className="childOne">
          <Logout />
          <Nav />
        </div>
        <div className="childTwo">
          <div className="sideMenu">
            <SideMenu
              handleSubmit={e => handleSubmit(e)}
              message={this.props.packageTypes.message}
              handleChange={this.handleChange}
              placeHolderName={this.placeHolderName}
              packageTypeName="package_type_name"
              packageTypeButton="Add Package Type"
              legend="Add Package Name"
            />
            <SideMenu
              packageTypeNamo8ue="loading_type_name"
              packageTypeButton="Add Loading Type"
              legend="Add Loading Name"
            />
          </div>
        </div>
        <div className="childThree">
          <div>
            <p
              style={{
                marginTop: "5px",
                textTransform: "uppercase",
                textAlign: "center",
                color: "#12A405",
                fontSize: "27px",
                textDecoration: "underline"
              }}
            >
              Packages
            </p>
            <p>
              <b style={{ fontWeight: "bold" }}>Delivered</b> - 10
              <br />
              <b style={{ fontWeight: "bold" }}>Pending</b> - 20
              <br />
              <b style={{ fontWeight: "bold" }}>Total</b> -{" "}
              {this.props.packages.length}
            </p>
          </div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    packageTypes: selectors.fetchPackageType(state),
    packages: selectors.fetchPackages(state)
  };
};

const mapDispatchToProps = {
  fetchPackagesRequest,
  addPackageTypeRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
