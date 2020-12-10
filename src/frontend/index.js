import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './routes/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;
console.log (`INDEX JS PRELOADED STATE = ${JSON.stringify(preloadedState)}`)
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
const history = createBrowserHistory();

console.log(`INDEX .JS Preloaded store: ${ JSON.stringify({preloadedState })}`)
console.log(`INDEX .JS store: ${ JSON.stringify({store})}`)


delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App isLogged={(preloadedState.user.id)} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
