import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { connect } from 'react-redux';
import * as selectors from './store/selectors';
import { postUserRequest } from './store/actions';
import '../../styles/components/registerUsers.scss';
import Nav from '../../components/Nav';
export class RegisterUsers extends React.Component {
  state = {
    user: {},
    name: ''
  };
  componentWillReceiveProps(nextProps) {
    const { registeredUser, error } = nextProps;
    if (error) {
      this.setState({ error });
    } else {
      this.setState({ registeredUser });
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    const {
      full_name,
      username,
      email,
      password,
      confirm_password
    } = this.state;
    e.preventDefault();
    const data = {
      full_name,
      username,
      email,
      password,
      confirm_password
    };
    this.props.postUserRequest(data);
  };
  render() {
    const { registeredUser, error } = this.props;
    return (
      <div>
        {/* <Nav /> */}
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

const mapStateToProps = (state) => {
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
