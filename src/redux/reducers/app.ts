import { createReducer, createActions } from 'reduxsauce';

import { HYDRATE } from 'next-redux-wrapper';

import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  initializeAppRequest: [],
  initializeAppSuccess: ['data'],
  initializeAppError: ['error'],
});

export interface AppState {
  loading: boolean;
  error: any;
  data: any;
}

const INITIAL_STATE = Immutable<AppState>({
  loading: false,
  error: {},
  data: [],
});

const hydrate = (
  state = INITIAL_STATE,
  { payload: { app } }: { payload: { app: AppState } }
) => state.merge(app);

const appRequests = (state = INITIAL_STATE) => state.set('loading', true);

const appErrors = (state = INITIAL_STATE, { error = {} }: any) =>
  state.merge({ error, loading: false });

const initializeAppSuccess = (state = INITIAL_STATE, { data }: any) =>
  state.merge({ data });

export default createReducer(INITIAL_STATE, {
  [HYDRATE]: hydrate,
  [Types.INITIALIZE_APP_REQUEST]: appRequests,
  [Types.INITIALIZE_APP_SUCCESS]: initializeAppSuccess,
  [Types.INITIALIZE_APP_ERROR]: appErrors,
});
