import { createStore }          from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory }       from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  contacts: [{name:'savio', phoneNumber: '0727843600'}]
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
