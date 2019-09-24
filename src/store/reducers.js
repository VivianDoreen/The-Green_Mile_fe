import { combineReducers } from 'redux';
import mileUsers from '../containers/RegisterUsers/store/reducers';
import loginReducer from '../containers/UserLogin/store/reducers';

const rootReducer = combineReducers({
  mileUsers,
  loginReducer
});

export default rootReducer;
