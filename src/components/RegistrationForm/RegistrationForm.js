import React from "react";

const RegistrationForm = ({
  handleChange,
  handleSubmit,
  error,
  registeredUser,
  emailValue,
  usernameValue,
  passwordValue,
  cPasswordValue,
  roleValue
}) => {
  return (
    <div className="signup__container">
      <div className="container__child signup__thumbnail">
        <div className="thumbnail__logo">
          <svg
            className="logo__shape"
            width="25px"
            viewBox="0 0 634 479"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
        <div className="thumbnail__content text-center">
          <h1 className="heading--primary">
            Register users to
            <br />
            <i>
              <font color="#F2AA4CFF">The Green Mile</font>
            </i>
          </h1>
        </div>
        <div className="signup__overlay"></div>
      </div>
      <div className="container__child signup__form">
        <p className="userError">{error.length ? error : ""}</p>
        <form onSubmit={handleSubmit}>
          <p className="registerSuccess">
            {Object.keys(registeredUser).length != 0
              ? "User successfully registered"
              : ""}
          </p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              value={emailValue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <br />
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              value={usernameValue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={passwordValue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordRepeat">Repeat Password</label>
            <br />
            <input
              className="form-control"
              type="password"
              name="confirm_password"
              id="passwordRepeat"
              value={cPasswordValue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Role</label>
            <br />
            <select
              className="form-control"
              onChange={handleChange}
              value={roleValue}
              name="role"
            >
              <option>Select role</option>
              <option>Admin</option>
              <option>Supplier</option>
              <option>Recipient</option>
              <option>Loader</option>
            </select>
          </div>

          <div className="m-t-lg">
            <ul className="list-inline">
              <li>
                <input
                  className="btn btn--form"
                  type="submit"
                  value="Register"
                />
              </li>
              <li>
                <a className="signup__link" href="#">
                  I am already a member
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegistrationForm;
