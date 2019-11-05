//react
import React from "react";

//third party libraries
import { toast } from "react-toastify";
import { connect } from "react-redux";
import Popup from "reactjs-popup";

//selectors
import * as selectors from "../Packages/store/selectors";

//action
import {
  fetchPackagesRequest,
  addPackageTypeRequest
} from "../Packages/store/actions";

//components
import Nav from "../../components/Nav";
import Logout from "../../components/Logout";
import PackageTypeForm from "../../components/PackageTypeForm";
import Button from "../../components/Button";

class AdminPage extends React.Component {
  state = {
    showPopup: false,
    disabled: true
  };

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must first login");
      this.props.history.push("/");
    }
    this.props.fetchPackagesRequest();
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state, "STATE");

    const { package_type_name } = this.state;
    console.log(this.state, "PackageTypeNameFirst");
    const data = {
      package_type_name
    };
    this.props.addPackageTypeRequest(data);
    console.log(this.state.package_type_name, "ggggggg");
    this.setState({ package_type_name: "" });

    console.log(this.state, "PackageTypeName");
  };

  render() {
    const { disabled } = this.state;

    return (
      <div>
        <Logout />
        <Nav />
        <div
          style={{
            width: "160px",
            marginTop: "20px",
            marginLeft: "80px"
          }}
        >
          {/* <Button
            buttonText="Add package type"
            togglePopup={this.togglePopup}
            handleChange={this.handleChange}
            getButtonName="packageType"
          /> */}
          <Popup
            trigger={
              <button
                className="button"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#ffffff",
                  marginTop: "5px",
                  border: "none",
                  outline: "none",
                  cursor: "pointer"
                }}
              >
                Add package type
              </button>
            }
            modal
          >
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="content">
                  <div
                    className="form-style-package-type"
                    style={{
                      width: "500px",
                      backgroundColor: "white",
                      paddingTop: "50px"
                    }}
                  >
                    <form onSubmit={this.handleSubmit}>
                      <fieldset>
                        <legend>Add package type</legend>
                        <p
                          style={{ color: "green", textTransform: "lowercase" }}
                        >
                          {this.props.packageTypes.message}
                        </p>
                        <input
                          style={{
                            outline: "none",
                            width: "80%",
                            border: "1px solid #ccc"
                          }}
                          type="text"
                          name="package_type_name"
                          onChange={this.handleChange}
                          placeholder="package type"
                          onFocus={e => (e.target.placeholder = "")}
                          onBlur={e =>
                            (e.target.placeholder = this.placeHolderName)
                          }
                          required
                        />
                        <br />
                        <button style={{ outline: "none", cursor: "pointer" }}>
                          Submit
                        </button>
                      </fieldset>
                    </form>
                  </div>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae? */}
                </div>
                {/* <div className="actions"> */}
                {/* <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    closeOnDocumentClick
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae magni omnis delectus nemo, maxime molestiae dolorem
                      numquam mollitia, voluptate ea, accusamus excepturi
                      deleniti ratione sapiente! Laudantium, aperiam doloribus.
                      Odit, aut.
                    </span> */}
                {/* </Popup> */}
                {/* <button
                    className="button"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    close modal
                  </button> */}
                {/* </div> */}
              </div>
            )}
          </Popup>
          <br />
          <Button
            buttonText="Add loading type"
            togglePopup={this.togglePopup}
            handleChange={this.handleChange}
            getButtonName="loadingType"
            disableButton={disabled}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid #cccccc",
            marginTop: "-80px",
            marginLeft: "300px",
            backgroundColor: "#ffffff",
            borderRadius: "5px"
          }}
        >
          <p
            style={{
              marginTop: "5px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#033822",
              fontSize: "27px",
              textDecoration: "underline"
            }}
          >
            Packages
          </p>
          <p
            style={{
              paddingTop: "10px",
              marginLeft: "30px",
              marginTop: "-25px",
              fontSize: "18px",
              fontWeight: "100"
            }}
          >
            <b style={{ fontWeight: "bold" }}>Delivered</b> - 10
            <br />
            <b style={{ fontWeight: "bold" }}>Pending</b> - 20
            <br />
            <b style={{ fontWeight: "bold" }}>Total</b> -{" "}
            {this.props.packages.length}
          </p>
        </div>
        {this.state.showPopup ? (
          <PackageTypeForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            packageTypeSuccess={this.props.packageTypes}
            package_type_name="package_type_name"
            placeHolderName="package type *"
            legendName="Add Package Type"
          />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    packageTypes: selectors.fetchPackageType(state),
    packages: selectors.fetchPackages(state)
  };
};

const mapDispatchToProps = {
  fetchPackagesRequest,
  addPackageTypeRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
