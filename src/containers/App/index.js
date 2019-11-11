//react libraries
import React from "react";
import { Route, Switch } from "react-router-dom";

//third party libraries
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";

//components
import RegisterUsers from "../RegisterUsers";
import UserLogin from "../UserLogin";
import AdminPage from "../AdminPage";
import Packages from "../Packages";
import ViewUsers from "../ViewUsers";
import ViewSinglePackage from "../ViewSinglePackage";
import PageNotFound from "./PageNotFound";
import AddPackages from "../AddPackages";
import SupplierPage from "../SupplierPage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={UserLogin} />
          <Route path="/register" component={RegisterUsers} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/packages" component={Packages} />
          <Route path="/viewUsers" component={ViewUsers} />
          <Route path="/viewSinglePackage/:id" component={ViewSinglePackage} />
          <Route path="/addPackages" component={AddPackages} />
          <Route path="/supplier" component={SupplierPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
