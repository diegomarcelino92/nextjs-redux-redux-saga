import { createStore, applyMiddleware } from 'redux'

import Immutable from 'seamless-immutable'

import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'

import rootReducer from '../reducers'

export interface State {
  app: string
}

const composeMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const makeStore: MakeStore<State> = (context: Context) =>
  createStore(Immutable(rootReducer), composeMiddleware([]))

export default createWrapper<State>(makeStore, { debug: true })
