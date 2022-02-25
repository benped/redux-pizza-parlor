import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// redux stuff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'ADD_PIZZA') {
        return [...state, action.payload];
    } 
    return state;
}

const customerReducer = (state = [], action) => {
    console.log('I AM THE MANAGER!');

    if(action.type === 'ADD_CUSTOMER'){
        return [action.payload];
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
