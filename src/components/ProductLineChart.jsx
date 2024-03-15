import React, { Component } from 'react'
import { productsData } from '../../public/data/dummyData';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
// export default class ProductLineChart extends Component {
//     constructor(props){
//         super(props);
//            this.state= {
//                 products:[],
//         };
//     }
//     componentDidMount(){
//         this.setState({ products: productsData});
//         console.log(productsData);
//     };
//   render() {
//     const {products } = this.state;
//         const minProductAmount = Math.min(...products.map(product => product.Cost));
//         const maxProductAmount = Math.max(...products.map(product => product.Cost));
//         const sum = productsData.reduce((accumulator, currentValue) => accumulator + currentValue.Cost, 0);
//         const number=productsData.length;
//         const average= (sum/number).toFixed(2);
//         const data = {
//             labels:["Minimum","Average","Maximum"],
//             datasets: [
//               {
//                 label:'',
//                 data:[minProductAmount,average,maxProductAmount],
//                 fill:true,
//                 backgroundColor:'#e0aaff',
//                 bProductColor: '#7b2cbf',
//                 tension:1
//               }
//             ]
//           };
//           const options={
//             scales: {
//             x: {
//               ticks: {
//                 color: '#9d4edd', // Change the color of x-axis labels here
//               },
//             },
//             y: {
//               ticks: {
//                 color: '#9d4edd', // Change the color of x-axis labels here
//               },
//             }
//           }
//         }
//     return (
//       <div>
//         <Line data={data}/>
//       </div>
//     )
//   }
// }



class ProductLineChart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ products: productsData });
    console.log(productsData);
    Chart.register(...registerables);
  }

  render() {
    const { products } = this.state;
    const minProductAmount = Math.min(...products.map((product) => product.Cost));
    const maxProductAmount = Math.max(...products.map((product) => product.Cost));
    const sum = products.reduce((accumulator, currentValue) => accumulator + currentValue.Cost, 0);
    const number = products.length;
    const average = (sum / number).toFixed(2);
    console.log(sum);
    console.log(number);

    const data = {
      labels: ['Minimum', 'Average', 'Maximum'],
      datasets: [
        {
          label:'Product Cost',
          data: [minProductAmount, average, maxProductAmount],
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
        <Line data={data} style={{height:'200px'}} />
        <div style={{color:'#3c096c', left:1}}>
          Average Amount: {average}
          <br/>
          Minimum Amount:{minProductAmount}<br/>
          Maximum Amount:{maxProductAmount}
          </div>
      </div>
    );
  }
}

export default ProductLineChart;