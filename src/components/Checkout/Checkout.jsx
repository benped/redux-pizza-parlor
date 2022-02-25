import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Checkout.css';


function Checkout() {

    const customer = useSelector(store => store.customerReducer);
    const cart = useSelector(store => store.pizzaReducer);

    const history = useHistory();

    let total = 0; 

    for (let pizza of cart){
        total+= Number(pizza.price);
    }

    console.log('This is the total', total);

    const handleCheckout = () => {
        console.log('Checkout Button Clicked');
        console.log('Customer is', customer);
        console.log('cart is', cart);
        let pizzaArray = [];
        for (let i of customer[0].pizza){
            console.log('This is the pizzas stored in reducer',i);
            pizzaArray.push({id: i.id, quantity: 1})
        }


        axios.post('api/order',
            {
                customer_name: customer[0].customer_name,
                street_address: customer[0].street_address,
                city: customer[0].city,
                zip: customer[0].zip,
                type: customer[0].type,
                total: total,
                pizzas: pizzaArray
            }).then(response => {
                console.log('We posted the stuff', response);
                history.push('/');
            }).catch(error => {
                console.log('Failed to add the order', error);
            })
    }

    return (
        <div>
            <h3>Step 3: Checkout</h3>
            <div className="customerInfo">
                <div id="customerAddress">
                    <p>{customer[0].customer_name}</p>
                    <p>{customer[0].street_address}</p>
                    <p>{customer[0].city} {customer[0].zip}</p>
                </div>
                <div id="orderType">
                    <h4>{customer[0].type}</h4>
                </div>
            </div>
            <div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((pizza, i) => (
                            <tr key={i}>
                                <td>{pizza.name}</td>
                                <td>{pizza.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="subTotal">
                <h3>Total: {total}</h3>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>

    )
}

export default Checkout;