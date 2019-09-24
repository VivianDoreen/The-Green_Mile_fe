import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { connect } from 'react-redux';
import * as selectors from './store/selectors';
import { postUserRequest } from './store/actions';

export class RegisterUsers extends React.Component {
  state = {
    user: {},
    name: ''
  };

  handleChange = (e) => {
    // this.setState({ inputValue: e.target.value });
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(value);
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
    return (
      <div>
        <RegistrationForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    registeredUsers: state.mileUsers
  };
};

const mapDispatchToProps = {
  postUserRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUsers);
