import { createStore } from 'redux'
import rootReducer from '../reducers'

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose

// const middlewares = [thunkMiddleware]

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(require('redux-logger').createLogger())
// }

// const enhancer = composeEnhancers(
//   applyMiddleware(...middlewares)
//   // other store enhancers if any
// )

export default function configStore() {
  const store = createStore(rootReducer)
  return store
}