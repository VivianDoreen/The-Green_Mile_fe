//sagas
import { takeLatest, call, put } from "redux-saga/effects";

//api
import Api from "../../../services/Api";

//actions
import {
  FETCH_SINGLE_PACKAGE_REQUEST,
  fetchSinglePackageSuccess,
  fetchSinglePackageFailure
} from "./actions";

export default function* viewSinglePackageWatcher() {
  yield takeLatest(FETCH_SINGLE_PACKAGE_REQUEST, viewSinglePackage);
}

function* viewSinglePackage(action) {
  try {
    const { package_id } = action.payload;
    const response = yield call(Api.fetchSinglePackage, package_id);
    yield put(fetchSinglePackageSuccess(response.data.package[0]));
  } catch (error) {
    yield put(fetchSinglePackageFailure(error));
  }
}
