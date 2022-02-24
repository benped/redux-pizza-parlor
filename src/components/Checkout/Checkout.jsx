import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Checkout() {

const customer = useSelector(store => store.customerReducer);
const cart = useSelector(store => store.cartReducer);
const dispatch = useDispatch();


function handleCheckout() {
    console.log('Checkout Button Clicked');
    axios.post('/orders',
     {
        customer_name: customer.customer_name,
        street_address: customer.street_address,
        city: customer.city,
        zip: customer.zip,
        type: customer.type,
        total: cart.total,
        pizzas: [cart]
     }).then(response => {
         console.log('We posted the stuff', response);
     }).catch(error => {
         console.log('Failed to add the order', error);
     })
}
    return (
        <div>
            <h3>Step 3: Checkout</h3>
            <div className="customerInfo">
                <p>{customer.customer_name}</p>
                <p>{customer.street_address}</p>
                <p>{customer.city} {customer.zip}</p>

                <h4>{customer.type}</h4>
            </div>
            <div className="orderTable">
                <table>
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
                <h3>Total: </h3>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>

    )
}

export default Checkout;