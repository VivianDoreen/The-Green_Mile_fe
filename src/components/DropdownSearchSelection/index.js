//react
import React from "react";

//third party libraries
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const DropdownSearchSelection = ({
  packageId,
  packageOptions,
  onSelectChange
}) => {
  return (
    // <Link to={`/viewSinglePackage/${packageId}`}>
    <Dropdown
      placeholder="Search Package"
      fluid
      search
      selection
      options={packageOptions}
      onChange={onSelectChange}
    />
    // </Link>
  );
};

export default DropdownSearchSelection;
