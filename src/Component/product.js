import React, { Component } from 'react'
import "./Product.css"
export class Product extends Component {
  render() {
    let {title, description, imageUrl,price} = this.props;
    return (
      <>
      <div> 
      <div class="color"><img src={imageUrl} alt="..." /></div>
    <h5>{title}</h5>
    <p>{description}</p>
    <div>{price}</div>
    <button>Like</button>
    <button>Share</button>
    <button>Purchase</button>
      </div>
        </>
    )
  }
}

export default Product