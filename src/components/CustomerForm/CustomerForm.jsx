import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


function CustomerForm() {

    const history = useHistory()

    //initialize dispatch
    const dispatch = useDispatch()

    // initialize usestate variables
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [received, setReceived] = useState('')



    const handleSubmit = (event) => {

        event.preventDefault();

        const customer = {
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip,
            type: received,
            total: '',
            pizza: []
        }
        console.log('we are now submitting', customer);

        // sending customer data into the customer reducer
        dispatch({
            type: 'ADD_CUSTOMER',
            payload: customer
        })
        history.push("/checkout")
    }// end handleSubmit 

    return (
        <>
            <form  onSubmit={handleSubmit}>
                <h1>Step 2: Customer Information</h1>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
                <input
                    type="text"
                    placeholder="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)} />
                <input
                    type="text"
                    placeholder="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)} />
                <input
                    type="text"
                    placeholder="zip"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)} />
                <div>
                    <input type="radio"
                        name='received'
                        onChange={() => setReceived('delivery')} />
                    <label htmlFor="">Delivery</label>
                    <input type="radio"
                        name='received'
                        onChange={() => setReceived('pickup')} />
                    <label htmlFor="">Pick-up</label>
                </div>
            <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default CustomerForm

