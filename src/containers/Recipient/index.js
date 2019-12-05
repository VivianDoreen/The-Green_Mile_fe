//react
import React from "react";

import { fetchTokenRequest } from "../../containers/UserLogin/store/actions";

//third party libraries
import { connect } from "react-redux";

class Recipient extends React.Component {
  componentDidMount() {
    this.props.fetchTokenRequest();
  }
  render() {
    return <div id="main-section">Hello</div>;
  }
}

const mapStateToProps = state => {
  return {
    packageTypes: "selectors.fetchPackageType(state)"
  };
};

const mapDispatchToProps = {
  fetchTokenRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipient);
