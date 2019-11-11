import { combineReducers } from "redux";
import mileUsers from "../containers/RegisterUsers/store/reducers";
import loginReducer from "../containers/UserLogin/store/reducers";
import packageReducer from "../containers/Packages/store/reducers";
import singlePackageReducer from "../containers/ViewSinglePackage/store/reducers";
import addPackagesReducer from "../containers/AddPackages/store/reducers";

const rootReducer = combineReducers({
  mileUsers,
  loginReducer,
  packageReducer,
  singlePackageReducer,
  addPackagesReducer
});

export default rootReducer;
