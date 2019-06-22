import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './commons/reducers/reducers';
import Home from './pages/Home/Home';
import "./global.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
