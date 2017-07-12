/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Stream from './components/Stream';

const tracks = [
  {
    title: 'Some track',
  },
  {
    title: 'Some other track',
  },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Stream} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app'),
);

