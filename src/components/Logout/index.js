//react
import React from "react";

//scss
import "../../styles/components/logout.scss";

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
