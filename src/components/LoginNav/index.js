//react
import React from "react";

//third party components
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

//scss
import "../../styles/components/nav.scss";

const LoginNav = () => {
  return (
    <div className="grid-container-nav">
        <Container>
          <Menu stackable borderless>
            <Menu.Item>
              <Link to="/" className="navLinks">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/about" className="navLinks">
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/contact" className="navLinks">
                Contact
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/track" className="navLinks">
                Track your package
              </Link>
            </Menu.Item>
          </Menu>
        </Container>
      </div>
  
  );
};

export default LoginNav;
