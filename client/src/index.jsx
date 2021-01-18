import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './components/App.jsx';
import setInitialProductList from './actions/productDetail/InitialProductList.js';

ReactDOM.render(
  <Provider store={store}>
    <App teamName='Financier' />
  </Provider>,
  document.getElementById('app'),
  () => setInitialProductList()(store.dispatch)
);
