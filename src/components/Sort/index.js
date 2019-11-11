import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "asc",
    text: "Asc",
    value: "asc"
  },
  {
    key: "desc",
    text: "Desc",
    value: "desc"
  }
];

const Sort = ({ onSortChange }) => (
  <span style={{ margin: "10px 10px 10px 40px", color: "green" }}>
    <Dropdown
      inline
      options={options}
      defaultValue={options[0].value}
      onChange={onSortChange}
    />
  </span>
);

export default Sort;
