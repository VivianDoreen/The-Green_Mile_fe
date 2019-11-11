import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "package_name",
    text: "Package Name",
    value: "package_name"
  },
  {
    key: "package_type",
    text: "Package Type",
    value: "package_type"
  },
  {
    key: "recipient_name",
    text: "Recipient Name",
    value: "recipient_name"
  },
  {
    key: "loading_type_name",
    text: "Loading Type",
    value: "loading_type_name"
  },
  {
    key: "hub_address",
    text: "Hub Address",
    value: "hub_address"
  },
  {
    key: "recipient_address",
    text: "Recipient Address",
    value: "recipient_address"
  },
  {
    key: "supplier_name",
    text: "Supplier Name",
    value: "supplier_name"
  },
  {
    key: "delivery_status",
    text: "Deliver Status",
    value: "delivery_status"
  }

  //   loading_type_name
];

const Filters = ({ onFilterChange }) => (
  <span
    style={{
      margin: "-5px 0 12px 0px",
      color: "green"
    }}
  >
    <Dropdown
      inline
      options={options}
      defaultValue={options[0].value}
      onChange={onFilterChange}
    />
  </span>
);

export default Filters;
