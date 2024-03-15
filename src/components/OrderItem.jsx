// import React, { Component } from 'react'
// import { ordersData } from '../../public/data/dummyData';

// export default class OrderItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orders: ordersData
//     };
//   }
//   detailsBtn(orderId){
//         const order = this.state.orders.find(order => order.orderId === orderId);
//           alert(
//             JSON.stringify({
//               "Order ID": order.orderId,
//               "Customer Name": order.CustomerName,
//               "Location": order.Location,
//               "Order Items": order.OrderItems,
//               "Amount":order.TotalAmount
//             })
           
//           );
//   }

//   deleteBtn(orderIdToDelete){
//     const updatedOrders = this.state.orders.filter(order => order.orderId !== orderIdToDelete);
//     this.setState({ orders: updatedOrders });
//   }
//   render() {
//     let {orderId,totalAmount,Status}=this.props;
//     return (
//       <div>
//         <div className="card" style={{width:'15vw', height:'15vw', marginTop:'10vh',backgroundColor:'c77dff',fontFamily:'Manrope sans-serif'}}>
//             <h4><b style={{fontFamily:"Nanum Gothic Coding sans-serif", fontSize:"18px"}}>Order ID : {this.props.orderID}</b></h4>
//            Total Amount : {this.props.totalAmount}<br/>
//             Status : {this.props.Status}<br/>
//             <button type="button" class="btn  btn-sm" onClick={() => this.detailsBtn(this.props.orderId)}>View Details</button>
//             <button type="button" class="btn  btn-sm" >Update Status</button>
//             <button type="button" class="btn btn-sm" onClick={()=>this.deleteBtn(this.props.orderId)}> Delete Order</button>
//           </div>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order,
      // isDropdownVisible: false,
      // selectedValue: 'Select an option',
    };
  }

  detailsBtn = () => {
    // const order = this.state.order;
    const order = this.state.order;
    alert(
      JSON.stringify({
        OrderID: order.OrderID,
        CustomerName: order.CustomerName,
        Location: order.Location,
        OrderItems: order.OrderItems,
        Amount: order.TotalAmount
      })
    );
  }

  // deleteBtn = (orderIdToDelete) => {
  //   if (orderIdToDelete === this.state.order.orderId) {
  //     this.setState({ order: null });
  //   }
  // }

  handleDropdownClick = (event) => {
    this.setState({ isDropdownVisible: !this.state.isDropdownVisible, selectedValue: event.target.innerText });
  }

  render() {
    const { order } = this.state;
    if (!order) return null;

    return (
      <div>
        <div className="card" style={{ width: '15vw', height: '15vw', marginTop: '10vh', backgroundColor: 'c77dff', fontFamily: 'Manrope sans-serif' }}>
          <h4><b style={{ fontFamily: "Nanum Gothic Coding sans-serif", fontSize: "18px" }}>Order ID : {order.OrderID}</b></h4>
          Total Amount : {order.TotalAmount}<br />
          Status : {order.Status}<br />
          <button type="button" class="btn  btn-sm" onClick={this.detailsBtn}>View Details</button>
          <button type="button" class="btn  btn-sm">Update Status</button>
          <button type="button" class="btn btn-sm"  onClick={() => this.deleteBtn(this.props.orderID)}> Delete Order</button>
        </div>
      </div>
    )
  }
}

{/* <button type="button" class="btn  btn-sm" onClick={this.handleDropdownClick}>{this.state.selectedValue}</button>
{this.state.isDropdownVisible && (
  <div className="dropdown-content">
    <a href="#" onClick={(e) => this.handleDropdownClick(e)}>Option 1</a>
    <a href="#" onClick={(e) => this.handleDropdownClick(e)}>Option 2</a>
    <a href="#" onClick={(e) => this.handleDropdownClick(e)}>Option 3</a>
  </div>
)} */}