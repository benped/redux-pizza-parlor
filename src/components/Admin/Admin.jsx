import axios from "axios";
import './Admin.css';
import React, { useState, useEffect } from "react";

function Admin() {
  let [renderPizzas, setRenderPizzas] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    getOrders();
  }, []);

  // Get orders pulls all rows from the table "orders"
  const getOrders = () =>
    axios
      .get("/api/order")
      .then((response) => {
        setRenderPizzas(response.data);
      })
      .catch((err) => {
        console.log("Error on get orders", err);
      });

  return (<>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {renderPizzas.map(pizza => (
                        <tr key={pizza.id}>
                            <td>
                                {pizza.customer_name}
                            </td>
                            <td>
                                {/* Sliced to the date, no time yet */}
                                {pizza.time.slice(0,10)}
                            </td>
                            <td>
                                {pizza.type}
                            </td>
                            <td>
                                ${pizza.total}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  
  </>);
}

export default Admin;
