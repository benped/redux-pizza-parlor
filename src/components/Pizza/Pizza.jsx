import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './Pizza.css';

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
            <div className="container">
                {array.map((pizza) =>
                (<div key={pizza.id}>
                    <PizzaItem pizza={pizza}/>
                </div>)
                )}
            </div>
            <Link to="/customerform"><button>Next</button></Link>
            </div>
        )
    }

export default Pizza;


