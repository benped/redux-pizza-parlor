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
    } else if(action.type === 'REMOVE_PIZZA') {
        state = [...state];
        const pizzaToDelete = action.payload;
        console.log('remove pizza state is', state);
        console.log('pizzaToDelete is', action.payload);
        function deletePizza (pizza){
            return pizza.id !==pizzaToDelete.id;
        }
        const result = state.filter(deletePizza);
        console.log('result is', result);
        return result;
         
    }
    return state;
}

const customerReducer = (state = '', action) => {
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
