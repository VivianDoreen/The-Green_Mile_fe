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
import { fetchTokenRequest } from "./store/actions";
import LoaderLogin from "../../components/LoaderLogin";

const jwt = require("jsonwebtoken");

export class UserLogin extends React.PureComponent {
  state = {
    getUser: {},
    getError: {}
  };

  componentDidMount() {
    // const token = this.props.fetchTokenRequest();
    // if (!token) {
    //   toast.error("You must first login");
    //   this.props.history.push("/");
    // }

    // console.log(getUser, "getUse1r");

    getUser ? this.props.fetchTokenRequest() : "";
  }

  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     this.props.history.push("/admin");
  //   }
  // }
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
        // history.push("/register");
      }
    }
  }

  // static propTypes = {
  //   login: PropTypes.func.isRequired,
  //   isAuthenticated: PropTypes.bool
  // };

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
    // this.setState({ loading: true });
  };

  render() {
    const { getError, getUser, getIsLoading, auth } = this.props;
    getUser ? console.log(getUser, "getUserzzzzzz") : "";

    return (
      <React.Fragment>
        <LoginForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          onLoading={getIsLoading}
          errors={getError}
        />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.loginReducer,
    getUser: getUser(state),
    getError: getError(state),
    getIsLoading: getIsLoading(state)
  };
};

export const mapDispatchToProps = {
  loginUserRequest,
  fetchTokenRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
