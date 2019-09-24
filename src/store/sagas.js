import { all } from 'redux-saga/effects';
import postUserWatcher from '../containers/RegisterUsers/store/sagas';
import loginUserWatcher from '../containers/UserLogin/store/sagas';

export default function* rootSaga() {
  yield all([postUserWatcher(), loginUserWatcher()]);
}
