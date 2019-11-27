import { call, put, takeLatest } from "redux-saga/effects";
//actions
import {
  POST_PACKAGE_REQUEST,
  postPackageSuccess,
  postPackageFailure
} from "./actions";

//api
import Api from "../../../services/Api";

export default function* addPackagesWatcher() {
  yield takeLatest(POST_PACKAGE_REQUEST, addPackages);
}

export function* addPackages(action) {
  try {
    const { packages } = action.payload;
    const response = yield call(Api.postPackages, packages);
    yield put(postPackageSuccess(response.data));
  } catch (error) {
    console.log(error.response, "error.response");

    yield put(postPackageFailure(error));
  }
}
