import React from 'react'
import ErpImg from 'D:/ERP/public/data/settings.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top" style={{ background: 'linear-gradient(to right, #cddafd, #fad2e1)' }}>
  <div className="container-fluid">
    <div className="d-flex flex-row" style={{height:'30px',width:'30px'}}>
      <img src={ErpImg}></img>
      <Link className="navbar-brand" to="/" style={{color:'#7b2cbf', fontSize:'1em',marginLeft:'8px',fontFamily:"Madimi One sans-serif"}}>   ERP</Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{color:'#7b2cbf', backgroundColor:'#c77dff' }}>
      <span className="navbar-toggler-icon"  style={{color:'#7b2cbf'}}></span>
    </button>
    <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"  style={{color:'#7b2cbf'}}>
      <div className="offcanvas-header"  style={{color:'#7b2cbf'}}>
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ERP</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">Orders</Link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}