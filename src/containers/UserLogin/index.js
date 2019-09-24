import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import '../../styles/components/userLogin.scss';
class UserLogin extends React.Component {
  render() {
    return (
      <div>
        <LoginForm />
        <Link to="/register">Register User</Link>
      </div>
    );
  }
}
export default UserLogin;
