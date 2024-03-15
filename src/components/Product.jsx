import React, { Component } from 'react'
import ProductItem from './ProductItem';
import { productsData } from '../../public/data/dummyData';
import ProductLineChart from './ProductLineChart';
import ProductPieChart from './ProductPieChart';

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {// assuming you want to show a loading indicator
      products: [], // initializing products as empty array
    };
  }

  componentDidMount() {
    this.setState({ products: productsData});
    console.log(productsData);
    // Simulate loading delay
    // setTimeout(() => {
     
    // }, 1000); // Adjust the delay time as per your requirement
  }

  render() {
    const {products } = this.state;
    const minProductAmount = Math.min(...products.map(product => products.TotalAmount));
    const maxProductAmount = Math.max(...products.map(product => products.TotalAmount));
    const sum = products.reduce((accumulator, currentValue) => accumulator + currentValue.TotalAmount, 0);
    const number=products.length;
    const average= (sum/number).toFixed(2);
    const data = {
        labels:["Minimum","Average","Maximum"],
        datasets: [
          {
            label:'',
            data:[minProductAmount,average,maxProductAmount],
            fill:true,
            backgroundColor:'#e0aaff',
            borderColor: '#7b2cbf',
            tension:1
          }
        ]
      };
      const options={
        scales: {
        x: {
          ticks: {
            color: '#9d4edd', // Change the color of x-axis labels here
          },
        },
        y: {
          ticks: {
            color: '#9d4edd', // Change the color of x-axis labels here
          },
        }
      }
    }
    return (
      <div>
      <div style={{marginTop:'40px',marginLeft:'16px', border: "2px solid #3c096c",borderColor:'#3c096c',padding:'30px'}}>
        <b style={{fontFamily:'cursive', fontSize:'20px'}}>Product Summary</b>
        <div className='d-flex flex-row' >
        <div style={{marginRight:'30px'}}>
          <ProductLineChart />
        </div>
        <div style={{marginLeft:'100px'}}>
          <ProductPieChart/></div>

      </div>
      </div>
      <div className="container my-4">
        <span style={{color:'#5a189a', fontFamily:'Roboto One sans-serif', fontSize:'20px'}}>Products</span>
        
        <div className="row">
          {products.map((element)=>{
            
            return <div className="col-md-4" key={element.ID}>
            <ProductItem Name={element.Name} Cost={element.Cost} ImageUrl={element.ImageUrl} />

            </div>
            }
          )}
        </div>

        </div>
        </div>
    )
  }
}
