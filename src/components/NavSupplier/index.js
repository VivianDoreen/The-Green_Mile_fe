import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const NavSupplier = () => {
  return (
    <Container className="navContainer">
      <Menu stackable>
        <Menu.Item><Link to="/supplier" className="navLinks">The Green Mile</Link> </Menu.Item>
        <Menu.Item>
          <Link to="/addPackages" className="navLinks">
            AddPackages
          </Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default NavSupplier;
