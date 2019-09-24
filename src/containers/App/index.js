import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterUsers from '../RegisterUsers';
import UserLogin from '../UserLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={UserLogin} />
        <Route path="/register" component={RegisterUsers} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
