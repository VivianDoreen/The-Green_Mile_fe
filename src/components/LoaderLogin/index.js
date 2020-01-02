//react
import React from "react";
//scss
import "../../styles/components/loader.scss";
// export const Loader = () => <div className="lds-dual-ring" />;

const LoaderLogin = () => (
  <div className="browser-screen-loading-content">
    <div className="loading-dots dark-gray">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
);

export default LoaderLogin;
