import React from "react";

class SelectedPackages extends React.Component {
  render() {
    const getSelectedPackages = JSON.parse(
      localStorage.getItem("selectedItems")
    );
    console.log(getSelectedPackages);
    return <div id="main-section">Packages coming soon</div>;
  }
}
export default SelectedPackages;
