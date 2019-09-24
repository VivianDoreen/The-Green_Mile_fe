import { combineReducers } from 'redux';
import mileUsers from '../containers/Users/store/reducers';

const rootReducer = combineReducers({
  mileUsers
});

export default rootReducer;
