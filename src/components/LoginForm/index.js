import React from 'react';

const LoginForm = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <nav
        className="navbar navbar-default navbar-fixed-top topnav"
        role="navigation">
        <div className="container topnav">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
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
                  <h1>The Green Mile</h1>
                  <h3>The leading company in the whole world.</h3>
                  <form className="loginForm" onSubmit={handleSubmit}>
                    <label>UserName:</label>
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
                    <button id="loginButton">LogIn</button>
                  </form>
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
