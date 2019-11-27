//react
import React from "react";

//third party libraries
import { connect } from "react-redux";

//selectors
import * as selectors from "../../containers/Packages/store/selectors";

//actions
import { addPackageTypeRequest } from "../../containers/Packages/store/actions";

//components
import Button from "../../components/Button";

const jwt = require("jsonwebtoken");

class SideMenu extends React.Component {
  state = {
    package_type_name: ""
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
    const { message } = this.props.packageTypes;
    const { token } = this.props.auth;
    const decoded = jwt.decode(token);
    return (
      <React.Fragment>
        <div id="grid-container-side-menu">
          {decoded.identity.role[0] === "Admin" ? (
            <div
              style={{
                width: "160px",
                marginTop: "2px",
                marginLeft: "-7px"
              }}
            >
              <Button
                handleSubmit={this.handleSubmit}
                message={message}
                handleChange={this.handleChange}
                placeHolderName="Add Package Name"
                packageTypeName="package_type_name"
                legend="Add PAckage type"
                buttonName="Add Package Name"
              />
              <Button placeHolderName="Users" buttonName="Users" />
              <Button placeHolderName="Recipients" buttonName="Recipients" />
              <Button placeHolderName="Loaders" buttonName="Loaders" />
              <Button placeHolderName="Supliers" buttonName="Supliers" />
            </div>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.loginReducer,
    packageTypes: selectors.fetchPackageType(state)
  };
};
const mapDispatchToProps = {
  addPackageTypeRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
