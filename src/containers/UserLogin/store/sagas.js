import { takeLatest, put, call } from "redux-saga/effects";
import {
  LOGIN_USER_REQUEST,
  loginUserSuccess,
  loginUserFailure
} from "./actions";
import Api from "../../../services/Api";

export default function* loginUserWatcher() {
  yield takeLatest(LOGIN_USER_REQUEST, loginUser);
}
export function* loginUser(action) {
  try {
    const { data } = action.payload;
    const response = yield call(Api.getUser, data);
    yield put(loginUserSuccess(response));
  } catch (error) {
    console.log(error, "ERROR");

    yield put(loginUserFailure(error.response.data));
  }
}
