import React from "react";

const Button = ({
  buttonText,
  togglePopup,
  getButtonName,
  handleChange,
  disableButton
}) => {
  return (
    <React.Fragment>
      <button
        onClick={togglePopup}
        name={getButtonName}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#ffffff",
          marginTop: "5px",
          border: "none",
          outline: "none",
          cursor: "pointer"
        }}
        disabled={disableButton}
      >
        {buttonText}
      </button>
    </React.Fragment>
  );
};
export default Button;
