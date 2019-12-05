import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_PACKAGES_REQUEST,
  FETCH_SUPPLIER_PACKAGES_REQUEST,
  FETCH_RECIPIENT_PACKAGES_REQUEST,
  ADD_PACKAGE_TYPE_REQUEST,
  addPackageTypeSuccess,
  addPackageTypeFailure,
  fetchPackagesSuccess,
  fetchPackagesFailure,
  fetchSupplierPackagesSuccess,
  fetchSupplierPackagesFailure,
  fetchRecipientPackagesSuccess,
  fetchRecipientPackagesFailure
} from "./actions";

import Api from "../../../services/Api";

export default function* fetchPackagesWatcher() {
  yield takeLatest(FETCH_PACKAGES_REQUEST, fetchPackages);
  yield takeLatest(ADD_PACKAGE_TYPE_REQUEST, addPackageTypeRequest);
  yield takeLatest(
    FETCH_SUPPLIER_PACKAGES_REQUEST,
    fetchSupplierPackageRequest
  );
  yield takeLatest(
    FETCH_RECIPIENT_PACKAGES_REQUEST,
    fetchRecipientPackageRequest
  );
}

export function* fetchPackages(action) {
  try {
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

export function* fetchSupplierPackageRequest(action) {
  try {
    const response = yield call(Api.fetchSupplierPackages);
    yield put(fetchSupplierPackagesSuccess(response.data.message));
  } catch (error) {
    yield put(fetchSupplierPackagesFailure(error.response));
  }
}

export function* fetchRecipientPackageRequest(action) {
  try {
    const response = yield call(Api.fetchRecipientPackages);
    console.log(response, "response");

    // yield put(fetchRecipientPackagesSuccess(response.data.message));
  } catch (error) {
    console.log(error.response, "error.response");
    // yield put(fetchRecipientPackagesFailure(error.response));
  }
}
