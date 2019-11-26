//react libraries
import React from "react";

//third party libraries
import { connect } from "react-redux";

//actions
import { fetchTokenRequest } from "../../containers/UserLogin/store/actions";

class SupplierPage extends React.Component {
  componentDidMount() {
    this.props.fetchTokenRequest();
  }
  render() {
    return <React.Fragment></React.Fragment>;
  }
}
const mapStateToProps = state => {
  return {
    token: ""
  };
};
const mapDispatchToProps = {
  fetchTokenRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(SupplierPage);
