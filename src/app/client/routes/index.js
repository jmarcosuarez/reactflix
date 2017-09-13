import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import { HomePage, ErrorPage } from '../containers';

export default function Routes() {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={HomePage} />

      <Route path="505" error="505" component={ErrorPage} />
      {/* path="*" Should stay at the bottom */}
      <Route path="*" error="404" component={ErrorPage} />
    </Route>
  );
}
