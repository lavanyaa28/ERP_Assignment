import React, { Component } from 'react'
import { ordersData } from '../../public/data/dummyData'
import { Pie } from 'react-chartjs-2';
import ProductPieChart from './ProductPieChart';
import PieChart from './PieChart';
import ProductLineChart from './ProductLineChart';
import OrderLineChart from './OrderLineChart';
import Calendar1 from './Calendar1';

export default class DashboardComp extends Component {
    
  render() {
    
    return (
      <div >
        <div className='d-flex flex-column'>
        <div  style={{marginTop:'20px', color:'#5a189a', fontFamily:'Manrope sans-serif ',position:'absolute', top:50, left:30, marginBottom:'0px'}}>
          <div style={{border:"#5a189a"}}>
          <b>Hey, welcome back<br/>
        Your personalized order and product management corner!!!!!</b>
          </div>
        <div style={{position:'absolute', left:20, marginTop:'0px', width:'550px',height:'550px'}}>
        <OrderLineChart/>
       </div>
        </div>
        <div style={{position:'absolute' ,right:80, top:60}}>
        <Calendar1/>
        </div>
        </div>
       
       <div className="d-flex flex-row" style={{position:'absolute',left:'70vh',marginTop:'220px'}}>
        <a href="#"><button className='btn' style={{color:'#5a189a'}}> Go to Order Page &rarr; </button></a>
        <a href="#"><button className='btn'  style={{color:'#5a189a'}}> Go to Product Page &rarr; </button></a>
        </div> 
        
      </div>
    )
  }
}
