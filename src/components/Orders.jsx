import React, { Component, useEffect, useRef  } from 'react'
import { ordersData } from '../../public/data/dummyData';
import OrderItem from './OrderItem';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import OrderLineChart from './OrderLineChart';
import PieChart from './PieChart';


// export default class Orders extends Component {
//     constructor(props){
//         super(props);
//            this.state= {
//                 orders:[],
//         };
//         // this.chartRef = React.createRef();
//     }
//     componentDidMount(){
//         this.setState({ orders: ordersData});
//         console.log(ordersData);
//     };
//     // componentWillUnmount() {
//     //   // Clean up the chart when component unmounts
//     //   if (this.chartRef && this.chartRef.current) {
//     //       this.chartRef.current.chartInstance.destroy();
//     //   }
//   // }
    
//   render() {
//     const {orders}=this.state;
//     const minOrderAmount = Math.min(...ordersData.map(order => order.TotalAmount));
//     const maxOrderAmount = Math.max(...ordersData.map(order => order.TotalAmount));
//     const sum = ordersData.reduce((accumulator, currentValue) => accumulator + currentValue.TotalAmount, 0);
//     const number=ordersData.length;
//     const average= (sum/number).toFixed(2);
//     const data = {
//         labels:["Minimum","Average","Maximum"],
//         datasets: [
//           {
//             label:'',
//             data:[minOrderAmount,average,maxOrderAmount],
//             fill:true,
//             backgroundColor:'#e0aaff',
//             borderColor: '#7b2cbf',
//             tension:1
//           }
//         ]
//       };
//       const options = {
//         scales: {
//             x: {
//                 ticks: {
//                     color: '#9d4edd', // Change the color of x-axis ticks here
//                 },
//             },
//             y: {
//                 ticks: {
//                     color: '#9d4edd', // Change the color of y-axis ticks here
//                 },
//             },
//         },
//     };
    
  
//     return (
//         <div>
//             <span >
//                 <div  className="container" style={{ width: '400px', height: '300px',color:'#5a189a', marginTop:'10vh', fontFamily:'Playfair Display sans-serif' }}>
//                 {/* <Line  ref={this.chartRef} data={data} options={options} style={{height:'100px', width:'100px',color:'#7b2cbf'}}/> */}
//                 Average Cost of Orders= {average}<br/>
//                 Maximum Cost of Orders={maxOrderAmount}<br/>
//                 Minimum Cost of Orders={minOrderAmount}<br/>
//                 </div>
                
//             </span>
//         <div className="container my-2">
//             <div style={{fontFamily:'Bebas Neue sans-serif',fontSize:'30px'}}>                
//                     <b>List Of Orders</b>
//             </div>
        
//         <div className="row">
//           {ordersData.map((element)=>{
            
//             return <div className="col-md-3" key={element.OrderID}>
//             <OrderItem  orderID={element.OrderID} totalAmount={element.TotalAmount} Status={element.Status} />

//             </div>
//             }
//           )}
//         </div>

//         </div>
//         </div>
//     )
//   }
// }


// const Orders = ({ minOrderAmount, average, maxOrderAmount }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const chart = chartRef.current;
//       const newData = chart.config.data;
//       newData.datasets[0].data = [minOrderAmount, average, maxOrderAmount];
//       chart.update();
//     }
//   }, [minOrderAmount, average, maxOrderAmount]);

//   const data = {
//     labels: ['Minimum', 'Average', 'Maximum'],
//     datasets: [
//       {
//         label: '',
//         data: [minOrderAmount, average, maxOrderAmount],
//         fill: true,
//         backgroundColor: '#e0aaff',
//         borderColor: '#7b2cbf',
//         tension: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return <Line ref={chartRef} data={data} options={options} />;
// };

// export default Orders;


// Chart.register(...registerables);

// class Orders extends Component {
//   constructor(props) {
//     super(props);
//     this.chartRef = React.createRef();
//     this.state = {
//       orders: [],
//     };
//     this.chartRef = React.createRef();
//   }
//   componentDidMount(){
//       this.setState({ orders: ordersData});
//       const {orders}=this.state;
//       const minOrderAmount = Math.min(...orders.map(order => order.TotalAmount));
//       const maxOrderAmount = Math.max(...orders.map(order => order.TotalAmount));
//       const sum = orders.reduce((accumulator, currentValue) => accumulator + currentValue.TotalAmount, 0);
//       const number=orders.length;
//       const average= (sum/number).toFixed(2);
//       console.log(minOrderAmount, maxOrderAmount, sum, number, average);
//   };

//   initializeChart = () => {
//     const chart = new Chart(this.chartRef.current, {
//       type: 'line',
//       data: {
//         labels: ['Minimum', 'Average', 'Maximum'],
//         datasets: [
//           {
//             label: '',
//             data: [this.props.minOrderAmount, this.props.average, this.props.maxOrderAmount],
//             fill: true,
//             backgroundColor: '#e0aaff',
//             borderColor: '#7b2cbf',
//             tension: 1,
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//       },
//     });
//     this.chart = chart;
//   };

//   updateChartData = () => {
//     this.chart.data.datasets[0].data = [this.props.minOrderAmount, this.props.average, this.props.maxOrderAmount];
//     this.chart.update();
//   };

//   render() {
//     return <Line ref={this.chartRef} />;
//   }
// }

// export default Orders;


// Chart.register(...registerables);

// class Orders extends Component {
//   constructor(props) {
//     super(props);
//     this.chartRef = React.createRef();
//     this.state = {
//       orders: [],
//       minOrderAmount: 0,
//       maxOrderAmount: 0,
//       sum: 0,
//       number: 0,
//       average: 0,
//     };
//   }

//   componentDidMount() {
//     this.setState({ orders: ordersData });
//     const { orders } = this.state;
//     const minOrderAmount = Math.min(...orders.map(order => order.TotalAmount));
//     const maxOrderAmount = Math.max(...orders.map(order => order.TotalAmount));
//     const sum = orders.reduce((accumulator, currentValue) => accumulator + currentValue.TotalAmount, 0);
//     const number = orders.length;
//     const average = (sum / number).toFixed(2);
//     this.setState({ minOrderAmount, maxOrderAmount, sum, number, average });
//     this.initializeChart();
//   }

//   initializeChart = () => {
//     const chart = new Chart(this.chartRef.current, {
//       type: 'line',
//       data: {
//         labels: ['Minimum', 'Average', 'Maximum'],
//         datasets: [
//           {
//             label: '',
//             data: [this.state.minOrderAmount, this.state.average, this.state.maxOrderAmount],
//             fill: true,
//             backgroundColor: '#e0aaff',
//             borderColor: '#7b2cbf',
//             tension: 1,
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//       },
//     });
//     this.chart = chart;
//   };

//   updateChartData = () => {
//     this.chart.data.datasets[0].data = [this.state.minOrderAmount, this.state.average, this.state.maxOrderAmount];
//     this.chart.update();
//   };

//   render() {
//     return <Line ref={this.chartRef} />;
//   }
// }

// export default Orders;



class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    this.setState({ orders: ordersData });
    console.log(ordersData);
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
          label: '',
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
        <div style={{marginTop:'40px',marginLeft:'16px', border: "2px solid #3c096c",borderColor:'#3c096c',padding:'30px'}}>
        <b style={{fontFamily:'cursive', fontSize:'20px'}}>Order Summary</b>
        <div className='d-flex flex-row' style={{marginTop:'20px'}} >
        <div >
          <OrderLineChart />
        </div>
        <div style={{marginLeft:'250px'}}>
          <PieChart/></div>

      </div>
      </div>

          <div className="container my-2">
            <div style={{fontFamily:'Bebas Neue sans-serif',fontSize:'30px'}}>                
                    <b>List Of Orders</b>
             </div>
        
         <div className="row">
         {ordersData.map((element) => {
  return (
    <div className="col-md-3" key={element.OrderID}>
      <OrderItem order={element}  onDelete={this.deleteOrder}/>
    </div>
  );
})}
        </div>
        </div>




      </div>
    );
  }
}

export default Orders;