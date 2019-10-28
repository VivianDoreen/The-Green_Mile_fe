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
    console.log(packages, "PackagesSaga");
    const response = yield call(Api.postPackages, packages);
    console.log(response, "ResponsePackages");
    yield put(postPackageSuccess(response));
  } catch (error) {
    console.log(error.response, "error");

    yield put(postPackageFailure(error));
  }
}
