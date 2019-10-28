//Components
import React from "react";

//Third party libraries
import {
  Feed,
  Icon,
  Label,
  Container,
  Divider,
  Header,
  Table
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const PackageDetails = ({ packageList }) => {
  console.log(
    packageList.length !== 0 ? packageList.package_id : "",
    "packages"
  );

  return (
    <React.Fragment>
      <Container>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="info circle" />
            Package List
          </Header>
        </Divider>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Package name</th>
              <th>Package type</th>
              <th>Loading type</th>
              <th>Hub address</th>
              <th>Recipient Address</th>
              <th>Recipient name</th>
              <th>Supplier name</th>
              <th>Delivery status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {packageList.map(packageDetails => (
              <tr key={packageDetails.package_id}>
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
                  {packageDetails.recipient_address}
                </td>
                <td data-label="supplier_name">
                  {packageDetails.supplier_name}
                </td>
                <td data-label="delivery_status">
                  {packageDetails.delivery_status}
                </td>
                <td data-label="view">
                  <Link to={`/viewSinglePackage/${packageDetails.package_id}`}>
                    View details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </React.Fragment>
  );
};

export default PackageDetails;
