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
      <div
        style={{
          height: "50px",
          backgroundColor: "#2E8B57"
        }}
      >
        <Container className="navContainer">
          <Menu stackable>
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
          </Menu>
        </Container>
      </div>
    </div>
  );
};

export default LoginNav;
