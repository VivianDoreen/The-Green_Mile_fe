import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <nav
        class="navbar navbar-default navbar-fixed-top topnav"
        role="navigation">
        <div class="container topnav">
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <a name="home"></a>
      <div class="intro-header">
        <div class="bg-overlay">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-message">
                  <h1>The Green Mile</h1>
                  <h3>The leading company in the whole world.</h3>
                  {/* <hr class="intro-divider" /> */}
                  <form className="loginForm">
                    <label>UserName:</label>
                    <input
                      type="text"
                      value="Vivian"
                      className="inputUserName"
                    />
                    <label>Password:</label>
                    <input
                      type="password"
                      value="viv"
                      className="inputUserName"
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
      <section id="portfolio" class="bg-light-gray bounds">
        <div class="container"></div>
      </section>
      <a name="contact"></a>

      <br />
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p class="copyright text-muted small">
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
