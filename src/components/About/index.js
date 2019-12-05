import React from "react";

const About = () => {
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
        <p id="aboutus">About</p>
        <p>The Green Mile is a door to door delivery service</p>
        <hr />
        <p id="mission">Mission</p>
        <p>To become the leading distribution company</p>
        <hr />
        <p id="values">Values</p>
        <p id="valuestxt">Excellence</p>
        <p id="valuestxt">Integrity</p>
        <p id="valuestxt">Passion</p>
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
export default About;