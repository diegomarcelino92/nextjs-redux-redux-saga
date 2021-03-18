import { createStore, applyMiddleware, Store } from 'redux';

import { MakeStore, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import Immutable from 'seamless-immutable';

import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer, { State } from '../reducers';
import rootSagas from '../sagas';

export interface SagaStore extends Store {
  sagaTask: Task;
}

const composeMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<State> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    Immutable(rootReducer),
    composeMiddleware([sagaMiddleware])
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSagas);

  return store;
};

export default createWrapper<State>(makeStore, { debug: true });
