//react
import React from "react";

//third party libraries
import { connect } from "react-redux";

//scss
import "../../styles/components/generalLayout.scss";

//selectors
import * as selectors from "../Packages/store/selectors";

//actions
import {
  fetchPackagesRequest,
  addPackageTypeRequest
} from "../Packages/store/actions";
import { fetchTokenRequest } from "../../containers/UserLogin/store/actions";

class AdminPage extends React.Component {
  state = {
    showPopup: false,
    disabled: true
  };

  componentDidMount() {
    this.props.fetchTokenRequest();
    this.props.fetchPackagesRequest();
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { package_type_name } = this.state;
    const data = {
      package_type_name
    };
    this.props.addPackageTypeRequest(data);
    this.setState({ package_type_name: "" });
  };

  render() {
    const { disabled } = this.state;
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
    packageTypes: selectors.fetchPackageType(state),
    packages: selectors.fetchPackages(state)
  };
};

const mapDispatchToProps = {
  fetchPackagesRequest,
  addPackageTypeRequest,
  fetchTokenRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
