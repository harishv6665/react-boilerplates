import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './commons/reducers/reducers';
import rootSaga from './commons/sagas/counter.saga';
import './global.css';
import Home from './pages/Home/Home';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);


render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
