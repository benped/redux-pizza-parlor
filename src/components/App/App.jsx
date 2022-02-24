import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Pizza from "../Pizza/Pizza.jsx";
import CustomerForm from "../CustomerForm/CustomerForm.jsx";
import Checkout from "../Checkout/Checkout.jsx";

function App() {

  return (
    <Router>

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <p>Checkout Total (hold for later></p>
      </header>
  
      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}
        <Route path="/" exact>
         <Pizza />
        </Route>
        <Route >
          <CustomerForm path="/customerform"/>
        </Route>
        <Route>
          <Checkout path="/checkout"/>
        </Route>
    </div>
    </Router>
  );
}

export default App;
