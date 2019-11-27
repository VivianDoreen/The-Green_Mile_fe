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

const PackageDetails = ({ packageList, packageIdices, handleChange }) => {
  const packageIdexes = packageIdices;
  const [packageStates, setpackageState] = useState([]);
  console.log(packageStates, "packageListList12345");

  useEffect(() => {
    let packageState = packageList;
    setpackageState(
      packageState.map(d => {
        return {
          select: false,
          id: d.package_id,
          packageName: d.package_name,
          supplier: d.supplier_name,
          recipient: d.recipient_name
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
                        return data;
                      })
                    );
                  }}
                />
              </th>
              <th>Package name</th>
              <th>Package type</th>
              <th>Loading type</th>
              <th>Hub address</th>
              <th>Recipient Address</th>
              <th>Recipient name</th>
              <th>Supplier name</th>
              <th>Delivery status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {console.log(packageStates, "packageStates")}
            {packageStates.map(packageDetails => (
              <tr key={packageDetails.package_id}>
                <td data-label="package_name">
                  {packageIdexes.indexOf(packageDetails) + 1}
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
                          console.log(data, "2ndData");
                          return data;
                        })
                      );
                    }}
                  />
                </td>
                <td data-label="package_name">{packageDetails.packageName}</td>
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
                <td data-label="view">
                  <Link to={`/packages/${packageDetails.package_id}`}>
                    <Icon name="eye" style={{ color: "green" }} />
                  </Link>
                  <Link to="">
                    <Icon name="edit" style={{ color: "green" }} />
                  </Link>
                  <Link to="">
                    <Icon name="add" style={{ color: "green" }} />
                  </Link>
                  <Link to="">
                    <Icon name="delete" style={{ color: "green" }} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <a onClick={getValue()}>Hello</a> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails);

// export default PackageDetails;
