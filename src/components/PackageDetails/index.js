//react
import React from "react";

//third party libraries
import { Icon, Container, Divider, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

//components
import Sort from "../Sort";

const PackageDetails = ({ packageList, packageIdices }) => {
  const packageIdexes = packageIdices;

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
      </Container>
    </React.Fragment>
  );
};

export default PackageDetails;
