import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
ReactDOM.render( <Provider store={createStoreWithMiddleware(reducers)}><App/>

</Provider>, document.getElementById('root'));


