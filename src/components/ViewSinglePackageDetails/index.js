//react components
import React, { Fragment } from "react";

//third party libraries
import { Container, Divider, Table, Header, Icon } from "semantic-ui-react";

const ViewSinglePackageDetails = ({ singlePackage }) => (
  <Fragment>
    <Container>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="info circle" />
          Details
          {console.log(
            singlePackage,
            "singlePackagesinglePackagesinglePackage"
          )}
        </Header>
      </Divider>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell>package_name:</Table.Cell>
            <Table.Cell style={{ textTransform: "capitalize" }}>
              {singlePackage.package_name}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>package_type:</Table.Cell>
            <Table.Cell>{singlePackage.package_type}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>loading_type_name:</Table.Cell>
            <Table.Cell>{singlePackage.loading_type_name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>recipient_name:</Table.Cell>
            <Table.Cell>{singlePackage.recipient_name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>recipient_address:</Table.Cell>
            <Table.Cell>{singlePackage.recipient_address}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>supplier_name:</Table.Cell>
            <Table.Cell>{singlePackage.supplier_name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>hub_address:</Table.Cell>
            <Table.Cell>{singlePackage.hub_address}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>delivery_description:</Table.Cell>
            <Table.Cell>{singlePackage.delivery_description}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>delivery_status:</Table.Cell>
            <Table.Cell>{singlePackage.delivery_status}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>date_registered:</Table.Cell>
            <Table.Cell>{singlePackage.date_registered}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>delivery_date:</Table.Cell>
            <Table.Cell>{singlePackage.delivery_date}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  </Fragment>
);

export default ViewSinglePackageDetails;
