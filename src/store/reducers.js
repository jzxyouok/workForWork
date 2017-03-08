import { combineReducers } from 'redux'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location : locationReducer,
    ...asyncReducers
  })
}

// first inject then makeRootReducer. 先注入，再制作reducer
export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
	//刷新store的reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
