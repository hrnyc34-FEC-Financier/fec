import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer.jsx';

const states = {

}


const store = createStore(
  rootReducer,
  states ,
  applyMiddleware( thunk )
);
export default store;