//react
import React from 'react';

//third party libraries
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import RegisterUsers from '../RegisterUsers';
import UserLogin from '../UserLogin';
import AdminPage from '../AdminPage';
import Packages from '../Packages';
import ViewUsers from '../ViewUsers';
import ViewSinglePackage from '../ViewSinglePackage';
import PageNotFound from './PageNotFound';
import AddPackages from '../AddPackages';
import SupplierPage from '../SupplierPage';
import GeneralLayout from '../../components/GeneralLayout';
import Header from '../Header';
import SideMenu from '../../components/SideMenu';
import PrivateRoute from '../PrivateRoute';
import Loader from '../Loader';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Track from '../Track';
import ViewSupplierPackages from '../ViewSupplierPackages';
import Recipient from '../Recipient';
import SelectedPackages from '../SelectedPackages';
// third party libraries
import { connect } from 'react-redux';

const App = (props) => {
	const { token } = props.auth;
	console.log(token, 'token');

	return (
		<React.Fragment>
			<div className='mainDiv'>
				<Router>
					<Header />
					{token ? <SideMenu /> : ''}
					<Switch>
						<Route path='/' exact component={UserLogin} />
						<Route path='/about' exact component={About} />
						<Route path='/contact' exact component={Contact} />
						<Route path='/track' exact component={Track} />
						<PrivateRoute path='/admin' component={AdminPage} />
						<PrivateRoute path='/register' component={RegisterUsers} />
						<PrivateRoute path='/packages' exact component={Packages} />
						<PrivateRoute path='/viewUsers' component={ViewUsers} />
						<PrivateRoute path='/packages/:id' component={ViewSinglePackage} />
						<PrivateRoute path='/addPackages' component={AddPackages} />
						<PrivateRoute path='/supplier' component={SupplierPage} />
						<PrivateRoute path='/layout' component={GeneralLayout} />
						<PrivateRoute path='/loader' component={Loader} />
						<PrivateRoute path='/recipient' component={Recipient} />
						<PrivateRoute path='/viewSupplierPackages' component={ViewSupplierPackages} />
						<PrivateRoute path='/selectedPackages' component={SelectedPackages} />
						<PrivateRoute component={PageNotFound} />
					</Switch>
				</Router>
				<ToastContainer autoClose={3000} hideProgressBar />
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.loginReducer
	};
};

export default connect(mapStateToProps)(App);
