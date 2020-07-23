import React, { Component } from 'react';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {addresses: []};
  }

  componentDidMount () {
    this.fetchCustomerAddresses();
  }

  async fetchCustomerAddresses () {
    // instead of using mock data json, use the API endpoint to fetch real data
    const data = await fetch('./customerAddresses.json');
    const customerData = await data.json();
    this.setState({ customers: customerData.customers })
  }

  render () {
    return (
      <div className="customer-row">
        <div>{this.props.customerData.customerId}</div>
        <div>{this.props.customerData.customerName}</div>
        <div>{this.props.customerData.customerAge}</div>
        <div>{this.props.customerData.customerSex}</div>
      </div>
    );
  }
}

export default Customer