import React from 'react'
import Navbar from './Navbar'
import { ordersData, productsData } from '../../public/data/dummyData'
import PieChart from './PieChart';
import Calendar1 from './Calendar1';
import Product from './Product';
import Orders from './Orders';
import DashboardComp from './DashboardComp';
import ProductPieChart from './ProductPieChart';
import ProductLineChart from './ProductLineChart';
import OrderLineChart from './OrderLineChart';

export default function Dashboard() {
  return (
    // <div> 
    //   <Navbar/>
        
    //     No of products and orders 
    //      <div className='d-flex flex-row'>
    //         <div className="fitScreen"><h3> total no of products</h3>
    //           <b><u> {productsData.length}</u> </b>
    //         </div>
    //         <div className="fitScreen"><h3> total no of orders</h3>
    //         <b><u> {ordersData.length}</u> </b>
    //         </div>
    //         <div className="fitScreen"><Calendar1/></div>
    //     </div>
    //    product and order charts
    //     <div>
    //     </div> 
    //      Buttons for product and order page 
    //      <div className="d-flex flex-row">
    //       <div><h3><button>Products</button></h3></div>
    //       <div><h3><button>Orders</button></h3></div>
    //     </div> 
    //      <PieChart/>
    // </div>  
    <div>
      <Navbar/>
    
      <DashboardComp/>
    </div>
    
  );
}
