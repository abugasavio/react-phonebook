import React        from 'react';
import {
  Router,
  Route,
  IndexRoute
  // browserHistory
}                   from 'react-router';
import { App }      from '../containers';
import {
  Home,
  About,
  Components,
  Contacts
}                   from '../views';

import store, { history } from '../store';
import { Provider } from 'react-redux';

export const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/components" component={Components} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Route>
      </Router>
    </Provider>
  );
};
