//react
import React from "react";

//third party libraries
import { connect } from "react-redux";
import { toast } from "react-toastify";

//scss
import "../../styles/components/userLogin.scss";

//selectors
import { getUser, getError, getIsLoading } from "./store/selectors";

//actions
import { loginUserRequest } from "./store/actions";

//components
import LoginForm from "../../components/LoginForm";
import LoaderLogin from "../../components/LoaderLogin";

const jwt = require("jsonwebtoken");

export class UserLogin extends React.PureComponent {
  state = {
    getUser: {},
    getError: {}
  };
  componentWillReceiveProps(nextProps) {
    const { getUser, getError } = nextProps;
    const { history } = this.props;

    if (Object.keys(getError).length !== 0) {
      this.setState({ getError, isLoading: false });
    } else if (Object.keys(getUser).length !== 0) {
      this.setState({ getUser, isLoading: false });
      localStorage.setItem("token", getUser.access_token);
      const token = localStorage.getItem("token");

      const decoded = jwt.decode(token);

      if (decoded.identity.role[0] === "Admin") {
        toast.success("successfully logged in");
        history.push("/admin");
      } else if (decoded.identity.role[0] === "Supplier") {
        toast.success("successfully logged in");
        history.push("/supplier");
      } else {
        toast.success("successfully logged in");
        history.push("/register");
      }
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const data = {
      username,
      password
    };
    this.props.loginUserRequest(data);
    this.setState({ loading: true });
  };

  render() {
    const { getError, getUser, getIsLoading } = this.props;
    const { isLoading } = this.state;

    return (
      <div>
        <LoginForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          onLoading={getIsLoading}
          errors={getError}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    getUser: getUser(state),
    getError: getError(state),
    getIsLoading: getIsLoading(state)
  };
};

export const mapDispatchToProps = {
  loginUserRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
