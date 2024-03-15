import React,{ useEffect} from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Product from './components/Product.jsx';
import Orders from './components/Orders.jsx';

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//         <Route path="" element={<Dashboard/>}/>
//         <Route path="products" element={<Product/>}/>
//         <Route path="orders" element={<Orders/>}/>
//      </Route>

//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="products" element={<Product />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
