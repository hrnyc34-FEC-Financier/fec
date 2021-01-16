import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import App from "./components/App.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App teamName="Financier" />
  </Provider>,
  document.getElementById('app')
)