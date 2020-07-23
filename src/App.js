import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

// containers
import CustomerDetails from './containers/customerDetails.js';
import CustomerAddresses from './containers/customerAddresses.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => { return <Redirect to='/customers'/> }} />
        <Route component={CustomerDetails} exact path='/customers' />
        <Route component={CustomerAddresses} exact path='/customers/:customerId' />
      </Router>
    </div>
  );
}

export default App;
