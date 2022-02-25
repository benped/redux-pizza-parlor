import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './Pizza.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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
            </div >
            
            <Box sx={{ p: 10 }}>
            <Link  to="/customerform"><Button variant="contained" size="large" p={10}>Next</Button></Link>

            </Box>
            </div>
        )
    }

export default Pizza;


