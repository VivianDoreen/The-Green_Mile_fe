// //react
// import React from "react";

// //third party libraries
// import { connect } from "react-redux";

// //actions
// import { fetchTokenRequest } from "../../containers/UserLogin/store/actions";

// //components
// import ChoiceTable from "../../components/ChoiceTable";
// import PackageDetails from "../../components/PackageDetails";
// import * as selectors from "./store/selectors";
// import { fetchPackagesRequest } from "../../containers/Packages/store/actions";

// class Loader extends React.Component {
//   componentDidMount() {
//     this.props.fetchPackagesRequest();
//     this.props.fetchTokenRequest();
//   }

//   render() {
//     const { packages, isLoading } = this.props;
//     return (
//       <div id="main-section">
//         <PackageDetails />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     packages: selectors.fetchPackages(state),
//     error: selectors.fetchPackagesError(state),
//     isLoading: selectors.getIsLoading(state)
//   };
// };
// const mapDispatchToProps = {
//   fetchTokenRequest,
//   fetchPackagesRequest
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Loader);

//react libraries
import React, { Component } from "react";

//third party libraries
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Divider, Header, Icon } from "semantic-ui-react";
import orderBy from "lodash/orderBy";

//css
import "../../styles/components/packages.scss";
import "../../styles/components/generalLayout.scss";

//components
import * as selectors from "../Packages/store/selectors";
import { fetchPackagesRequest } from "../Packages/store/actions";
import PackageDetails from "../../components/PackageDetails";
import Loader from "../../components/Loader";
import CustomPagination from "../../components/CustomPagination";
import Sort from "../../components/Sort";
import Filter from "../../components/Filter/Filters";
import DropdownSearchSelection from "../../components/DropdownSearchSelection";

import { fetchTokenRequest } from "../../containers/UserLogin/store/actions";

export class Loaders extends Component {
  state = {
    perPage: 10,
    activePage: 1,
    packageName: "package_name",
    sort: "asc",
    value: 0
  };
  componentDidMount() {
    this.props.fetchPackagesRequest();
    this.props.fetchTokenRequest();
  }
  onPaginationChange = activePage => {
    this.setState({ activePage }, () => this.fetchPackageItems());
  };
  fetchPackageItems = () => {
    const { packages } = this.props;
    const { perPage, activePage } = this.state;
    const startIndex = (activePage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const packageItems = packages.length !== 0 ? packages : [];

    return packageItems.slice(startIndex, endIndex);
  };

  onFilterChange = (e, { value }) => {
    this.setState({ packageName: value });
  };

  onSortChange = (e, { value }) => {
    this.setState({ sort: value });
  };

  onSelectChange = (e, { value }) => {
    this.setState({ value });
    this.props.history.push(`/viewSinglePackage/${value}`);
  };
  render() {
    const { packages, isLoading } = this.props;
    const ids = packages.length !== 0 ? packages : [];
    const { activePage, perPage, packageName, sort, value } = this.state;
    const slicedPackage = this.fetchPackageItems();
    const orderedPackages = orderBy(slicedPackage, [packageName], [sort]);

    const packageOptions = packages.map(packageItem => {
      return {
        key: packageItem.package_id,
        text: packageItem.package_name,
        value: packageItem.package_id
      };
    });

    return (
      <div id="main-section">
        <div
          style={{
            width: "20%",
            float: "right"
          }}
        >
          <DropdownSearchSelection
            packageOptions={packageOptions}
            onSelectChange={this.onSelectChange}
            packageId={value}
          />
        </div>
        <div style={{ marginTop: "0px" }}>
          <Divider horizontal>
            <Header as="h4" style={{ color: "green" }}>
              <Icon name="info circle" />
              Package List
            </Header>
          </Divider>
        </div>

        {!isLoading ? (
          packages.length !== 0 ? (
            <div>
              <div
                style={{
                  float: "right",
                  margin: "10px 10px 20px 0px"
                }}
              >
                <Filter onFilterChange={this.onFilterChange} />
                <Sort onSortChange={this.onSortChange} />
              </div>
              <PackageDetails
                packageIdices={packages}
                packageList={orderedPackages}
              />
              <p></p>
              <p style={{ margin: "20px 20px" }}>
                <CustomPagination
                  activePage={activePage}
                  totalItems={packages.length}
                  perPage={perPage}
                  onPaginationChange={this.onPaginationChange}
                />
              </p>
            </div>
          ) : (
            ""
          )
        ) : (
          <div
            style={{
              width: "98%",
              margin: "0px auto"
            }}
          >
            <Loader />
          </div>
        )}
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
  fetchPackagesRequest,
  fetchTokenRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(Loaders);
