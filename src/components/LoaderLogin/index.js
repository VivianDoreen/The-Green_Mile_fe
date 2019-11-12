//react
import React from "react";
//scss
import "../../styles/components/loader.scss";
// export const Loader = () => <div className="lds-dual-ring" />;

const LoaderLogin = () => (
  <div class="browser-screen-loading-content">
    <div class="loading-dots dark-gray">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
);

export default LoaderLogin;
