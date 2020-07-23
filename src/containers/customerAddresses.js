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
    const data = await fetch(process.env.PUBLIC_URL + '/customerAddresses.json');
    const customerData = await data.json();
    this.setState({ addresses: customerData.addresses[this.props.match.params.customerId] })
  }

  render () {
    const addresses = this.state.addresses.map(address => {
      return <div key={address}>{address}</div>
    })
    return (
      <div>
        <div className="title-bar address-bar">
          <div>Customer Id</div>
          <div>Customer Addresses</div>
        </div>
        <div className="address-bar">
          <div>{this.props.match.params.customerId}</div>
          <div>{addresses}</div>
        </div>
      </div>
    );
  }
}

export default Customer