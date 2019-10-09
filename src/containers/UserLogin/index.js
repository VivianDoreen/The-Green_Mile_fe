import React from 'react';
import LoginForm from '../../components/LoginForm';
import '../../styles/components/userLogin.scss';
import * as selectors from './store/selectors';
import { connect } from 'react-redux';
import { loginUserRequest } from './store/actions';
import { toast } from 'react-toastify';

export class UserLogin extends React.PureComponent {
  state = {
    getUser: {},
    getError: {}
  };
  componentWillReceiveProps(nextProps) {
    const { getUser, getError } = nextProps;
    const { history } = this.props;
    if (getUser) {
      this.setState({ getUser });
      toast.success('successfully logged in');
      history.push('/admin');
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const data = {
      username,
      password
    };
    this.props.loginUserRequest(data);
  };

  render() {
    const { getError } = this.props;
    console.log(this.props, "props");

    return (
      <div>
        <LoginForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    getUser: selectors.getUser(state),
    getError: selectors.getError(state)
  };
};
export const mapDispatchToProps = {
  loginUserRequest
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
