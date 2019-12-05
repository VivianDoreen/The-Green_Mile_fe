//react
import React from "react";

//third party components
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

//scss
import "../../styles/components/nav.scss";

const jwt = require("jsonwebtoken");

const Nav = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt.decode(token);
  return (
    <div className="grid-container-nav">
      <Container className="navContainer">
        {decoded.identity.role[0] === "Supplier" ? (
          <Menu stackable>
            <Menu.Item>
              <Link to="/supplier" className="navLinks">
                The Green Mile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/addPackages" className="navLinks">
                AddPackages
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/viewSupplierPackages" className="navLinks">
                ViewPackages
              </Link>
            </Menu.Item>
          </Menu>
        ) : decoded.identity.role[0] === "Loader" ? (
          <Menu stackable>
            <Menu.Item>
              <Link to="" className="navLinks">
                The Green Mile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="" className="navLinks">
                Packages
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/selectedPackages" className="navLinks">
                View Selected Packages
              </Link>
            </Menu.Item>
          </Menu>
        ) : decoded.identity.role[0] === "Recipient" ? (
          <Menu stackable>
            <Menu.Item>
              <Link to="/recipient" className="navLinks">
                The Green Mile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="" className="navLinks">
                Packages
              </Link>
            </Menu.Item>
          </Menu>
        ) : decoded.identity.role[0] === "Admin" ? (
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
              <Link to="/packages" className="navLinks">
                View Packages
              </Link>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu stackable>
            <Menu.Item>
              <Link to="/" className="navLinks">
                The Green Mile
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
        )}
      </Container>
      <button
        style={{
          marginTop: "8px",
          backgroundColor: "green",
          padding: "6px",
          borderRadius: "5px",
          border: "none"
        }}
        onClick={() => localStorage.removeItem("token")}
      >
        <a style={{ color: "#ffffff", outline: "none" }} href="/">
          Logout
        </a>
      </button>
    </div>
  );
};

export default Nav;
