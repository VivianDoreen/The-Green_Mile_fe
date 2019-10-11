//react libraries
import React, { Fragment } from "react";

//third party library
import { connect } from "react-redux";

//components
import ViewSinglePackageDetails from "../../components/ViewSinglePackageDetails";
import { fetchSinglePackageRequest } from "./store/actions";
import * as selectors from "./store/selectors";
import Nav from "../../components/Nav";

class ViewSinglePackage extends React.Component {
  componentDidMount() {
    const package_id = this.props.match.params.id;
    // console.log(this.props, "propsssssssss");

    console.log(package_id, "package_id");
    this.props.fetchSinglePackageRequest(package_id);
  }

  render() {
    const { singlePackage } = this.props;
    console.log(this.props.singlePackage, "Proppps");

    return (
      <Fragment>
        <Nav />
        {singlePackage.length !== 0 ? (
          <ViewSinglePackageDetails singlePackage={singlePackage} />
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    singlePackage: selectors.getSinglePackage(state),
    error: selectors.getSinglePackageError(state)
  };
};

const mapDispatchToProps = {
  fetchSinglePackageRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSinglePackage);
