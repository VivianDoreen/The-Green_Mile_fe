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
          </Menu>
        ) : decoded.identity.role[0] === "Recipient" ? (
          <Menu stackable>
            <Menu.Item>
              <Link to="" className="navLinks">
                Packages
              </Link>
            </Menu.Item>
          </Menu>
        ) : (
          <Menu stackable>
            <Menu.Item>
              <Link to="" className="navLinks">
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
        )}
      </Container>
      {/* <span className="navbar-text mr-3"> */}
      {/* <strong>{user ? `Welcome ${user.username}` : ""}</strong> */}
      {/* </span> */}
      <button
        style={{
          marginTop: "25px",
          backgroundColor: "green",
          padding: "6px",
          borderRadius: "5px",
          border: "none"
        }}
        onClick={() => localStorage.removeItem("token")}
      >
        <a style={{ color: "#ffffff" }} href="/">
          Logout
        </a>
      </button>
    </div>
  );
};

export default Nav;
