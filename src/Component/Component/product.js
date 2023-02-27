import React, { Component } from "react";
import "./Product.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IosShareIcon from '@mui/icons-material/IosShare';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export class Product extends Component {
  render() {
    let { title, description, imageUrl, price } = this.props;
    return (
      <>
        <div>
          <div class="color">
            <img src={imageUrl} alt="..." />
          </div>
          <h5>{title}</h5>
          <p>{description}</p>
          <div>{price}</div>
          <ThumbUpIcon/>
          <IosShareIcon/>
          <ShoppingCartIcon/>
        </div>
      </>
    );
  }
}

export default Product;
