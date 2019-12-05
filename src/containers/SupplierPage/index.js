//react libraries
import React from "react";

//third party libraries
import { connect } from "react-redux";

//actions
import { fetchTokenRequest } from "../../containers/UserLogin/store/actions";
import { fetchSupplierPackagesRequest } from "../../containers/Packages/store/actions";

//selectors
import * as selectors from "../Packages/store/selectors";

class SupplierPage extends React.Component {
  componentDidMount() {
    this.props.fetchTokenRequest();
    this.props.fetchSupplierPackagesRequest();
  }
  render() {
    return (
      <div id="childThree">
        <div>
          <p
            style={{
              marginTop: "5px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#12A405",
              fontSize: "27px",
              textDecoration: "underline"
            }}
          >
            Packages
          </p>
          <p>
            <b style={{ fontWeight: "bold" }}>Delivered</b> - 10
            <br />
            <b style={{ fontWeight: "bold" }}>Pending</b> - 20
            <br />
            <b style={{ fontWeight: "bold" }}>Total</b> -{" "}
            {this.props.packages.length}
          </p>
        </div>
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    packages: selectors.fetchSupplierPackages(state)
  };
};
const mapDispatchToProps = {
  fetchTokenRequest,
  fetchSupplierPackagesRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(SupplierPage);
