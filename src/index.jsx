import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Router, browserHistory, IndexRedirect } from 'react-router';
import {Provider} from 'react-redux';
import createRootRoute from './router/routes';
import configureStore from './store/configureStore';
import {default as sagaMiddleware, registerSagas} from './middleware/saga';

//Needed for React Developer Tools
window.React = React;

injectTapEventPlugin();

const store = configureStore({}, [sagaMiddleware]);
registerSagas();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={createRootRoute(store)}/>
  </Provider>,
  document.getElementById("root")
);