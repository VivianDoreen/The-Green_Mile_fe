//react
import React from "react";

//third party libraries
import Popup from "reactjs-popup";

const Button = ({
  handleSubmit,
  message,
  handleChange,
  placeHolderName,
  packageTypeName,
  packageTypeButton,
  legend,
  buttonName
}) => {
  return (
    <React.Fragment>
      <div className="form-style-package-type">
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
              {buttonName}
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
                        placeholder={packageTypeName}
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
    </React.Fragment>
  );
};
export default Button;
