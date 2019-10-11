import React from "react";

const Logout = () => {
  return (
    <div className="logout">
      <a href="/" onClick={() => localStorage.removeItem("token")}>
        Logout
      </a>
    </div>
  );
};

export default Logout;
