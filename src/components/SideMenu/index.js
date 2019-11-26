//react
import React from "react";

//third party libraries
import Popup from "reactjs-popup";
import { connect } from "react-redux";

const jwt = require("jsonwebtoken");
// const SideMenu = ({
//   handleSubmit,
//   message,
//   handleChange,
//   placeHolderName,
//   packageTypeName,
//   packageTypeButton,
//   legend
// }) => {
//   return (
//     <React.Fragment>
//       <div
//         style={{
//           width: "160px",
//           marginTop: "2px",
//           marginLeft: "-7px"
//         }}
//       >
//         <Popup
//           trigger={
//             <button
//               className="button"
//               style={{
//                 width: "90%",
//                 padding: "5px",
//                 backgroundColor: "#6ba701",
//                 border: "none",
//                 color: "#ffffff",
//                 outline: "none",
//                 cursor: "pointer"
//               }}
//             >
//               {packageTypeButton}
//             </button>
//           }
//           modal
//         >
//           {close => (
//             <div className="modal">
//               <a className="close" onClick={close}>
//                 &times;
//               </a>
//               <div className="content">
//                 <div
//                   className="form-style-package-type"
//                   style={{
//                     width: "500px",
//                     backgroundColor: "white",
//                     paddingTop: "50px"
//                   }}
//                 >
//                   <form onSubmit={handleSubmit}>
//                     <fieldset>
//                       <legend>{legend}</legend>
//                       <p
//                         style={{
//                           color: "green",
//                           textTransform: "lowercase"
//                         }}
//                       >
//                         {console.log(message)}
//                         {message}
//                       </p>
//                       <input
//                         style={{
//                           outline: "none",
//                           width: "80%",
//                           border: "1px solid #ccc"
//                         }}
//                         type="text"
//                         name={packageTypeName}
//                         onChange={handleChange}
//                         placeholder="package type"
//                         onFocus={e => (e.target.placeholder = "")}
//                         onBlur={e => (e.target.placeholder = placeHolderName)}
//                         required
//                       />
//                       <br />
//                       <button style={{ outline: "none", cursor: "pointer" }}>
//                         Submit
//                       </button>
//                     </fieldset>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Popup>
//       </div>
//     </React.Fragment>
//   );
// };
class SideMenu extends React.Component {
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { package_type_name } = this.state;
    const data = {
      package_type_name
    };
    this.props.addPackageTypeRequest(data);
    this.setState({ package_type_name: "" });
  };

  render() {
    const { token } = this.props.auth;
    const decoded = jwt.decode(token);
    return (
      <React.Fragment>
        <div id="grid-container-side-menu">
          {decoded.identity.role[0] === "Admin" ? (
            <div className="sideMenul">
              <Popup
                trigger={
                  <button
                    className="button"
                    style={{
                      width: "90%",
                      padding: "5px",
                      backgroundColor: "#6ba701",
                      border: "none",
                      color: "#ffffff",
                      outline: "none",
                      cursor: "pointer"
                    }}
                  >
                    'Add package Type'
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
                            <legend>{legend}</legend>
                            <p
                              style={{
                                color: "green",
                                textTransform: "lowercase"
                              }}
                            >
                              {message}
                            </p>
                            <input
                              style={{
                                outline: "none",
                                width: "80%",
                                border: "1px solid #ccc"
                              }}
                              type="text"
                              name={packageTypeName}
                              onChange={handleChange}
                              placeholder="package type"
                              onFocus={e => (e.target.placeholder = "")}
                              onBlur={e =>
                                (e.target.placeholder = placeHolderName)
                              }
                              required
                            />
                            <br />
                            <button
                              style={{ outline: "none", cursor: "pointer" }}
                            >
                              Submit
                            </button>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.loginReducer
  };
};
export default connect(mapStateToProps)(SideMenu);
