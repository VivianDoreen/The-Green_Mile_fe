import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_PACKAGES_REQUEST,
  fetchPackagesSuccess,
  fetchPackagesFailure
} from "./actions";

import API from "../../../services/Api";

export default function* fetchPackagesWatcher() {
  yield takeLatest(FETCH_PACKAGES_REQUEST, fetchPackages);
}

export function* fetchPackages(action) {
  try {
    const response = yield call(API.fetchPackages);
    console.log(response, "responseAPI");
    yield put(fetchPackagesSuccess(response.data.Packages));
  } catch (error) {
    console.log(error.response, "response");
    yield put(fetchPackagesFailure(error.response));
  }
}
