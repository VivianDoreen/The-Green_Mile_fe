//react components
import React from "react";

//components
import LoaderLogin from "../LoaderLogin";
import Logo from "../../images/logo-8-edited-color-v2.png";
import bgImage from "../../images/tumblr_nt5uk4psl31ud7rr3o1_1280Edited-color-overlay.png";

const LoginForm = ({ handleChange, handleSubmit, onLoading, errors }) => {
  const loginStyle = {
    backgroundColor: "#2d4615",
    border: "1px solid #2d4615"
  };
  return (
    <div
      className="loginBar"
      style={{
        backgroundImage: "url(" + bgImage + ")",
        backgroundSize: "cover",
        height: "655"
      }}
    >
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <img src={Logo} width="50px" className="logo" /> &nbsp;The Green
                Mile
                <div>{onLoading ? <LoaderLogin /> : ""}</div>
                <br />
                <div className="userErrorLogin">
                  {errors ? errors.message : ""}
                </div>
                <form
                  className="form-signin"
                  id="loginForm"
                  onSubmit={handleSubmit}
                >
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputText"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      required
                      autoFocus
                      onChange={handleChange}
                    />
                    <label htmlFor="inputUserName">Username</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    disabled={onLoading}
                    id="loginButton"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer className="page-footer font-small indigo">
          <div className="container text-center text-md-left"></div>
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              The Green Mile
            </a>
          </div>
        </footer>
      </div>
      {/* <nav
        className="navbar navbar-default navbar-fixed-top topnav"
        role="navigation"
      >
        <div className="container topnav">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <a name="home"></a>
      <div className="intro-header">
        <div className="bg-overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1 style={{ display: "flex", alignItems: "center" }}>
                    <img src={Logo} width="50px" /> &nbsp;The Green Mile
                  </h1>
                  <div
                    style={{
                      width: "45%",
                      backgroundColor: "#6BA701",
                      margin: "0 auto",
                      padding: "30px 0 30px 0",
                      borderRadius: "5px",
                      opacity: "1"
                    }}
                  >
                    <h3 style={{ color: "#000000", marginBottom: "-30px" }}>
                      LOGIN
                    </h3>
                    <p className="userErrorLogin">
                      {errors ? errors.message : ""}
                    </p>
                    <p>{onLoading ? <LoaderLogin /> : ""}</p>
                    <form
                      className="loginForm"
                      id="loginForm"
                      onSubmit={handleSubmit}
                    >
                      <label className="labelName">UserName:</label>
                      <input
                        type="text"
                        name="username"
                        className="inputUserName"
                        onChange={handleChange}
                        required
                      />
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        className="inputUserName"
                        onChange={handleChange}
                        required
                      />
                      <br />
                      <button
                        id="loginButton"
                        style={{ cursor: "pointer" }}
                        disabled={onLoading}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a name="about"></a>
      <a name="portfolio"></a>
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container"></div>
      </section>
      <a name="contact"></a>

      <br />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright text-muted small">
                Copyright &copy; The Green Mile 2015. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default LoginForm;
