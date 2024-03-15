import React, { Component } from 'react'
import { productsData } from '../../public/data/dummyData'
import { Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

export default class ProductPieChart extends Component {
    constructor(props){
        super(props);
           this.state= {
                products:[],
        };
    }
    componentDidMount(){
        this.setState({products: productsData});
        console.log(productsData);
        Chart.register(...registerables);
    };
  render() {
    const { products } = this.state;

    // Extract unique order statuses
    const distinctProduct = [...new Set(products.map(product => product.Category))];

    // Count occurrences of each order status
    const categoryCount= distinctProduct.map(category =>
        products.filter(product => product.Category === category).length
    )
    const data = {
        labels: distinctProduct,
        datasets: [
            {
                data: categoryCount,
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
                  ]
            },
        ],
    };
    return (
      <div>
        <Pie data={data} />
      </div>
    )
  }
}
