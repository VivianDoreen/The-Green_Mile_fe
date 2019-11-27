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

  const decoded = jwt.decode(token);

  return (
    <Route
      {...rest}
      render={props => {
        if (!token) {
          toast.error("You must first login");
          return <Redirect to="/" />;
        } else if (decoded.identity.role[0] === "Admin") {
          <Redirect to="/admin" />;
        } else if (decoded.identity.role[0] === "Supplier") {
          <Redirect to="/supplier" />;
        } else if (decoded.identity.role[0] === "Loader") {
          <Redirect to="/loader" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    auth: getToken(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
