import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import PropTypes from "prop-types";

//selectors
import { getUser, getToken } from "../../containers/UserLogin/store/selectors";

const jwt = require("jsonwebtoken");

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const token = localStorage.getItem("token");
  console.log(token, "tokenPrivate");

  const decoded = jwt.decode(token);
  console.log(decoded, "decodeddeded");

  return (
    <Route
      {...rest}
      render={props => {
        if (!token) {
          toast.error("You must first login");
          return <Redirect to="/" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = state => {
  console.log(getToken(state), "getUserToken");

  return {
    auth: getToken(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
