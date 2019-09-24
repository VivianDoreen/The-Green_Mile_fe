import { all } from 'redux-saga/effects';
import postUserWatcher from '../containers/Users/store/sagas';

export default function* rootSaga() {
  yield all([postUserWatcher()]);
}
