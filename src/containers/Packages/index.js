//react libraries
import React, { Component } from "react";

//third party libraries
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Container } from "semantic-ui-react";

//css
import "../../styles/components/packages.scss";

//components
import * as selectors from "./store/selectors";
import { fetchPackagesRequest } from "./store/actions";
import PackageDetails from "../../components/PackageDetails";
import Nav from "../../components/Nav";
import Logout from "../../components/Logout";
import Loader from "../../components/Loader";
import CustomPagination from "../../components/CustomPagination";

export class Packages extends Component {
  state = {
    perPage: 10,
    activePage: 1
  };
  componentDidMount() {
    this.props.fetchPackagesRequest;
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must first login");
      this.props.history.push("/");
    }
    this.props.fetchPackagesRequest();
  }
  onPaginationChange = activePage => {
    this.setState({ activePage }, () => this.fetchPackageItems());
  };
  getNextItemIds = () => {
    const { packages } = this.props;
    const { perPage, activePage } = this.state;
    const startIndex = (activePage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const ids =
      packages.length !== 0
        ? packages.map(packageId => packageId.package_id)
        : [];
    return ids.slice(startIndex, endIndex);
  };

  fetchPackageItems = () => {
    const packageIds = this.getNextItemIds();
    if (packageIds.length) {
      this.props.action(packageIds);
    }
  };

  render() {
    const { packages, isLoading } = this.props;
    const ids = packages.length !== 0 ? packages.map(xx => xx.package_id) : [];
    console.log(ids.slice(0, 10), "Packageeeeeeeees");
    const { activePage, perPage } = this.state;
    return (
      <div style={{ marginBottom: "20px" }}>
        <Container>
          <Logout />
          <Nav />
          {!isLoading ? (
            packages.length !== 0 ? (
              <div>
                <PackageDetails packageList={packages} />
                <CustomPagination
                  activePage={activePage}
                  totalItems={packages.length}
                  perPage={perPage}
                  onPaginationChange={this.onPaginationChange}
                />
              </div>
            ) : (
              ""
            )
          ) : (
            <Loader />
          )}
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    packages: selectors.fetchPackages(state),
    error: selectors.fetchPackagesError(state),
    isLoading: selectors.getIsLoading(state)
  };
};
const mapDispatchToProps = {
  fetchPackagesRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Packages);
