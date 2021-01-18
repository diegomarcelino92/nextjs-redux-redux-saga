import { all, fork } from 'redux-saga/effects';

import initializeApp from './initialize-app';

function* appSagas() {
  yield all([fork(initializeApp)]);
}

export default appSagas;
