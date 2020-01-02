//react
import React from "react";
//images

const Contact = () => {
  return (
    <div
      className="loginBar"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <p id="contactus">Contact Us</p>
                <form className="form-signin" id="contactForm">
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputText"
                      name="username"
                      className="form-control"
                      placeholder="Name"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputUserName">Name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputUserName">Email</label>
                  </div>
                  <div className="form-label-group">
                    <textarea
                      rows="4"
                      cols="50"
                      className="form-control"
                      placeholder="Message"
                      required
                      autoFocus
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    id="loginButton"
                  >
                    SEND
                  </button>
                </form>
              </div>
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
  );
};
export default Contact;
