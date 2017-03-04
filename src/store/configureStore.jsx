import { createStore, applyMiddleware } from 'redux'
import reducerTree from '../reducers';

export default function configureStore(initialState, middlewares) {

  const store = createStore(
    reducerTree,
    initialState,
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
