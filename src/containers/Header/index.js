import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Nav from "../../components/Nav";
import { fetchTokenRequest } from "../../containers/UserLogin/store/actions";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchTokenRequest();
  }

  render() {
    const { isAuthenticated, token } = this.props.auth;

    console.log(token, "TOKEN");

    return <React.Fragment>{token ? <Nav /> : ""}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.loginReducer
  };
};

const mapDispatchToProps = {
  fetchTokenRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
