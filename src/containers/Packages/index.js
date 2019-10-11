//react libraries
import React, { Component } from "react";

//third party libraries
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

//components
import * as selectors from "./store/selectors";
import { fetchPackagesRequest } from "./store/actions";
import PackageDetails from "../../components/PackageDetails";
import Nav from "../../components/Nav";

export class Packages extends Component {
  componentDidMount() {
    this.props.fetchPackagesRequest;
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must first login");
      this.props.history.push("/");
    }
    this.props.fetchPackagesRequest();
  }
  render() {
    const { packages } = this.props;
    return (
      <React.Fragment>
        <Container>
          <Nav />
          <Link to="/addPackages">Add Packages</Link>
          {packages.length !== 0 ? (
            <PackageDetails packageList={packages} />
          ) : (
            ""
          )}
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    packages: selectors.fetchPackages(state),
    error: selectors.fetchPackagesError(state)
  };
};
const mapDispatchToProps = {
  fetchPackagesRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Packages);
