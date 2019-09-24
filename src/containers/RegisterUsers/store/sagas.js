import { takeLatest, call, put } from 'redux-saga/effects';
import { POST_USER_REQUEST, postUserSuccess, postUserFailure } from './actions';
import Api from '../../../services/Api';
import { toast } from 'react-toastify';

export default function* postUserWatcher() {
  yield takeLatest(POST_USER_REQUEST, postUser);
}

export function* postUser(action) {
  try {
    const { data } = action.payload;

    const response = yield call(Api.postUsers, data);
    console.log(response, 'Reaxjing here');

    yield put(postUserSuccess(response));
  } catch (error) {
    yield put(postUserFailure(error));
  }
}
