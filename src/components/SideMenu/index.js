import React from "react";
import Popup from "reactjs-popup";

const SideMenu = ({
  handleSubmit,
  message,
  handleChange,
  placeHolderName,
  packageTypeName,
  packageTypeButton,
  legend
}) => {
  return (
    <div>
      <div
        style={{
          width: "160px",
          marginTop: "2px",
          marginLeft: "-7px"
        }}
      >
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
              {packageTypeButton}
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
                  <form onSubmit={handleSubmit}>
                    <fieldset>
                      <legend>{legend}</legend>
                      <p
                        style={{
                          color: "green",
                          textTransform: "lowercase"
                        }}
                      >
                        {console.log(message)}
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
                        onBlur={e => (e.target.placeholder = placeHolderName)}
                        required
                      />
                      <br />
                      <button style={{ outline: "none", cursor: "pointer" }}>
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
    </div>
  );
};
export default SideMenu;
