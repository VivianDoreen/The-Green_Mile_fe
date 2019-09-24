import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
const Nav = () => {
  return (
    <Container>
      <Menu stackable>
        <Menu.Item>The Green Mile </Menu.Item>
        <Menu.Item>
          <Link to="/admin" className="navLinks">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/register"
            className="navLinks"
            style={{ color: 'cadetblue' }}>
            Register User
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/delete" className="navLinks">
            View Users
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/register" className="navLinks">
            Update User
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/register" className="navLinks">
            Delete User
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/suppliers" className="navLinks">
            Suppliers
          </Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default Nav;
