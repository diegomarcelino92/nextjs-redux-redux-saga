import { all, fork } from 'redux-saga/effects';

import appSagas from './app';

function* rootSaga() {
  yield all([fork(appSagas)]);
}

export default rootSaga;
