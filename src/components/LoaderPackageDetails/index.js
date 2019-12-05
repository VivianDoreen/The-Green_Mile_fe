//react
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//third party libraries
import { Icon, Container, Divider, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

//components
import Sort from "../Sort";
import { fetchPackagesRequest } from "../../containers/Packages/store/actions";
import * as selectors from "../../containers/Packages/store/selectors";

const LoaderPackageDetails = ({ packageList, packageIdices }) => {
  const packageIdexes = packageIdices;
  const [packageStates, setpackageState] = useState([]);

  useEffect(() => {
    let packageState = packageList;
    setpackageState(
      packageState.map(d => {
        return {
          select: false,
          id: d.package_id,
          package_name: d.package_name,
          supplier_name: d.supplier_name,
          recipient: d.recipient_name,
          package_type: d.package_type,
          delivery_status: d.delivery_status,
          recipient_name: d.recipient_name,
          loading_type_name: d.loading_type_name,
          hub_address: d.hub_address
        };
      })
    );
  }, []);
  return (
    <React.Fragment>
      <Container>
        <table
          className="ui celled table"
          style={{
            width: "98%",
            margin: "0px auto"
          }}
        >
          <thead>
            <tr>
              <th>No.</th>
              <th>
                <input
                  type="checkbox"
                  checked={packageStates.select}
                  onChange={event => {
                    let checked = event.target.checked;
                    setpackageState(
                      packageStates.map(data => {
                        data.select = checked;
                        const getSelectedData =
                          data.select === true ? data : "";
                        localStorage.setItem(
                          "selectedItems",
                          JSON.stringify(data)
                        );
                        // console.log(
                        //   JSON.parse(localStorage.getItem("selectedItems")),
                        //   "LocalStorage"
                        // );
                        return data;
                      })
                    );
                  }}
                />
              </th>
              <th>Package Name</th>
              <th>Package Type</th>
              <th>Loading Type</th>
              <th>Hub Address</th>
              <th>Recipient Address</th>
              <th>Recipient Name</th>
              <th>Supplier Name</th>
              <th>Delivery Status</th>
            </tr>
          </thead>
          <tbody>
            {packageStates.map(packageDetails => (
              <tr key={packageDetails.id}>
                <td data-label="package_name">
                  {packageStates.indexOf(packageDetails) + 1}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={packageDetails.select}
                    onChange={event => {
                      let checked = event.target.checked;

                      setpackageState(
                        packageStates.map(data => {
                          if (packageDetails.id == data.id) {
                            data.select = checked;
                          }
                          return data;
                        })
                      );
                    }}
                  />
                </td>
                <td data-label="package_name">{packageDetails.package_name}</td>
                <td data-label="package_type">{packageDetails.package_type}</td>
                <td data-label="loading_type">
                  {packageDetails.loading_type_name}
                </td>
                <td data-label="hub_address">{packageDetails.hub_address}</td>
                <td data-label="recipient_address">
                  {packageDetails.hub_address}
                </td>
                <td data-label="reciepient_name">
                  {packageDetails.recipient_name}
                </td>
                <td data-label="supplier_name">
                  {packageDetails.supplier_name}
                </td>
                <td data-label="delivery_status">
                  {packageDetails.delivery_status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </React.Fragment>
  );
};

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
)(LoaderPackageDetails);

// export default LoaderPackageDetails;
