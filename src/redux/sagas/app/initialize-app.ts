import { put, takeLatest } from 'redux-saga/effects';

import { Creators, Types } from '../../reducers/app';

function* initializeAppRequest() {
  try {
    console.log('#################### SAGA #####################');

    // Acesso a store aqui...
    // const state = yield select(getState);

    // Chamadas API aqui...
    // const data = yield call(axios.get, 'https://api.domain.com');

    yield put(
      Creators.initializeAppSuccess([
        { title: 'SSR', content: 'renderizado no servidor' },
        { title: 'SAGA', content: 'a SAGA foi chamada no servidor' },
      ])
    );
  } catch (error) {
    yield put(Creators.initializeAppError(error));
  }
}

export default function* watch() {
  yield takeLatest(Types.INITIALIZE_APP_REQUEST, initializeAppRequest);
}
