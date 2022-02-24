import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';

function Pizza() {
    useEffect(()=> {
        getPizzas();
    }, [])

    
    const [array, setArray] = useState([]);

    const getPizzas = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
            console.log('response.data is', response.data);
            setArray(response.data);
        }).catch((error) => {
            console.log('Error GETting data', error);
        })
    }
        return (

            <div>
                <h1>Hello</h1>
                {array.map((pizza) =>
                (<div key={pizza.id}>
                    <PizzaItem pizza={pizza}/>
                </div>)
                )}
            </div>
        )
    }

export default Pizza;

