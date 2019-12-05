import React from "react";

const Contact = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
            </li>
            </ul>
            </div>
            </nav>
            <div className="container">
        <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
        <div className="card-body">
            <p id="contactus">Contact Us</p>
        <form className="form-signin" id="contactForm">
        <div className="form-label-group">
        <input type="text" id="inputText" name= "username" className="form-control" placeholder="Name" required autoFocus />
        <label htmlFor="inputUserName">Name</label>
        </div>
        <div className="form-label-group">
        <input type="email" id="inputEmail" name= "email" className="form-control" placeholder="Email" required autoFocus />
        <label htmlFor="inputUserName">Email</label>
        </div>
        <div className="form-label-group">
        <textarea rows="4" cols="50" className="form-control" placeholder="Message" required autoFocus></textarea>
      
        </div>
          <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"  id="loginButton">SEND</button>
        </form>
        </div>
        </div>
        </div>
        </div>
      </div>
            <footer className="page-footer font-small indigo">
                <div className="container text-center text-md-left">
                </div>
                <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> The Green Mile</a>
                </div>
            </footer>
        </div>
    )
}
export default Contact;