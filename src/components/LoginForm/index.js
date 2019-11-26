//react components
import React from "react";

//components
import LoaderLogin from "../LoaderLogin";
import Logo from "../../images/logo-8-edited-color-v2.png";

const LoginForm = ({ handleChange, handleSubmit, onLoading, errors }) => {
  const loginStyle = {
    backgroundColor: "#2d4615",
    border: "1px solid #2d4615"
  };
  return (
    <div style={loginStyle} className='loginBar'>
      <nav
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
      </footer>
    </div>
  );
};

export default LoginForm;
