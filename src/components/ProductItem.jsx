import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {Name,Cost, ImageUrl}=this.props;
    return (
      <div>
          <div className="card" style={{width:'25vw', height:'25vw', marginTop:'10vh'}}>
            <img src={this.props.ImageUrl} className="card-img-top" style={{height:'200px'}}/>
            <div className="card-body d-flex flex-row justify-content-between" style={{marginTop:'20px', fontFamily:'Manrope sans-serif', color:'#5a189a'}}>
              <div>
                  {this.props.Name}  
              </div>
            <div> 
                  Rs. {this.props.Cost}
                </div>
                
            </div>
          </div>
      </div>
    )
  }
}

