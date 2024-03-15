import React, { Component } from 'react'
import { ordersData } from '../../public/data/dummyData';

export default class ViewDetails extends Component {
   
  render() {
    const { orderID } = this.props;
    const order = ordersData.find(order => order.orderId === orderID);
    return (
      <div>
         <h2>Order Details</h2>
        <p>Order ID: {order.OrderId}</p>
        <p>Customer Name: {order.CustomerName}</p>
        <p>Customer Name: {order.TotalAmount}</p>
        <p>Customer Name: {order.Location}</p>
        <p>Customer Name: {order.Status}</p>
        <p>Customer Name: {order.OrderItems}</p>

      </div>
    )
  }
}
