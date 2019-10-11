import { takeLatest, call, put } from "redux-saga/effects";
import { POST_USER_REQUEST, postUserSuccess, postUserFailure } from "./actions";
import Api from "../../../services/Api";

export default function* postUserWatcher() {
  yield takeLatest(POST_USER_REQUEST, postUser);
}

export function* postUser(action) {
  try {
    const { data } = action.payload;
    const response = yield call(Api.postUsers, data);
    console.log(response, "response");

    yield put(postUserSuccess(response.data.message));
  } catch (error) {
    console.log(error.response);
    yield put(postUserFailure(error.response.data.message));
  }
}
