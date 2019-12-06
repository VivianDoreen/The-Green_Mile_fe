//react
import React from "react";

//image
import bgImage from "../../images/prof.jpg";

const About = () => {
  return (
    <div
      className="loginBar"
      style={{
        backgroundImage: "url(" + bgImage + ")",
        backgroundSize: "cover"
      }}
    >
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
export default About;
