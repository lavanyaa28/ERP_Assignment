import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import { ordersData } from '../../public/data/dummyData';
import { Chart, registerables } from 'chart.js';

export default class PieChart extends Component {
  constructor(props){
    super(props);
       this.state= {
            orders:[],
    };
}
componentDidMount(){
    this.setState({ orders: ordersData});
    console.log(ordersData);
    Chart.register(...registerables);
};
  render() {
    const { orders } = this.state;

    // Extract unique order statuses
    const distinctOrderStatus = [...new Set(orders.map(order => order.Status))];

    // Count occurrences of each order status
    const statusCounts = distinctOrderStatus.map(status =>
        orders.filter(order => order.Status === status).length
    );

    // Create data for the pie chart
    const data = {
        labels: distinctOrderStatus,
        datasets: [
            {
                data: statusCounts,
                borderWidth: 1,
                backgroundColor: [
                    '#e0aaff',
                    '#c77dff',
                    '#9d4edd',
                    '#7b2cbf',
                    '#5a189a'
                  ],
                  borderColor: [
                    '#e0aaff',
                    '#c77dff',
                    '#9d4edd',
                    '#7b2cbf',
                    '#5a189a'
                    // Add more colors if needed
                  ]
            },
        ],
    };
    const options={
      legend:{
        position:'bottom'
      }
    };
    return (
      <div>
        <Pie data={data} options={options} style={{height:'200px', width:'40vw'}}/>
      </div>
    )
  }
}
