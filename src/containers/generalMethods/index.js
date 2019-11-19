//react
import React from "react";

//third party libraries
import { connect } from "react-redux";

//redux
import { addPackageTypeRequest } from "../Packages/store/actions";

export const handleChange = e => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
};

export const handleSubmit = box => {
  e.preventDefault();
  const { package_type_name } = this.state;
  const data = {
    package_type_name
  };
  this.props.addPackageTypeRequest(data);
  this.setState({ package_type_name: "" });
};

const mapStateToProps = state => {
  return {
    packageTypes: selectors.fetchPackageType(state)
  };
};

const mapDispatchToProps = {
  addPackageTypeRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(handleSubmit);
