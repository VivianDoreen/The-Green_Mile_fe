import React from "react";
import Popup from "reactjs-popup";

const PackageTypeForm = ({
  handleSubmit,
  handleChange,
  packageTypeSuccess,
  package_type_name,
  placeHolderName,
  legendName
}) => {
  return (
    <React.Fragment>
      {/* <Popup trigger={<button className="button"> Open Modal </button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header"> Modal Title </div>
            <div className="content">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur sit commodi beatae optio voluptatum sed eius cumque,
              delectus saepe repudiandae explicabo nemo nam libero ad,
              doloribus, voluptas rem alias. Vitae?
            </div>
            <div className="actions">
              <Popup
                trigger={<button className="button"> Trigger </button>}
                position="top center"
                closeOnDocumentClick
              >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni omnis delectus nemo, maxime molestiae dolorem
                  numquam mollitia, voluptate ea, accusamus excepturi deleniti
                  ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </span>
              </Popup>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup> */}
      {/* <div
        className="form-style"
        style={{
          width: "500px",
          height: "250px",
          backgroundColor: "white",
          paddingTop: "50px"
        }}
      >
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>{legendName}</legend>
            <p style={{ color: "green", textTransform: "lowercase" }}>
              {packageTypeSuccess.message}
            </p>
            <input
              style={{ outline: "none" }}
              type="text"
              name={package_type_name}
              onChange={handleChange}
              placeholder={placeHolderName}
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
      </div> */}
    </React.Fragment>
  );
};

export default PackageTypeForm;
