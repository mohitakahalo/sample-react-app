import React, { Component } from 'react';
import Customer from '../components/customer.js'
import { NavLink } from "react-router-dom";

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {customers: []};
  }

  componentDidMount () {
    this.fetchCustomerList();
  }

  async fetchCustomerList () {
    // instead of using mock data json, use the API endpoint to fetch real data
    const data = await fetch(process.env.PUBLIC_URL + '/customerDetails.json');
    const customerData = await data.json();
    this.setState({ customers: customerData.customers })
  }

  render () {
    const customerList = this.state.customers.map(customer => {
      return <NavLink key={customer.customerId} to={`/customers/${customer.customerId}`}> <Customer customerData={customer}/> </NavLink>
    })
    return (
      <div>
        <div className="title-bar">Customer Details</div>
        <div className="customer-details">
          <div className="row-title">
            <div>Customer Id</div>
            <div>Name</div>
            <div>Age</div>
            <div>Sex</div>
          </div>
          {customerList}
        </div>
      </div>
    );
  }
}

export default CustomerDetails