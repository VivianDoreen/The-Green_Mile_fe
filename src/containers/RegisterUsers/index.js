import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { connect } from "react-redux";
import * as selectors from "./store/selectors";
import { postUserRequest } from "./store/actions";
import "../../styles/components/registerUsers.scss";
import Nav from "../../components/Nav";
import Logout from "../../components/Logout";
import { toast } from "react-toastify";

export class RegisterUsers extends React.Component {
  state = {
    user: {},
    name: "",
    email: ""
  };

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must first login");
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    const { registeredUser, error } = nextProps;
    if (error) {
      this.setState({ error });
    } else {
      this.setState({ registeredUser });
    }
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    const { email, username, password, role, confirm_password } = this.state;
    e.preventDefault();
    const data = {
      email,
      username,
      password,
      role,
      confirm_password
    };
    this.props.postUserRequest(data);
  };
  render() {
    const { registeredUser, error } = this.props;

    return (
      <div>
        <Logout />
        <Nav />
        <RegistrationForm
          registeredUser={registeredUser}
          error={error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registeredUser: selectors.getUser(state),
    error: selectors.getError(state)
  };
};

const mapDispatchToProps = {
  postUserRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUsers);
