import React, { Component, useEffect, useRef  } from 'react'
import { ordersData } from '../../public/data/dummyData';
import OrderItem from './OrderItem';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

class OrderLineChart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        orders: [],
      };
    }
  
    componentDidMount() {
      this.setState({ orders: ordersData });
      console.log(ordersData);
      Chart.register(...registerables);
    }
  
    render() {
      const { orders } = this.state;
      const minOrderAmount = Math.min(...ordersData.map((order) => order.TotalAmount));
      const maxOrderAmount = Math.max(...ordersData.map((order) => order.TotalAmount));
      const sum = ordersData.reduce((accumulator, currentValue) => accumulator + currentValue.TotalAmount, 0);
      const number = ordersData.length;
      const average = (sum / number).toFixed(2);
  
      const data = {
        labels: ['Minimum', 'Average', 'Maximum'],
        datasets: [
          {
            label: 'Order Amount',
            data: [minOrderAmount, average, maxOrderAmount],
            fill: true,
            backgroundColor: '#e0aaff',
            borderColor: '#7b2cbf',
            tension: 1,
          },
        ],
      };
  
      const options = {
        scales: {
          x: {
            ticks: {
              color: '#9d4edd', // Change the color of x-axis ticks here
            },
          },
          y: {
            ticks: {
              color: '#9d4edd', // Change the color of y-axis ticks here
            },
          },
        },
      };
  
      return (
        <div>
          <h2></h2>
          <Line data={data} options={options} style={{height:'200px'}}/>
          <div style={{color:'#3c096c',marginTop:'20px'}}>
          Average Amount: {average}
          <br/>
          Minimum Amount:{minOrderAmount}<br/>
          Maximum Amount:{maxOrderAmount}
          </div>
        </div>
      );
    }
  }
  
  export default OrderLineChart;