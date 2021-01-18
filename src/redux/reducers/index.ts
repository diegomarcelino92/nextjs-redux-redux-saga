import { combineReducers } from 'redux';

import app, { AppState } from './app';

export interface State {
  app: AppState;
}

const rootReducer = combineReducers({
  app,
});

export default rootReducer;
