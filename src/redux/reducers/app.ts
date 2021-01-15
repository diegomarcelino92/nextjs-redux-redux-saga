import { createReducer, createActions } from 'reduxsauce'

import { HYDRATE } from 'next-redux-wrapper'

import Immutable from 'seamless-immutable'

export const { Types, Creators } = createActions({
  initializeApp: [''],
})

interface AppState {
  loading: boolean
}

const INITIAL_STATE = Immutable<AppState>({
  loading: false,
})

const hydrate = (
  state = INITIAL_STATE,
  { payload: { app } }: { payload: { app: AppState } }
) => state.merge(app)

export default createReducer(INITIAL_STATE, {
  [HYDRATE]: hydrate,
})
