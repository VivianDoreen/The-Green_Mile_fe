//Components
import React from "react";

//Third party libraries
import { Icon, Container, Divider, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PackageDetails = ({ packageList, packageIdices }) => {
  const packageIdexes = packageIdices;

  return (
    <React.Fragment>
      <Container>
        <Divider horizontal>
          <Header as="h4" style={{ color: "#033822" }}>
            <Icon name="info circle" />
            Package List
          </Header>
        </Divider>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>No.</th>
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
            {packageList.map(packageDetails => (
              <tr key={packageDetails.package_id}>
                <td data-label="package_name">
                  {packageIdexes.indexOf(packageDetails) + 1}
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
                    <Icon name="eye" style={{ color: "rgb(3, 56, 34)" }} />
                  </Link>
                  <Link to="">
                    <Icon name="edit" style={{ color: "rgb(3, 56, 34)" }} />
                  </Link>
                  <Link to="">
                    <Icon name="add" style={{ color: "rgb(3, 56, 34)" }} />
                  </Link>
                  <Link to="">
                    <Icon name="delete" style={{ color: "rgb(3, 56, 34)" }} />
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
