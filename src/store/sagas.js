import { all } from "redux-saga/effects";
import postUserWatcher from "../containers/RegisterUsers/store/sagas";
import loginUserWatcher from "../containers/UserLogin/store/sagas";
import fetchPackagesWatcher from "../containers/Packages/store/sagas";
import viewSinglePackageWatcher from "../containers/ViewSinglePackage/store/sagas";
import addPackagesWatcher from "../containers/AddPackages/store/sagas";

export default function* rootSaga() {
  yield all([
    postUserWatcher(),
    loginUserWatcher(),
    fetchPackagesWatcher(),
    viewSinglePackageWatcher(),
    addPackagesWatcher()
  ]);
}
