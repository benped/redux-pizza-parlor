import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// redux stuff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
    console.log('mmm pizza');
    return state;
}

const customerReducer = (state = [], action) => {
    console.log('I AM THE MANAGER!');
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
