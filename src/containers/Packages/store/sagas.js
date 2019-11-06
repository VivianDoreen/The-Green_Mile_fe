import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_PACKAGES_REQUEST,
  ADD_PACKAGE_TYPE_REQUEST,
  addPackageTypeSuccess,
  addPackageTypeFailure,
  fetchPackagesSuccess,
  fetchPackagesFailure
} from "./actions";

import Api from "../../../services/Api";

export default function* fetchPackagesWatcher() {
  yield takeLatest(FETCH_PACKAGES_REQUEST, fetchPackages);
  yield takeLatest(ADD_PACKAGE_TYPE_REQUEST, addPackageTypeRequest);
}

export function* fetchPackages(action) {
  try {
    console.log(localStorage.getItem('token'), 'inSagas');
    const response = yield call(Api.fetchPackages);
    yield put(fetchPackagesSuccess(response.data.Packages));
  } catch (error) {
    yield put(fetchPackagesFailure(error.response));
  }
}

export function* addPackageTypeRequest(action) {
  try {
    const { packageType } = action.payload;
    const response = yield call(Api.addPackageType, packageType);
    yield put(addPackageTypeSuccess(response.data));
  } catch (error) {
    yield put(addPackageTypeFailure(error));
  }
}
