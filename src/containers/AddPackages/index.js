//react libraries
import React from "react";

//third party libraries
import { toast } from "react-toastify";
import { connect } from "react-redux";

//components
import PackageForm from "../../components/PackageForm";
import NavSupplier from "../../components/NavSupplier";
import Logout from "../../components/Logout";

//action
import { postPackageRequest } from "./store/actions";

//selector
import * as selectors from "./store/selectors";

export class AddPackages extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must first login");
      this.props.history.push("/");
    }
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDate = e => {
    e.target.type = "date";
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      package_name,
      package_type,
      delivery_description,
      loading_type_name,
      hub_address,
      recipient_name,
      recipient_address,
      delivery_date,
      recipient_email,
      delivery_status
    } = this.state;

    const data = {
      package_name,
      package_type,
      delivery_description,
      loading_type_name,
      hub_address,
      recipient_name,
      recipient_address,
      delivery_date,
      recipient_email,
      delivery_status
    };
    console.log(data, "Datatatatatata");

    this.props.postPackageRequest(data);
  };
  render() {
    const { addedPackage } = this.props;
    return (
      <div id="main-section">
        <PackageForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleDate={this.handleDate}
          packageResult={addedPackage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedPackage: selectors.getPackage(state),
    packageError: selectors.getError(state)
  };
};

const mapDispatchToProps = {
  postPackageRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPackages);
