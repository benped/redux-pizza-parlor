import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import Pizza from "../Pizza/Pizza.jsx";
// import CustomerForm from "../CustomerForm/CustomerForm.jsx";
import Checkout from "../Checkout/Checkout.jsx";

function App() {

  return (
    <Router>

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <p>Checkout Total (hold for later)</p>
      </header>
  
      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}
        {/* <Route path="/" exact>
         <Pizza />
        </Route>
        <Route path="/customerform" >
          <CustomerForm />
        </Route> */}
        <Route path="/checkout">
          <Checkout />
        </Route>
    </div>
    </Router>
  );
}

export default App;


// Heather - add this to /pizza at top:

// import { HashRouter as Router, Route, Link } from "react-router-dom";


// And inside the return: 

// <Link to="/customerform"><button>Next</button></Link>



// Koffi - add this to /customerform at top:

// import { HashRouter as Router, Route, Link } from "react-router-dom";


// And inside the return: 
// <Link to="/checkout"><button>Next</button></Link>



// Brandon - add this to /checkout at top: 

// import { HashRouter as Router, Route, Link } from "react-router-dom";


// and inside the return:
// <Link to="/"><button>Checkout</button></Link>