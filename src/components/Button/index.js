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
          width: "90%",
          backgroundColor: "#6ba701",
          border: "none",
          color: "#ffffff",
          outline: "none",
          cursor: "pointer",
          marginLeft: "-20px",
          marginBottom: "5px"
        }}
        disabled={disableButton}
      >
        {buttonText}
      </button>
    </React.Fragment>
  );
};
export default Button;
