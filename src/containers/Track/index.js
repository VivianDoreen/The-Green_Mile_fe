//react
import React from "react";

import { connect } from "react-redux";

import { fetchRecipientPackagesRequest } from "../../containers/Packages/store/actions";

//image
import "../../styles/components/Track.scss";

//selectors
import * as selectors from "../Packages/store/selectors";

import ViewSinglePackageDetails from "../../components/ViewSinglePackageDetails";

class Track extends React.Component {
  componentDidMount() {
    // this.props.fetchRecipientPackagesRequest();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    const data = {
      search
    };
    console.log(data, "GGHH");

    this.props.fetchRecipientPackagesRequest(data);
  };
  render() {
    console.log(this.props.packages, "Packages");

    return (
      <div
        className="loginBar"
      >
        <form className="example" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Package Number.."
            name="search"
            onChange={this.handleChange}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        {Object.keys(this.props.packages) != 0 ? (
         <div> <p>{this.props.packages["package_name"]}</p>
          <p>{this.props.packages["delivery_status"]}</p>
          <p>{this.props.packages["date_registered"]}</p>
          <p>{this.props.packages["hub_address"]}</p>
          <p>{this.props.packages["delivery_date"]}</p></div>
        ) : (
          "not found"
        )}
        <footer className="page-footer font-small indigo">
          <div className="container text-center text-md-left"></div>
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              The Green Mile
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    packages: selectors.fetchRecipientPackages(state)
  };
};
const mapDispatchToProps = {
  fetchRecipientPackagesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
