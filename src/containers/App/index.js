import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';

import RegisterUsers from '../RegisterUsers';
import UserLogin from '../UserLogin';
import AdminPage from '../AdminPage';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={UserLogin} />
          <Route path="/register" component={RegisterUsers} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </Router>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
