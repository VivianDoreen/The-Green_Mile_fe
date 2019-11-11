//react
import React from "react";

//third party components
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

//scss
import "../../styles/components/nav.scss";

const Nav = () => {
  return (
    <Container className="navContainer">
      <Menu stackable>
        <Menu.Item>
          <Link to="/admin" className="navLinks">
            The Green Mile
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/register" className="navLinks">
            Register User
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/suppliers" className="navLinks">
            Suppliers
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/packages" className="navLinks">
            Packages
          </Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default Nav;
