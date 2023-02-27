import React, { Component } from "react";
import Product from "./product";
import "./ProductInfo.css";
export class ProductInfo extends Component {
  products = [
    {
      id: "10001",
      title: "HOMOGENIZED TONED MILK - 500ML",
      type: "diary",
      description:
        "According to the Food Safety and Standards Authority of India (FSSAI) guidelines, the required quantity of vitamin A and vitamin D added for more nutritious. It contains 3 percent fat and 8.5 percent non-fat solids.",
      url: "https://www.milma.com/storage/products//July2022//hY97k2ggWPpPrcqRbpd7.jpg",
      price: "Rs. 30",
      rating: 4.7,
    },
    {
      id: "10002",
      title: "Eggs -Free Range",
      type: "diary",
      description:
        "6 nos . Eggs contains useful amounts of vitamins A, E, B5, B12, as well as iron, iodine and phosphorus – all vital nutrients in supporting your healthy, balanced diet. ",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXrE7ZHGnEohbFtnRmOYRKsJJjpz1ggIYXtBCzqsn&s.jpg",
      price: "Rs. 55",
      rating: 4,
    },
    {
      id: "10003",
      title: "Paneer",
      type: "diary",
      description:
        "100gm of Paneer pack. Paneer, also known as ponir, is a fresh acid-set cheese common in the Indian subcontinent made from full-fat buffalo milk or cow milk. It is a non-aged, non-melting soft cheese made by curdling milk with a fruit- or vegetable-derived acid, such as lemon juice.",
      url: "https://www.asknestle.in/sites/default/files/styles/original/public/2022-09/Eating-Paneer-1250x380.jpg?itok=EYSi8lnJ.jpg",
      price: "Rs. 100",
      rating: 4,
    },

    {
      id: "10004",
      title: "Curd",
      type: "diary",
      description:
        "500 ml of curd. Eating curd everyday will help in reducing cholesterol levels, thus lowers the risk of high blood pressure and hypertension. ",
      url: "https://www.bigbasket.com/media/uploads/p/xxl/40281258_1-milky-mist-greek-yogurt-natural-high-protein-no-added-sugar.jpg",
      price: "Rs. 100",
      rating: 4,
    },
  ];
  constructor() {
    super();
    this.state = {
      products: this.products,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <h2> BIG BASKET</h2>
        </div>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <div className="col" key={product.id}>
                <Product
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductInfo;
